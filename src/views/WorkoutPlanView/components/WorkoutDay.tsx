import { View, Text, StyleSheet } from "react-native";
import { withTheme } from "react-native-paper";
import type { ThemeTypes } from "../../../theme/theme";

interface WorkoutDayProps {
  name: string;
  day: string;
  time: string;
  theme: ThemeTypes;
}

const WorkoutDay: React.FC<WorkoutDayProps> = ({
  name,
  day,
  time,
  theme: { colors },
}) => {
  return (
    <View style={styles(colors.secondary).container}>
      <Text style={styles().name}>{name}</Text>
      <Text style={styles().daytime}>
        {day} - {time}
      </Text>
    </View>
  );
};

const styles = (background?) =>
  StyleSheet.create({
    container: {
      width: "100%",
      height: 84,
      marginTop: 16,
      paddingLeft: 20,
      justifyContent: "center",
      backgroundColor: background,
      borderRadius: 6,
    },

    name: {
      fontSize: 20,
    },

    daytime: {
      fontSize: 14,
    },
  });

export default withTheme(WorkoutDay);
