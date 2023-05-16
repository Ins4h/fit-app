import { StyleSheet, View, GestureResponderEvent } from "react-native";
import { Formik } from "formik";
import { useNavigation, StackActions } from "@react-navigation/native";
import { auth } from "../../../../firebase.config";
import FitButton from "../../../components/FitButton";
import FitInput from "../../../components/FitInput";
import Separator from "./Separator";

const LoginForm: React.FC = () => {
  const navigation = useNavigation();

  const handleSignInWithEmailAndPassword = ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        navigation.dispatch(StackActions.replace("TabNavigator"));
      })
      .catch((error) => console.log(error));
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values) => {
        handleSignInWithEmailAndPassword(values);
      }}
    >
      {({ handleChange, handleSubmit, handleBlur, values }) => (
        <View style={styles.container}>
          <FitButton
            onPress={() => {
              navigation.dispatch(StackActions.replace("TabNavigator"));
            }}
          >
            log in with google
          </FitButton>
          <Separator style={styles.spacing} />
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
            secureTextEntry
          />
          <FitButton
            style={{ marginTop: 32 }}
            onPress={(e: any) => handleSubmit(e)}
          >
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
