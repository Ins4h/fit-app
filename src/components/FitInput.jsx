import { StyleSheet } from "react-native";
import { TextInput, withTheme } from "react-native-paper";

const FitInput = ({ theme: { colors }, style, ...rest }) => {
  return (
    <TextInput
      style={[styles(colors.background).input, style]}
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

const styles = (background) =>
  StyleSheet.create({
    input: {
      backgroundColor: background,
    },
  });

export default withTheme(FitInput);
