import { View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MyToggleButton from "./components/MyToggleButton";
import { withTheme } from "react-native-paper";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { WorkoutPlanStackParams } from "../WorkoutPlanView/WorkoutPlanStack";
import type { ThemeTypes } from "../../theme/theme";

interface ExerciseType {
  name: string;
  difficulty: string;
}

const AccountSetupView: React.FC<{ theme: ThemeTypes }> = ({
  theme: {
    colors: { background },
  },
}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<WorkoutPlanStackParams>>();

  const add = (exercise: ExerciseType) => {
    navigation.navigate("EditWorkout", { exercise: exercise });
  };

  return (
    <View style={styles(background).container}>
      <MyToggleButton name={"Bench press"} difficulty={"Hard"} onAdd={add} />
      <MyToggleButton name={"Pull ups"} difficulty={"Hard"} onAdd={add} />
      <MyToggleButton name={"Push ups"} difficulty={"Hard"} onAdd={add} />
      <MyToggleButton name={"Yates rows"} difficulty={"Hard"} onAdd={add} />
      <MyToggleButton
        name={"Deadlift classic"}
        difficulty={"Hard"}
        onAdd={add}
      />
      <MyToggleButton name={"Deadlift sumo"} difficulty={"Hard"} onAdd={add} />
    </View>
  );
};

const styles = (background?) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: background,
      padding: 16,
    },
  });

export default withTheme(AccountSetupView);
