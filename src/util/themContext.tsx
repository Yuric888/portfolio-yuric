import { createContext } from "react";
type ThemeColor = {
  dark: {
    color: string;
    background: string;
    type: string;
  };
  light: {
    color: string;
    background: string;
    type: string;
  };
};
export const themes: ThemeColor = {
  dark: {
    color: "#FFFFFF",
    background: "#212121",
    type: "moon",
  },
  light: {
    color: "#000000",
    background: "#ffffff",
    type: "sun",
  },
};
const ThemeContext = createContext<any>({} as any);

export default ThemeContext;
