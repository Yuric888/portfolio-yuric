import "./Logo.scss";
import Image from "../../assets/svg/logo-portfolio.svg";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="logo">
      <img src={Image} alt="logo" />
    </Link>
  );
};

export default Logo;
