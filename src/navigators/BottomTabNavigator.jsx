import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import DashboardStack from "../views/DashboardView/DashboardStack";
import WorkoutPlanStack from "../views/WorkoutPlanView/WorkoutPlanStack";

const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="Dashboard" component={DashboardStack} />
      <Tab.Screen name="Workout" component={WorkoutPlanStack} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
