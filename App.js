import { StatusBar } from "expo-status-bar";
import { Provider as PaperProvider } from "react-native-paper";
import { setCustomText } from "react-native-global-props";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { theme } from "./src/theme/theme";
import { customTextProps } from "./src/theme/customProps";
import DashboardView from "./src/views/DashboardView/DashboardView";
import LoginView from "./src/views/LoginView/LoginView";
import SignUpView from "./src/views/SignUpView/SignUpView";
import AccountSetupView from "./src/views/AccountSetupView/AccountSetupView";
import Header from "./src/components/Header";

const Stack = createNativeStackNavigator();

const navigatorScreenOptions = {
  header: (props) => (
    <Header {...props}>{props.options.title || props.route.name}</Header>
  ),
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
          <Stack.Screen name="Dashboard" component={DashboardView} />
          <Stack.Screen
            name="Login"
            component={LoginView}
            options={{
              title: "FitApp",
            }}
          />
          <Stack.Screen name="SignUp" component={SignUpView} />
          <Stack.Screen name="AccountSetup" component={AccountSetupView} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
