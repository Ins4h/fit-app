import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import FitButton from "../../components/FitButton";

const AccountSetupView = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Setup your account</Text>
      <FitButton onPress={() => navigation.navigate("Dashboard")}>
        Go to Dashboard
      </FitButton>
    </View>
  );
};

export default AccountSetupView;
