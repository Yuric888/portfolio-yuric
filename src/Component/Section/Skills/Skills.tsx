import { useState } from "react";
import { Button } from "react-bootstrap";
import { experiences, skillIcons } from "../../../Data/Data";
import { motion } from "framer-motion";
import "./Skills.scss";
const Skills = () => {
  const [active, setActive] = useState(1);
  return (
    <section className="container" id="skills">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        transition={{ duration: 1 }}
        className="title"
      >
        <span>What I Expert ? </span>
        <h1>Skills And Experience</h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        transition={{ duration: 1 }}
        className="select"
      >
        <Button
          onClick={() => {
            setActive(1);
          }}
          variant={active === 1 ? "success" : "secondary"}
        >
          Skills
        </Button>
        <Button
          onClick={() => {
            setActive(2);
          }}
          variant={active === 2 ? "success" : "secondary"}
        >
          Experience
        </Button>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        transition={{ duration: 1 }}
        className="skills"
      >
        {active === 1 &&
          skillIcons.map((icon, idx) => {
            return (
              <div className="icon" key={idx}>
                {icon}
              </div>
            );
          })}
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        transition={{ duration: 1 }}
        className="experiences"
      >
        {active === 2 &&
          experiences.map((experience) => {
            return (
              <div className="experience" key={experience.id}>
                <span>{experience.year}</span>
                <div className="position">
                  <h3>{experience.position}</h3>
                  <p>{experience.company}</p>
                </div>
              </div>
            );
          })}
      </motion.div>
    </section>
  );
};

export default Skills;
