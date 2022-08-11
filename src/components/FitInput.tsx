import { StyleSheet, StyleProp, TextStyle, TextInputAndroidProps } from "react-native";
import { TextInput, withTheme } from "react-native-paper";
import type { ThemeTypes } from "../theme/theme";


interface FitInputProps extends TextInputAndroidProps {
  theme: ThemeTypes;
  style: StyleProp<TextStyle>;
}

const FitInput: React.FC<FitInputProps> = ({ theme: { colors }, style, ...rest }) => {
  return (
    <TextInput
      autoComplete="off" // workaround for react-native-paper types bug, works with = @types/react-native@0.68.3
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
