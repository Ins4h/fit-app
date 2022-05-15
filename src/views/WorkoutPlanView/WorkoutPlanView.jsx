import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { withTheme } from "react-native-paper";
import FitButton from "../../components/FitButton";

const WorkoutPlanView = ({
  theme: {
    colors: { background },
  },
}) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: background,
      }}
    >
      <Text>WorkoutView</Text>
      <FitButton onPress={() => navigation.navigate("Test")}>Go test</FitButton>
    </View>
  );
};

export default withTheme(WorkoutPlanView);
