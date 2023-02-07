import { useState } from "react";
import { Button } from "react-bootstrap";
import { experiences, skillIcons } from "../../../Data/Data";
import "./Skills.scss";
const Skills = () => {
  const [active, setActive] = useState(1);
  return (
    <section className="container" id="skills">
      <div className="title">
        <span>What I Expert ? </span>
        <h1>Skills And Experience</h1>
      </div>
      <div className="select">
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
      </div>
      <div className="skills">
        {active === 1 &&
          skillIcons.map((icon, idx) => {
            return (
              <div className="icon" key={idx}>
                {icon}
              </div>
            );
          })}
      </div>
      <div className="experiences">
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
      </div>
    </section>
  );
};

export default Skills;
