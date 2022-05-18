import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View } from "react-native";
import Header from "../../components/Header";
import WorkoutPlanView from "./WorkoutPlanView";
import WorkoutPresetView from "../WorkoutPresetView/WorkoutPresetView";

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
        />
        <Stack.Screen name="WorkoutPreset" component={WorkoutPresetView} />
      </Stack.Navigator>
    </View>
  );
};

export default WorkoutPlanStack;
