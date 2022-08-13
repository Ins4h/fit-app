import { useState } from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { useNavigation, StackActions } from "@react-navigation/native";
import FitButton from "../../components/FitButton";
import FitToggleButton from "./components/FitToggleButton";
import ToggleButtonOptions from "./components/ToggleButtonoptions";
import FitInput from "../../components/FitInput";
import { withTheme } from "react-native-paper";
import type { ThemeTypes } from "../../theme/theme";

const AccountSetupView: React.FC<{ theme: ThemeTypes }> = ({
  theme: {
    colors: { background, secondary },
  },
}) => {
  const [weight, setWeight] = useState<string>();
  const [height, setHeight] = useState<string>();

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles(background).wrapper}>
      <View style={styles().container}>
        <View>
          <Text style={styles().text}>Gender</Text>
          <FitToggleButton />
        </View>
        <View>
          <FitInput
            style={styles().Inputs}
            label="Weight [kg]"
            keyboardType="numeric"
            maxLength={3}
            mode="outlined"
            onChangeText={(text) => setHeight(text.replace(/[^0-9]/g, ""))}
            value={height}
            outlineColor="#545454"
          />
          <FitInput
            style={styles().Inputs}
            label="Height [cm]"
            keyboardType="numeric"
            mode="outlined"
            maxLength={3}
            onChangeText={(text) => setWeight(text.replace(/[^0-9]/g, ""))}
            value={weight}
            outlineColor="#545454"
          />
        </View>
        <View>
          <Text style={{ marginBottom: 10, fontSize: 12 }}>
            Current workout level
          </Text>
          <ToggleButtonOptions
            options={["Beginner", "Intermediate", "Advanced"]}
          />

          <Text style={{ marginTop: 30, marginBottom: 10, fontSize: 12 }}>
            Top goal
          </Text>
          <ToggleButtonOptions
            options={["Maintaining", "Bulking", "Cutting"]}
          ></ToggleButtonOptions>
        </View>
        <FitButton
          style={{ marginTop: 30, alignSelf: "flex-end" }}
          size="medium"
          onPress={() =>
            navigation.dispatch(StackActions.replace("TabNavigator"))
          }
        >
          Next
        </FitButton>
      </View>
    </SafeAreaView>
  );
};

const styles = (background?: string) =>
  StyleSheet.create({
    text: {
      textAlign: "center",
      marginBottom: 20,
      marginTop: 20,
    },

    Inputs: {
      alignSelf: "center",
      width: "70%",
      marginTop: 20,
      height: 50,
    },

    wrapper: {
      flex: 1,
      alignItems: "center",
      backgroundColor: background,
    },

    container: {
      flex: 1,
      justifyContent: "space-around",
      width: "90%",
    },

    signUpText: {
      fontSize: 10,
    },
  });

export default withTheme(AccountSetupView);
