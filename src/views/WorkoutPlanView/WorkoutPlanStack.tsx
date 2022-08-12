import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View } from "react-native";
import Header from "../../components/Header";
import WorkoutPlanView from "./WorkoutPlanView";
import WorkoutPresetView from "../WorkoutPresetView/WorkoutPresetView";
import EditWorkoutView from "../EditWorkoutView/EditWorkoutView";
import uuid from "react-native-uuid";
import EditExerciseView from "../EditExerciseView/EditExerciseView";
import ListOfExercisesView from "../ListOfExercisesView/ListOfExercisesView";
import type { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import type { HeaderProps } from "../../components/Header";


export type WorkoutPlanStackParams = {
  WorkoutPlan;
  WorkoutPreset;
  EditWorkout;
  EditExercise;
  ListOfExercises
}

const Stack = createNativeStackNavigator<WorkoutPlanStackParams>();

const navigatorScreenOptions: NativeStackNavigationOptions = {
  header: (props: HeaderProps) => (
    <Header {...props}>{props.options.title || props.route.name}</Header>
  ),
};

const WorkoutPlanStack = () => {
  return (
    <View style={{ flex: 1 }} collapsable={false}>
      <Stack.Navigator
        initialRouteName="WorkoutPlan"
        screenOptions={navigatorScreenOptions}
      >
        <Stack.Screen
          name="WorkoutPlan"
          component={WorkoutPlanView}
          options={ () => ({
            hideBackButton: true,
            title: "Workout Planner",
          })}
          // initialParams={{ workoutDay: {} }}
        />
        <Stack.Screen
          name="WorkoutPreset"
          component={WorkoutPresetView}
          options={{
            title: "Workout Preset",
          }}
        />
        <Stack.Screen
          name="EditWorkout"
          component={EditWorkoutView}
          options={{
            title: "Edit Workout",
          }}
          initialParams={{ exercise: mockExerciseItem }}
        />
        <Stack.Screen
          name="EditExercise"
          component={EditExerciseView}
          options={{
            title: "Edit Exercise",
          }}
        />
        <Stack.Screen
          name="ListOfExercises"
          component={ListOfExercisesView}
          options={{
            title: "List Of Exercises",
          }}
        />
      </Stack.Navigator>
    </View>
  );
};

const mockWorkoutDay = {
  id: uuid.v4(),
  name: "Potężne nogi",
  day: "Wednesday",
  time: "16:30",
  exercises: [],
};

const mockExerciseItem = {
  id: uuid.v4(),
  name: "Benchpress",
  weights: 40,
  sets: 4,
  reps: 12,
  breaks: 60,
};

export default WorkoutPlanStack;
