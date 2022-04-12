import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { withTheme } from "react-native-paper";

const Header = ({ children, style, theme: { colors } }) => {
  return (
    <LinearGradient colors={colors.primary} style={[styles.container, style]}>
      <View style={styles.header}>
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
    height: 72,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});

export default withTheme(Header);
