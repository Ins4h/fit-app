import { StatusBar } from "expo-status-bar";
import { Provider as PaperProvider } from "react-native-paper";
import { setCustomText } from "react-native-global-props";
import { NavigationContainer } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import { theme } from "./src/theme/theme";
import { customTextProps } from "./src/theme/customProps";
import LoginView from "./src/views/LoginView/LoginView";
import SignUpView from "./src/views/SignUpView/SignUpView";
import AccountSetupView from "./src/views/AccountSetupView/AccountSetupView";
import Header from "./src/components/Header";
import BottomTabNavigator from "./src/navigators/BottomTabNavigator";

export type RootStackParams = {
  TabNavigator;
  Login;
  SignUp;
};

const Stack = createNativeStackNavigator<RootStackParams>();

const navigatorScreenOptions = {
  header: (props) => {
    console.log(props);

    return (
      <Header {...props}>{props.options.title || props.route.name}</Header>
    );
  },
};

function App() {
  setCustomText(customTextProps);

  return (
    <PaperProvider theme={theme}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={navigatorScreenOptions}
        >
          <Stack.Screen
            name="TabNavigator"
            component={BottomTabNavigator}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Login"
            component={LoginView}
            options={{
              title: "FitApp",
            }}
          />
          <Stack.Screen name="AccountSetup" component={AccountSetupView} />
          <Stack.Screen
            name="SignUp"
            component={SignUpView}
            options={{
              title: "Create an account",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
