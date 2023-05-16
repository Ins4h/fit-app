import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { ThemeTypes } from "../../theme/theme";
import { StyleSheet } from "react-native";
import { withTheme } from "react-native-paper";
import { useAppSelector } from "../../hooks/reduxHooks";
import { WorkoutPlanProp } from "../../../types";
import WarmupTimer from "./components/WarmupTimer";
import FitButton from "../../components/FitButton";
import { RouteProp, useNavigation } from "@react-navigation/native";
import type { WorkoutPlanStackParams } from "../WorkoutPlanView/WorkoutPlanStack";
import StartExercise from "./components/StartExercise";

const StartWorkoutView: React.FC<{
  theme: ThemeTypes;
  route: RouteProp<WorkoutPlanStackParams>;
}> = ({
  theme: {
    colors: { background },
  },
  route,
}) => {
  const workoutPlan: WorkoutPlanProp | null = useAppSelector(
    (state) => state.plan
  );

  const workoutItem = workoutPlan.workoutItem.find(
    (item) => item.id === route.params?.workoutItemId
  );

  console.log(workoutItem);

  return (
    <View style={styles(background).wrapper}>
      {/* <WarmupTimer /> */}
      <StartExercise exerciseItem={workoutItem.exercises[0]} />

      <FitButton size="medium">Next</FitButton>
    </View>
  );
};

const styles = (background?) =>
  StyleSheet.create({
    wrapper: {
      flex: 1,
      alignItems: "center",
      backgroundColor: background,
    },
    container: {
      flex: 1,
      justifyContent: "space-between",
      width: "82%",
    },
  });
export default withTheme(StartWorkoutView);
