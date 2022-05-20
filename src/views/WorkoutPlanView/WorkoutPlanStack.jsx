import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View } from "react-native";
import Header from "../../components/Header";
import WorkoutPlanView from "./WorkoutPlanView";
import WorkoutPresetView from "../WorkoutPresetView/WorkoutPresetView";
import EditWorkoutView from "../EditWorkoutView/EditWorkoutView";
import uuid from "react-native-uuid";

const Stack = createNativeStackNavigator();

const navigatorScreenOptions = {
  header: (props) => (
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
          options={{
            hideBackButton: true,
            title: "Workout Planner",
          }}
          initialParams={{ workoutDay: mockWorkoutDay }}
        />
        <Stack.Screen
          name="WorkoutPreset"
          component={WorkoutPresetView}
        />
        <Stack.Screen
          name="EditWorkout"
          component={EditWorkoutView}
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
  breaks: 60,
  exercises: []
}

export default WorkoutPlanStack;
