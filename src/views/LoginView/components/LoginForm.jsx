import { StyleSheet, View } from "react-native";
import { Formik } from "formik";
import FitButton from "../../../components/FitButton";
import FitInput from "../../../components/FitInput";
import Separator from "./Separator";

const LoginForm = () => {
  return (
    <Formik
      initialValues={{ login: "", password: "" }}
      onSubmit={(values) => {
        // TODO
      }}
    >
      {({ handleChange, handleSubmit, handleBlur, values }) => (
        <View style={styles.container}>
          <FitButton onPress={() => {}}>log in with google</FitButton>
          <Separator style={styles.spacing} />
          <FitInput
            style={styles.spacing}
            label="Login"
            onChangeText={handleChange("login")}
            onBlur={handleBlur("login")}
            value={values.login}
          />
          <FitInput
            style={styles.spacing}
            label="Password"
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
            value={values.password}
          />
          <FitButton style={{ marginTop: 32 }} onPress={handleSubmit}>
            Log in
          </FitButton>
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },

  spacing: {
    marginTop: 20,
  },
});

export default LoginForm;
