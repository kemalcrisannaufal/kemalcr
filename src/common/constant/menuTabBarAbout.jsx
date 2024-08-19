import {
  FaAward,
  FaFileAlt,
  FaRegBookmark,
  FaGraduationCap,
} from "react-icons/fa";

const classname = "dark:text-black";

const menu = [
  { icon: <FaRegBookmark className={classname} />, label: "Intro" },
  { icon: <FaFileAlt className={classname} />, label: "Resume" },
  { icon: <FaAward className={classname} />, label: "Certifications" },
  { icon: <FaGraduationCap className={classname} />, label: "Education" },
];

export default menu;
