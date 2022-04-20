import { StyleSheet, View } from "react-native";
import { Formik } from "formik";
import { useNavigation } from "@react-navigation/native";
import FitButton from "../../../components/FitButton";
import FitInput from "../../../components/FitInput";

const RegistrationForm = () => {
  const navigation = useNavigation();

  return (
    <Formik
      initialValues={{ login: "", password: "", confirmPassword: "" }}
      onSubmit={(values) => {
        // TODO
        navigation.navigate("Dashboard");
      }}
    >
      {({ handleChange, handleSubmit, handleBlur, values }) => (
        <View style={styles.container}>
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
          <FitInput
            style={styles.spacing}
            label="Confirm Password"
            onChangeText={handleChange("confirm password")}
            onBlur={handleBlur("confirm password")}
            value={values.password}
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

  spacing: {
    marginTop: 20,
  },
});

export default RegistrationForm;