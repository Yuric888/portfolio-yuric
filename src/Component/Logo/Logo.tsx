import "./Logo.scss";
import Image from "../../assets/svg/logo-portfolio.svg";
import { Link } from "react-router-dom";

const Logo = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Link to="/" className="logo" onClick={scrollToTop}>
      <img src={Image} alt="logo" />
    </Link>
  );
};

export default Logo;
