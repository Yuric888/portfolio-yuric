import Logo from "../../Logo/Logo";
import Themes from "../../Themes/Themes";
import "./Header.scss";
import { useContext } from "react";
import ThemeContext from "../../../util/themContext";
import NavLinkHeader from "../../NavLinkHeader/NavLinkHeader";
import { motion } from "framer-motion";
const Header = () => {
  const { state } = useContext(ThemeContext);

  return (
    <motion.header
      initial={{ y: -25 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`w-100 ${state.type === "sun" ? "shadow-sm" : "shadow-moon"}`}
      style={state}
    >
      <div className="container d-flex justify-content-between align-items-center py-2 px-5">
        <Logo />
        <NavLinkHeader />
        <Themes />
      </div>
    </motion.header>
  );
};

export default Header;
