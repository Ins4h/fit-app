import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import DashboardStack from "../views/DashboardView/DashboardStack";
import WorkoutPlanStack from "../views/WorkoutPlanView/WorkoutPlanStack";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        headerShown: false,
      }}
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
