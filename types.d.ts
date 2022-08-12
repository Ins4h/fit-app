import { ThemeTypes } from "./src/theme/theme";

declare global {
  namespace ReactNativePaper {
    interface Theme extends ThemeTypes {
      colors: {
        primaryGreen: string[];
      };
    }
  }
}
