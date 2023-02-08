import { useContext } from "react";
import portfolio from "../../../assets/another/plant.png";
import ThemeContext from "../../../util/themContext";
import { motion } from "framer-motion";
import "./Banner.scss";
const Banner = () => {
  const { state } = useContext(ThemeContext);
  const moveVariants = {
    animation: {
      y: [0, -15],
      transition: {
        yoyo: Infinity,
        duration: 2,
        delay: 1,
      },
    },
  };
  return (
    <motion.section
      initial={{ y: -15, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 2, delay: 0.5 }}
      id="home"
      className="container d-flex flex-column align-items-center justify-content-center"
    >
      <div
        className={`profile ${
          state.type === "sun" ? "shadow-lg" : "shadow-moon"
        }`}
      >
        <img alt="portfolio" src={portfolio} />
      </div>
      <div className="profile_text">
        <h1>
          Hi, I'm <span>Yuric Nguyen</span>
        </h1>
        <p className="job">Web Developer Based on Viet Nam</p>
        <p className="text">
          Passionate <br />
          to craft innovative <br />
          web products
        </p>
        <motion.a
          variants={moveVariants}
          animate="animation"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          style={{
            background: `${state.background === "#fff" ? "#212121" : "#fff"}`,
            color: `${state.color === "#fff" ? "#000" : "#fff"}`,
          }}
          href="#contact"
        >
          connect with me
        </motion.a>
        <div
          style={{
            background: `${
              state.background === "#fff"
                ? "rgba(33, 33, 33,.6)"
                : "rgba(255, 255, 255,.6)"
            }`,
            color: `${state.color === "#fff" ? "#fff" : "#fff"}`,
          }}
          className="web"
        >
          <p>Web Developer</p>
        </div>
        <div
          style={{
            background: `${
              state.background === "#fff"
                ? "rgba(33, 33, 33,.6)"
                : "rgba(255, 255, 255,.6)"
            }`,
            color: `${state.color === "#fff" ? "#fff" : "#fff"}`,
          }}
          className="ui"
        >
          <p>Figma</p>
        </div>
        <div
          style={{
            background: `${
              state.background === "#fff"
                ? "rgba(33, 33, 33,.6)"
                : "rgba(255, 255, 255,.6)"
            }`,
            color: `${state.color === "#fff" ? "#fff" : "#fff"}`,
          }}
          className="freelancer"
        >
          <p>Freelancer</p>
        </div>
      </div>
    </motion.section>
  );
};

export default Banner;
