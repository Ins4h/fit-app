import { StyleSheet, View } from "react-native";
import { Formik } from "formik";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../../../../firebase.config";
import FitButton from "../../../components/FitButton";
import FitInput from "../../../components/FitInput";
import Separator from "./Separator";

const LoginForm = () => {
  const navigation = useNavigation();

  const handleSignUp = ({ email, password }) => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(() => navigation.navigate("AccountSetup"))
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values) => {
        handleSignUp(values);
      }}
    >
      {({ handleChange, handleSubmit, handleBlur, values }) => (
        <View style={styles.container}>
          <FitButton onPress={() => {}}>log in with google</FitButton>
          <Separator style={styles.spacing} />
          <FitInput
            style={styles.spacing}
            label="E-mail"
            onChangeText={handleChange("email")}
            onBlur={handleBlur("email")}
            value={values.email}
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
    flex: 1,
    marginTop: 50,
  },

  spacing: {
    marginTop: 20,
  },
});

export default LoginForm;
