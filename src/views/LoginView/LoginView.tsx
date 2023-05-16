import { StyleSheet, View, SafeAreaView, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { withTheme } from "react-native-paper";
import FitButton from "../../components/FitButton";
import LoginForm from "./components/LoginForm";
import Logo from "../../components/Logo";
import { RootStackParams } from "../../../App";

const LoginView = ({
  theme: {
    colors: { background },
  },
}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  return (
    <SafeAreaView style={styles(background).wrapper}>
      <View style={styles().container}>
        <Logo style={{ marginTop: 42 }} />
        <LoginForm />
        <View>
          <Text style={styles().signUpText}>Don't have an account?</Text>
          <FitButton
            style={{ marginTop: 16, marginBottom: 42 }}
            onPress={() => {
              navigation.navigate("SignUp");
            }}
          >
            sign up!
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
      fontSize: 12,
    },
  });

export default withTheme(LoginView);
