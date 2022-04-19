import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const DashboardView = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Dashboard</Text>
      <Button
        title="Back to login"
        onPress={() => {
          navigation.navigate("Login");
        }}
      />
    </View>
  );
};

export default DashboardView;
