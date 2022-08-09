import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { withTheme } from "react-native-paper";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import type { NativeStackNavigationProp, NativeStackNavigationOptions } from "@react-navigation/native-stack";
import type { ThemeTypes } from "../theme/theme";
import { RootStackParams } from "../../App";

interface ExtendedStackNavigationOptions extends NativeStackNavigationOptions {
  hideBackButton: Boolean;
}

interface HeaderProps {
  navigation: NativeStackNavigationProp<RootStackParams>;
  theme: ThemeTypes;
  options: ExtendedStackNavigationOptions;
}

const Header: React.FC<HeaderProps> = ({ children, navigation, options, theme: { colors } }) => {
  const canGoBack = navigation.canGoBack() && !options.hideBackButton;

  return (
    <LinearGradient colors={colors.primaryGreen} style={[styles.container]}>
      <View style={styles.header}>
        {canGoBack && (
          <View style={styles.backButton}>
            <FontAwesome.Button
              name="chevron-left"
              backgroundColor="transparent"
              onPress={() => navigation.pop()}
            />
          </View>
        )}
        <Text style={styles.text}>{children}</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },

  header: {
    height: 102,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
  },

  text: {
    fontSize: 24,
    paddingBottom: 18,
    fontWeight: "bold",
    color: "white",
  },

  backButton: {
    position: "absolute",
    fontSize: 24,
    left: 15,
    bottom: 15,
  },
});

export default withTheme(Header);
