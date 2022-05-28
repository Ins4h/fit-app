import { View, Text, SafeAreaView, StyleSheet} from "react-native";
import { useNavigation, StackActions } from "@react-navigation/native";
import ToggleButton from "./components/ToggleButton";
import ToggleButton2 from "./components/ToggleButton2";
import ToggleButton3 from "./components/ToggleButton3";
import ToggleButton4 from "./components/ToggleButton4";
import ToggleButton5 from "./components/ToggleButton5";
import ToggleSection from "./components/ToggleSection";
import ToggleButton6 from "./components/ToggleButton6";
import { withTheme } from "react-native-paper";




const AccountSetupView = ({
  theme: {
    colors: { background },
  },
}) => {
  const navigation = useNavigation();


  return (
    <SafeAreaView style={styles(background).wrapper}>
      <ToggleSection></ToggleSection>
    <View style={styles().container}>     
      <ToggleButton></ToggleButton>
      <ToggleButton2></ToggleButton2>
      <ToggleButton3></ToggleButton3>
      <ToggleButton4></ToggleButton4>
      <ToggleButton5></ToggleButton5>
      <ToggleButton6></ToggleButton6>

      
    </View>
    </SafeAreaView>
  );
};

const styles = (background) =>
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
