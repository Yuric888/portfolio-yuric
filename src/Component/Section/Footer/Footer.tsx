import { socialsIcon } from "../../../Data/Data";
import "./Footer.scss";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="container"
      id="footer"
    >
      <div className="copyRight">
        <p>
          Copyright&copy;2023 All rights reserved| Made by{" "}
          <span>Yuric Nguyen</span>
        </p>
      </div>
      <div className="followMe">
        <h4>Follow Me</h4>
        <div className="stick"></div>
        <div className="social_icons">
          {socialsIcon.length > 0 &&
            socialsIcon.map((icon, idx) => {
              return (
                <a target="_blank" rel="noreferrer" href={icon.url} key={idx}>
                  {icon.icon}
                </a>
              );
            })}
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
