import { StyleSheet, View, SafeAreaView, Text } from "react-native";
import Header from "../../components/Header";
import FitButton from "../../components/FitButton";
import LoginForm from "./components/LoginForm";
import Logo from "../../components/Logo";

const LoginView = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <Header>FitApp</Header>
      <View style={styles.container}>
        <Logo style={{ marginTop: 32 }} />
        <LoginForm />
        <View>
          <Text style={styles.signUpText}>Don't have an account?</Text>
          <FitButton
            style={{ marginTop: 16, marginBottom: 42 }}
            onPress={() => {
              // TODO
            }}
          >
            sign up!
          </FitButton>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center",
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

export default LoginView;
