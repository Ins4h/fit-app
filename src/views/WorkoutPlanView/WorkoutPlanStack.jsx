import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View } from "react-native";
import Header from "../../components/Header";
import WorkoutPlanView from "./WorkoutPlanView";
import Test from "./Test";
import EditWorkoutView from "../EditWorkoutView/EditWorkoutView";

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
          }}
        />
        <Stack.Screen name="Test" component={Test} />
        <Stack.Screen name="EditWorkout" component={EditWorkoutView} />
      </Stack.Navigator>
    </View>
  );
};

export default WorkoutPlanStack;
