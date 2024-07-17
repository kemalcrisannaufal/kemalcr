import { BsFillBootstrapFill, BsRobot } from "react-icons/bs";
import {
  SiCss3,
  SiFirebase,
  SiJavascript,
  SiLaravel,
  SiPhp,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";

const iconSize = 28;

const STACKS = {
  PHP: SiPhp({ size: iconSize, className: "text-blue-500" }),
  JavaScript: SiJavascript({ size: iconSize, className: "text-yellow-400" }),
  "React.js": SiReact({ size: iconSize, className: "text-sky-500" }),
  TailwindCSS: SiTailwindcss({ size: iconSize, className: "text-cyan-300" }),
  Bootstrap: BsFillBootstrapFill({
    size: iconSize,
    className: "text-purple-500",
  }),

  Laravel: SiLaravel({ size: iconSize, className: "text-red-500" }),

  Firebase: SiFirebase({ size: iconSize, className: "text-yellow-500" }),
  "AI": BsRobot({
    size: iconSize,
    className: "text-rose-500",
  }),

  CSS: SiCss3({ size: iconSize, className: "text-blue-300" }),
};

// eslint-disable-next-line react-refresh/only-export-components
export default STACKS;
