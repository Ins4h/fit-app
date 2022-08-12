import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View } from "react-native";
import DashboardView from "./DashboardView";
import StartWorkoutView from "../StartWorkoutView/StartWorkoutView";
import Header from "../../components/Header";
import type { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import type { HeaderProps } from "../../components/Header";


export type DashboardStackParam = {
  DashboardView;
  StartWorkout;
}

const Stack = createNativeStackNavigator<DashboardStackParam>();

const navigatorScreenOptions: NativeStackNavigationOptions = {
  header: (props: HeaderProps) => (
    <Header {...props}>{props.options.title || props.route.name}</Header>
  ),
};

const DashboardStack: React.FC = () => {
  return (
    <View style={{ flex: 1 }} collapsable={false}>
      <Stack.Navigator
        initialRouteName="DashboardView"
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
