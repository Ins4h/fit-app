import * as React from "react";
import { withTheme } from "react-native-paper";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import type { ThemeTypes } from "../../../theme/theme";

interface ToggleButtonOptionsProps {
  theme: ThemeTypes;
  options: string[];
}

const ToggleButtonOptions: React.FC<ToggleButtonOptionsProps> = ({
  theme: {
    colors: { secondary, primaryGreen },
  },
  options,
}) => {
  const [value, setValue] = React.useState<string>(null);

  return (
    <View style={styles().wrapper}>
      <LinearGradient
        colors={value === options[0] ? primaryGreen : [secondary, secondary]}
        style={styles().leftButton}
      >
        <TouchableOpacity
          style={styles().touchable}
          onPress={() => setValue(options[0])}
        >
          <Text>{options[0]}</Text>
        </TouchableOpacity>
      </LinearGradient>
      <LinearGradient
        colors={value === options[1] ? primaryGreen : [secondary, secondary]}
        style={styles().centerButton}
      >
        <TouchableOpacity
          style={styles().touchable}
          onPress={() => setValue(options[1])}
        >
          <Text>{options[1]}</Text>
        </TouchableOpacity>
      </LinearGradient>
      <LinearGradient
        colors={value === options[2] ? primaryGreen : [secondary, secondary]}
        style={styles().rightButton}
      >
        <TouchableOpacity
          style={styles().touchable}
          onPress={() => setValue(options[2])}
        >
          <Text>{options[2]}</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

const styles = () =>
  StyleSheet.create({
    wrapper: {
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
      height: 48,
    },

    centerButton: {
      width: "33.3%",
      height: "100%",
    },

    leftButton: {
      width: "33.3%",
      height: "100%",
      borderBottomLeftRadius: 12,
      borderTopLeftRadius: 12,
    },

    rightButton: {
      width: "33.3%",
      height: "100%",
      borderBottomRightRadius: 12,
      borderTopRightRadius: 12,
    },

    touchable: {
      height: "100%",
      justifyContent: "center",
      alignItems: "center",
    },
  });

export default withTheme(ToggleButtonOptions);
