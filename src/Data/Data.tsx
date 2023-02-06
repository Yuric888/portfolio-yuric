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
} from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
export const navLink = ["home", "about", "skills", "portfolio", "contact"];

export const themeIcon = [<GiSun />, <GiEvilMoon />];

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
    value: "+84797021368",
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

export const workImages = [
  {
    id: 1,
    img: "work1",
    name: "project 1",
    category: "web",
  },
  {
    id: 2,
    img: "work2",
    name: "project 2",
    category: "web",
  },
];

export const workNavs = ["All", "Web", "Design"];

export const contact = [
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
    infoText: "+84797021368",
  },
];
