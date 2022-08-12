import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  StyleProp,
  ViewStyle,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { withTheme } from "react-native-paper";
import FitButton from "../../components/FitButton";
import SignUpForm from "./components/SignUpForm";
import Logo from "../../components/Logo";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParams } from "../../../App";
import type { ThemeTypes } from "../../theme/theme";

const SignUpView: React.FC<{ theme: ThemeTypes }> = ({
  theme: {
    colors: { background },
  },
}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  return (
    <SafeAreaView style={styles(background).wrapper}>
      <View style={styles().container}>
        <Logo style={{ marginTop: 42 } as StyleProp<ViewStyle>} />
        <SignUpForm />
        <View>
          <Text style={styles().signUpText}>Already have an account?</Text>
          <FitButton
            style={{ marginTop: 16, marginBottom: 42 }}
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            Log in!
          </FitButton>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = (background?) =>
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

export default withTheme(SignUpView);
