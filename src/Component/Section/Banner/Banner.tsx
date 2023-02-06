import portfolio from "../../../assets/another/plant.png";
import "./Banner.scss";
const Banner = () => {
  return (
    <section id="home" className="container banner">
      <div className="py-5">
        <div className="profile">
          <img alt="portfolio" src={portfolio} />
        </div>
        <div className="profile_text">
          <h3 className="name">
            Hi, I'm <span>Yuric Nguyen</span>
          </h3>
        </div>
        <span className="job">Web Developer Based on Viet Nam</span>
        <span className="text">
          Passionate <br />
          to craft innovative <br />
          web products
        </span>
        <a href="#contact">connect with me</a>
        <div className="web">Web Developer</div>
        <div className="ui">Figma</div>
        <div className="freelancer">Freelancer</div>
      </div>
    </section>
  );
};

export default Banner;
