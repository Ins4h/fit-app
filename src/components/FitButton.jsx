import { StyleSheet, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Button, withTheme } from "react-native-paper";

const FitButton = (props) => {
  const {
    theme: { colors, roundness },
    children,
    size,
    style,
    ...rest
  } = props;

  return (
    <LinearGradient
      colors={colors.primary}
      style={[styles(size, roundness).container, style]}
    >
      <Button color="#fff" {...rest}>
        <Text style={styles().text}>{children || "button"}</Text>
      </Button>
    </LinearGradient>
  );
};

const styles = (size, roundness) =>
  StyleSheet.create({
    container: {
      width: size === "medium" ? "50%" : "100%",
      borderRadius: roundness,
      overflow: "hidden",
    },

    text: {
      fontSize: 15,
      fontFamily: "Roboto",
      fontWeight: "500",
    },
  });

export default withTheme(FitButton);
