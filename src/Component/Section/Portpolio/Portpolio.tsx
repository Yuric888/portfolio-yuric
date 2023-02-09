import "./Portpolio.scss";
import { workNavs, workImages } from "../../../Data/Data";
import { FiGithub, FiEye } from "react-icons/fi";
import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
const Portpolio = () => {
  const [tab, setTab] = useState<{ name: string }>({ name: "all" });
  const [works, setWorks] = useState<
    Array<{
      id: number;
      img: string;
      name: string;
      category: string;
      github: string;
      web: string;
    }>
  >([]);
  const [active, setActive] = useState<number>(0);
  useEffect(() => {
    if (tab.name === "all") {
      setWorks(workImages);
    } else {
      const newWork = workImages.filter((workImage) => {
        return workImage.category.toLowerCase() === tab.name;
      });
      setWorks(newWork);
    }
  }, [tab]);
  const activeTab = (e: any, index: number) => {
    setTab({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };
  return (
    <section className="container" id="portfolio">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        transition={{ duration: 1 }}
        className="title"
      >
        <span>My Work</span>
        <h1>Awsome Projects</h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        transition={{ duration: 1 }}
        className="buttons"
      >
        {workNavs.map((workNav, idx) => {
          return (
            <Button
              onClick={(e) => activeTab(e, idx)}
              key={workNav}
              variant={active === idx ? "success" : "secondary"}
            >
              <a href="#portfolio">{workNav}</a>
            </Button>
          );
        })}
      </motion.div>
      <motion.div
        initial={{ x: 0, opacity: 0 }}
        whileInView={{ x: [-250, 0], opacity: 1 }}
        transition={{ duration: 1 }}
        className="workImages"
      >
        {works.map((work) => {
          return (
            <div className="workImage" key={work.id}>
              <img src={work.img} alt={work.name} />
              <motion.div
                className="hoverLayer"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <motion.a
                  whileInView={{ scale: [0, 1] }}
                  whileHover={{ scale: [1, 1, 1] }}
                  transition={{ duration: 0.3 }}
                  href={work.github}
                >
                  <FiGithub />
                </motion.a>
                <motion.a
                  whileInView={{ scale: [0, 1] }}
                  whileHover={{ scale: [1, 1, 1] }}
                  transition={{ duration: 0.3 }}
                  href={work.web}
                >
                  <FiEye />
                </motion.a>
              </motion.div>
            </div>
          );
        })}
      </motion.div>
      <motion.div
        initial={{ x: 0, opacity: 0 }}
        whileInView={{ x: [250, 0], opacity: 1 }}
        transition={{ duration: 1 }}
        className="talk"
      >
        <div className="talk_left">
          <h3>
            So let's talk about <br />
            <span>your next projects</span>
          </h3>
        </div>
        <div className="talk_right">
          <Button>
            <a href="#contact">Contact Me</a>
          </Button>
        </div>
      </motion.div>
    </section>
  );
};

export default Portpolio;
