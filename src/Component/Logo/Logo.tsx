import "./Logo.scss";
import Image from "../../assets/svg/logo-portfolio.svg";
import { Link, animateScroll as scroll } from "react-scroll";
const Logo = () => {
  const scrollClick = () => {
    scroll.scrollToTop();
  };
  return (
    <Link to="/" className="logo" onClick={scrollClick}>
      <img src={Image} alt="logo" />
    </Link>
  );
};

export default Logo;
