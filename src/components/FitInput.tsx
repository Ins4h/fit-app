import { StyleSheet, StyleProp, TextStyle } from "react-native";
import { TextInput, withTheme } from "react-native-paper";
import type { ThemeTypes } from "../theme/theme";


interface FitInputProps {
  theme: ThemeTypes;
  style: StyleProp<TextStyle>;
}

const FitInput: React.FC<FitInputProps> = ({ theme: { colors }, style, ...rest }) => {
  return (
    <TextInput
      autoComplete="off" // workaround for react-native-paper types bug, only works = @types/react-native@0.64.5
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

export default withTheme(FitInput)
