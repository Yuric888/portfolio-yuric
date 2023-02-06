import "./Themes.scss";
import { GiSun, GiEvilMoon } from "react-icons/gi";
import ThemeContext from "../../util/themContext";
import { useContext } from "react";

const Themes = () => {
  const { state, dispatch } = useContext(ThemeContext);
  return (
    <ul className="theme">
      <li
        className={state.type === "sun" ? "sun active" : "sun"}
        onClick={() => dispatch({ type: "light" })}
      >
        <GiSun />
      </li>
      <li
        className={state.type === "moon" ? "moon active" : "moon"}
        onClick={() => dispatch({ type: "dark" })}
      >
        <GiEvilMoon />
      </li>
    </ul>
  );
};

export default Themes;
