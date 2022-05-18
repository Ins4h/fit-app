import { View, Text } from "react-native";
import { withTheme } from "react-native-paper";

const WorkoutPresetView = ({ theme: { colors } }) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.background,
      }}
    >
      <Text>WORKOUT PRESET VIEW</Text>
      <Text>TODO</Text>
    </View>
  );
};

export default withTheme(WorkoutPresetView);
