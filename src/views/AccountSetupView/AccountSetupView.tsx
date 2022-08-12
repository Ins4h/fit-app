import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { useNavigation, StackActions } from "@react-navigation/native";
import FitButton from "../../components/FitButton";
import ToggleButton from "./components/FitToggleButton";
import ToggleButtonLevel from "./components/ToggleButtonLevel";
import ToggleButtonGoal from "./components/ToggleButtonGoal";
import FitInput from "../../components/FitInput";
import { withTheme } from "react-native-paper";
import type { ThemeTypes } from "../../theme/theme";


const AccountSetupView: React.FC<{theme: ThemeTypes}> = ({
  theme: {
    colors: { background },
  },
}) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles(background).wrapper}>
      <View style={styles().container}>
        <Text style={{ textAlign: "center", marginTop: 50, marginBottom: 10 }}>
          Gender
        </Text>
        <ToggleButton></ToggleButton>

        <FitInput
          style={{ marginTop: 0, marginBottom: 15 }}
          label="Weight [kg]"
          //onChangeText={handleChange("email")}
          //onBlur={handleBlur("email")}
          //value={values.email}
        />
        
        <FitInput
          label="Height [cm]"
          //onChangeText={handleChange("email")}
          //onBlur={handleBlur("email")}
          //value={values.email}
        />

        <Text style={{ marginTop: 20, marginBottom: 15 }}>
          Current workout level
        </Text>
        <ToggleButtonLevel></ToggleButtonLevel>

        <Text style={{ marginTop: 20, marginBottom: 15 }}>Top goal</Text>
        <ToggleButtonGoal></ToggleButtonGoal>

        <FitButton
          style={{ marginTop: 30 }}
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
    wrapper: {
      flex: 1,
      alignItems: "center",
      backgroundColor: background,
    },

    container: {
      flex: 1,
      justifyContent: "space-between",
      width: "82%",
    },

    signUpText: {
      fontSize: 10,
    },
  });

export default withTheme(AccountSetupView);
