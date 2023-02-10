import "./NavLinkHeader.scss";
import { navLink } from "../../Data/Data";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { useState } from "react";
import { motion } from "framer-motion";
import ThemeContext from "../../util/themContext";
import { useContext } from "react";
import { Link } from "react-scroll";
const NavLinkHeader = () => {
  const [toggle, setToggle] = useState(false);
  const { state } = useContext(ThemeContext);
  const menuVariants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 80,
      transition: {
        type: "tween",
        duration: 0.5,
      },
    },
  };
  const navLinkVariants = {
    hidden: {
      opacity: 0,
    },
    view: {
      opacity: 1,
      y: -30,
      transition: { delay: 0.6 },
    },
  };

  return (
    <div className="nav_container">
      <ul className="d-flex gap-5 text-uppercase nav_links">
        {navLink.length > 0 &&
          navLink.map((item, idx) => {
            return (
              <li key={item}>
                <Link
                  style={{
                    color: `${state.color === "#fff" ? "#fff" : "#000"}`,
                  }}
                  to={item}
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  {item === "/" ? "Home" : item}
                </Link>
              </li>
            );
          })}
      </ul>
      <div
        className="menu"
        style={{
          background: `${state.background === "#fff" ? "#212121" : "#fff"}`,
        }}
      >
        <HiMenuAlt4
          onClick={() => {
            setToggle(true);
          }}
          style={{
            color: `${state.color === "#fff" ? "#000" : "#fff"}`,
          }}
        />
      </div>
      <motion.div
        className="closeMenu"
        variants={menuVariants}
        initial="hidden"
        animate={toggle ? "visible" : "hidden"}
        style={{
          background: `${state.background === "#fff" ? "#212121" : "#c2bfbf"}`,
        }}
      ></motion.div>
      <motion.div
        className={toggle ? "menuX active" : "menuX"}
        variants={navLinkVariants}
        initial="hidden"
        animate={toggle ? "view" : "hidden"}
        style={{
          color: `${state.color === "#fff" ? "#000" : "#c2bfbf"}`,
        }}
      >
        <HiX
          onClick={() => {
            setToggle(false);
          }}
        />
        {navLink.length > 0 &&
          navLink.map((item) => {
            return (
              <li key={item}>
                <Link
                  style={{
                    color: `${state.color === "#fff" ? "#000" : "#fff"}`,
                  }}
                  to={item}
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={() => {
                    setToggle(false);
                  }}
                >
                  {item === "" ? "Home" : item}
                </Link>
              </li>
            );
          })}
      </motion.div>
    </div>
  );
};

export default NavLinkHeader;
