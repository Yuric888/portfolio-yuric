import "./NavLinkHeader.scss";
import { navLink } from "../../Data/Data";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { useState } from "react";
import { motion } from "framer-motion";
const NavLinkHeader = () => {
  const [toggle, setToggle] = useState(false);
  const menuVariants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 50,
      transition: {
        type: "tween",
        duration: 0.5,
      },
    },
  };
  const navLinkVariants = {
    hidden: {
      display: "none",
      opacity: 0,
    },
    visible: {
      opacity: 1,
      y: -30,
      transition: { delay: 0.8 },
    },
  };
  return (
    <>
      <ul className="d-flex gap-3 text-capitalize ">
        {navLink.length > 0 &&
          navLink.map((item) => {
            return (
              <li key={item}>
                <a href={`#${item}`}>{item}</a>
              </li>
            );
          })}
      </ul>
      <div className="menu">
        <HiMenuAlt4
          onClick={() => {
            setToggle(true);
          }}
        />
      </div>
      <motion.div className="closeMenu"></motion.div>
      <div className="menuX">
        <HiX
          onClick={() => {
            setToggle(false);
          }}
        />
        {navLink.length > 0 &&
          navLink.map((item) => {
            return (
              <li key={item}>
                <a href={`#${item}`}>{item}</a>
              </li>
            );
          })}
      </div>
    </>
  );
};

export default NavLinkHeader;
