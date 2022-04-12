import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, KeyboardAvoidingView } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { setCustomText } from "react-native-global-props";
import { theme } from "./src/theme/theme";
import { customTextProps } from "./src/theme/customProps";
import LoginView from "./src/views/LoginView/LoginView";

function App() {
  setCustomText(customTextProps);

  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        <View style={{ height: 40 }}>
          <StatusBar style="auto" />
        </View>
        <LoginView />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
});

export default App;
