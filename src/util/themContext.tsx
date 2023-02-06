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
    color: "#fff",
    background: "#212121",
    type: "moon",
  },
  light: {
    color: "#000",
    background: "#fff",
    type: "sun",
  },
};
const ThemeContext = createContext<any>({} as any);

export default ThemeContext;
