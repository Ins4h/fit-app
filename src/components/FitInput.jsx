import { StyleSheet } from "react-native";
import { TextInput, withTheme } from "react-native-paper";

const FitInput = ({ theme: { colors }, style, filled, ...rest }) => {
  return (
    <TextInput
      style={styles(colors, filled).input}
      underlineColor={colors.secondaryGray}
      selectionColor={colors.secondaryGray}
      outlineColor={colors.gray}
      theme={{
        colors: {
          text: "#fff",
          placeholder: colors.gray,
          primary: colors.gray,
        },
      }}
      {...rest}
    />
  );
};

const styles = ({ background, secondary }, isFilled) =>
  StyleSheet.create({
    input: {
      backgroundColor: isFilled ? secondary : background,
    },
  });

export default withTheme(FitInput);
