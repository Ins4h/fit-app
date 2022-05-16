import { StyleSheet, View } from "react-native";
import { useState } from "react";
import { Formik } from "formik";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../../../../firebase.config";
import FitButton from "../../../components/FitButton";
import FitInput from "../../../components/FitInput";

const SignUpForm = () => {
  const navigation = useNavigation();
  const [passwordNotMatch, setPasswordNotMatch] = useState(false);

  const handleSignUp = (email, password) => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(() =>
        navigation.reset({
          index: 0,
          routes: [{ name: "AccountSetup" }],
        })
      )
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Formik
      initialValues={{ email: "", password: "", confirmPassword: "" }}
      onSubmit={({ email, password, confirmPassword }, actions) => {
        if (password === confirmPassword) handleSignUp(email, password);
        else {
          actions.setValues({ password: "", confirmPassword: "" });
          setPasswordNotMatch(true);
        }
      }}
    >
      {({ handleChange, handleSubmit, handleBlur, values }) => (
        <View style={styles.container}>
          <FitInput
            label="E-mail"
            onChangeText={handleChange("email")}
            onBlur={handleBlur("email")}
            value={values.email}
          />
          <FitInput
            label="Password"
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
            value={values.password}
            onFocus={() => setPasswordNotMatch(false)}
            secureTextEntry
            error={passwordNotMatch}
          />
          <FitInput
            label="Confirm Password"
            onChangeText={handleChange("confirmPassword")}
            onBlur={handleBlur("confirmPassword")}
            onFocus={() => setPasswordNotMatch(false)}
            value={values.confirmPassword}
            secureTextEntry
            error={passwordNotMatch}
          />
          <FitButton style={{ marginTop: 32 }} onPress={handleSubmit}>
            Create an account
          </FitButton>
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
});

export default SignUpForm;
