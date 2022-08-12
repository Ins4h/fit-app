import { DefaultTheme } from "react-native-paper";

export const theme = {
  ...DefaultTheme,
  roundness: 4,
  colors: {
    ...DefaultTheme.colors,
    primaryGreen: ["#4CAF50", "#388E3C"],
    secondary: "#2C2C2C",
    background: "#212121",
    gray: "#bcbcbc",
    secondaryGray: "#7e7e7e",
  },
};

export type ThemeTypes = typeof theme;
