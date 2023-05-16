import { StyleSheet } from "react-native";
import { TextInput, withTheme } from "react-native-paper";
import type { ThemeTypes } from "../theme/theme";

type TextInputProps = React.ComponentProps<typeof TextInput>;

type FitInputProps = TextInputProps & {
  theme: ThemeTypes;
};

const FitInput: React.FC<FitInputProps> = ({
  theme: { colors },
  style,
  ...rest
}) => {
  return (
    <TextInput
      textColor="white"
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

const styles = (background?) =>
  StyleSheet.create({
    input: {
      backgroundColor: background,
    },
  });

export default withTheme(FitInput);
