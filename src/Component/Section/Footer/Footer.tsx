import { socialsIcon } from "../../../Data/Data";
import "./Footer.scss";
const Footer = () => {
  return (
    <section className="container" id="footer">
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
                <a href={icon.url} key={idx}>
                  {icon.icon}
                </a>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Footer;
