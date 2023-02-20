import { GiSun, GiEvilMoon } from "react-icons/gi";
import {
  FaUser,
  FaPhoneAlt,
  FaPaperPlane,
  FaHtml5,
  FaCss3,
  FaReact,
  FaNodeJs,
  FaFigma,
  FaSass,
  FaMapMarkerAlt,
  FaFacebookSquare,
  FaInstagram,
} from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import work1 from "../assets/another/work-ltbbeer.png";
import work2 from "../assets/another/work-portfolio-yuric.png";
import work3 from "../assets/another/work-yuric-cats.png";
import work4 from "../assets/another/work-yuric-shopping-cart.png";
import work5 from "../assets/another/work-yuric-form.png";
import { FiGithub } from "react-icons/fi";
export const navLink = ["home", "about", "skills", "portfolio", "contact"];

export const themeIcon = [<GiSun />, <GiEvilMoon />];
export const socialsIcon: { icon: JSX.Element; url: string }[] = [
  { icon: <FiGithub />, url: "https://github.com/Yuric888" },
  {
    icon: <FaFacebookSquare />,
    url: "https://www.facebook.com/profile.php?id=100008001377484",
  },
  { icon: <FaInstagram />, url: "https://www.instagram.com/yuricdev888" },
];
export const bios = [
  {
    id: 1,
    icon: <FaUser />,
    key: "Name",
    value: "Nguyễn Thành Trung",
  },
  {
    id: 2,
    icon: <FaPhoneAlt />,
    key: "Phone",
    value: "(+84) 797-02-1368",
  },
  {
    id: 3,
    icon: <FaPaperPlane />,
    key: "Email",
    value: "yuricdev@gmail.com",
  },
];

export const skillIcons = [
  <FaHtml5 />,
  <FaCss3 />,
  <DiJavascript />,
  <SiTypescript />,
  <FaReact />,
  <FaNodeJs />,
  <FaSass />,
  <FaFigma />,
];

export const experiences = [
  {
    id: 1,
    year: "2022",
    position: "Intern Web Developer",
    company: "https://medpro.vn/",
  },
];
export const finishes = [
  {
    id: 1,
    number: "6+",
    itemName: "Years Of Experience",
  },
  {
    id: 2,
    number: "150+",
    itemName: "Satisfied Customers",
  },
  {
    id: 3,
    number: "669+",
    itemName: "Designed Items",
  },
  {
    id: 4,
    number: "117+",
    itemName: "Clients Served",
  },
];
export const workImages: {
  id: number;
  img: string;
  name: string;
  category: string;
  github: string;
  web: string;
}[] = [
  {
    id: 1,
    img: work1,
    name: "ltb-beer",
    category: "web",
    github: "https://github.com/Yuric888/LTB-Beer",
    web: "https://ltb-beer.vercel.app/",
  },
  {
    id: 2,
    img: work2,
    name: "portfolio",
    category: "web",
    github: "https://github.com/Yuric888/portfolio-yuric",
    web: "https://portfolio-yuric.vercel.app/",
  },
  {
    id: 3,
    img: work3,
    name: "project 3",
    category: "web",
    github: "https://github.com/Yuric888/Yuric-Cat",
    web: "https://yuric-cat.vercel.app",
  },
  {
    id: 4,
    img: work4,
    name: "project 4",
    category: "web",
    github: "https://github.com/Yuric888/yuric-shopping-cart-1",
    web: "https://yuric-default-fe-guu1-git-yuric-yuric888.vercel.app",
  },
  {
    id: 5,
    img: work5,
    name: "project 5",
    category: "web",
    github: "https://github.com/Yuric888/yuric-form",
    web: "https://yuric-form.vercel.app/",
  },
];

export const workNavs = ["All", "Web", "Design"];

export const contacts: { id: number; icon: JSX.Element; infoText: string }[] = [
  {
    id: 1,
    icon: <FaMapMarkerAlt />,
    infoText: "40/7 Lê Thị Hồng, Gò Vấp, Tp.HCM",
  },
  {
    id: 2,
    icon: <FaPaperPlane />,
    infoText: "yuricdev@gmail.com",
  },
  {
    id: 3,
    icon: <FaPhoneAlt />,
    infoText: "(+84) 797-02-1368",
  },
];
