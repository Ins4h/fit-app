import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View } from "react-native";
import DashboardView from "./DashboardView";
import StartWorkoutView from "../StartWorkoutView/StartWorkoutView";
import Header from "../../components/Header";

const Stack = createNativeStackNavigator();

const navigatorScreenOptions = {
  header: (props) => (
    <Header {...props}>{props.options.title || props.route.name}</Header>
  ),
};

const DashboardStack = () => {
  return (
    <View style={{ flex: 1 }} collapsable={false}>
      <Stack.Navigator
        initialRouteName="Dashboardview"
        screenOptions={navigatorScreenOptions}
      >
        <Stack.Screen
          name="DashboardView"
          component={DashboardView}
          options={{
            title: "Dashboard",
          }}
        />
        <Stack.Screen name="StartWorkout" component={StartWorkoutView} />
      </Stack.Navigator>
    </View>
  );
};

export default DashboardStack;
