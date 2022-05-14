import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { withTheme } from "react-native-paper";
import { auth } from "../../../firebase.config";
import FitButton from "../../components/FitButton";

const DashboardView = ({
  theme: {
    colors: { background },
  },
}) => {
  const navigation = useNavigation();
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() =>
        navigation.reset({
          index: 0,
          routes: [{ name: "Login" }],
        })
      )
      .catch((error) => alert(error.message));
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: background,
      }}
    >
      <Text>Dashboard</Text>
      <Text>email: {auth.currentUser?.email || "NOT LOGGED IN"}</Text>
      <FitButton onPress={handleSignOut}>SignOut</FitButton>
    </View>
  );
};

export default withTheme(DashboardView);
