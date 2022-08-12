import { View, Text } from "react-native";
import { withTheme } from "react-native-paper";
import type { ThemeTypes } from "../../theme/theme";

const WorkoutPresetView: React.FC<{ theme: ThemeTypes }> = ({
  theme: { colors },
}) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.background,
      }}
    >
      <Text>Available soon!</Text>
    </View>
  );
};

export default withTheme(WorkoutPresetView);
