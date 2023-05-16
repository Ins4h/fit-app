import React, { useState } from "react";
import { ToggleButton, withTheme, Button } from "react-native-paper";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import type { ThemeTypes } from "../../../theme/theme";

const FitToggleButton: React.FC<{ theme: ThemeTypes }> = ({
  theme: {
    colors: { background, secondary, primaryGreen },
  },
}) => {
  const [value, setValue] = useState<string>(null);

  return (
    <ToggleButton.Row
      onValueChange={(value) => setValue(value)}
      value={value}
      style={{
        justifyContent: "center",
        backgroundColor: background,
        borderRadius: 6,
      }}
    >
      <LinearGradient
        colors={value === "female" ? primaryGreen : [secondary, secondary]}
        style={styles().button}
      >
        <ToggleButton
          iconColor="white"
          icon="gender-female"
          size={44}
          value="female"
          style={{ backgroundColor: "transparent" }}
        />
      </LinearGradient>
      <LinearGradient
        colors={value === "male" ? primaryGreen : [secondary, secondary]}
        style={styles().button}
      >
        <ToggleButton
          iconColor="white"
          icon="gender-male"
          value="male"
          size={40}
          style={{ backgroundColor: "transparent" }}
        />
      </LinearGradient>
    </ToggleButton.Row>
  );
};

const styles = () =>
  StyleSheet.create({
    button: {
      justifyContent: "center",
      alignItems: "center",
      width: 64,
      height: 64,
      borderRadius: 16,
      marginRight: 8,
      marginLeft: 8,
    },
  });

export default withTheme(FitToggleButton);
