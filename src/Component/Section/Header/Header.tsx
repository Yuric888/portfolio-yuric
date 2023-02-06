import Logo from "../../Logo/Logo";
import Themes from "../../Themes/Themes";
import "./Header.scss";
import { useContext } from "react";
import ThemeContext from "../../../util/themContext";
const Header = () => {
  const { state } = useContext(ThemeContext);
  return (
    <header
      className={`w-100 ${
        state.type === "sun" ? "shadow-sm" : "shadow-header-moon"
      }`}
    >
      <div className="container d-flex justify-content-between align-item-center py-2">
        <Logo />
        <Themes />
      </div>
    </header>
  );
};

export default Header;
