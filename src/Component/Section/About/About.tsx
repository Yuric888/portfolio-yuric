import "./About.scss";
import portfolio from "../../../assets/another/plant.png";
import { bios } from "../../../Data/Data";
import { useContext } from "react";
import ThemeContext from "../../../util/themContext";
import { motion } from "framer-motion";
const About = () => {
  const { state } = useContext(ThemeContext);
  return (
    <section id="about" className="container">
      <div className="title">
        <span>Who Am I?</span>
        <h1>About Me</h1>
      </div>
      <div className="about_container">
        <div className="about_left">
          <img alt="portfolio-yuric" src={portfolio} />
        </div>
        <div className="about_right">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
            laborum, vero maxime officia numquam maiores placeat excepturi,
            possimus consequuntur quaerat nobis doloremque soluta perferendis
            exercitationem sit a. Aut, praesentium voluptatem.
          </p>
          {bios.map((item) => {
            return (
              <div className="bio" key={item.id}>
                <span className="bio_icon">
                  {item.icon}
                  {item.key}
                </span>
                <span className="bio_value">{item.value}</span>
              </div>
            );
          })}

          <motion.a
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            style={{
              background: `${state.background === "#fff" ? "#212121" : "#fff"}`,
              color: `${state.color === "#fff" ? "#000" : "#fff"}`,
            }}
            href="#"
            download=""
          >
            Download Resume
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default About;
