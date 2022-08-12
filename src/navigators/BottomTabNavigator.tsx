import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import DashboardStack from "../views/DashboardView/DashboardStack";
import WorkoutPlanStack from "../views/WorkoutPlanView/WorkoutPlanStack";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

type BottomTabNavigatorParams = {
  Dashboard;
  Workout;
}

const Tab = createMaterialBottomTabNavigator<BottomTabNavigatorParams>();

const BottomTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      barStyle={{ backgroundColor: "#454545" }}
      activeColor="#4CAF50"
    >
      <Tab.Screen
        name="Dashboard"
        component={DashboardStack}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Workout"
        component={WorkoutPlanStack}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="dumbbell" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
