import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

export const contactCards = [
  {
    title: "Explore the code",
    name: "Github",
    description: "Explore the source code for all my projects on github",
    icon: <FaGithub className="w-8 h-8" />,
    classname: "text-white bg-slate-700",
    accentColor: "bg-slate-800",
    destination: "/"
  },
  {
    title: "Connect with me",
    name: "LinkedIn",
    description: "Connect with me on LinkedIn for professional networking",
    icon: <FaLinkedin className="w-8 h-8" />,
    classname: "text-white bg-blue-700",
    accentColor: "bg-blue-800",
    destination: "/"
  },
  {
    title: "Follow me",
    name: "Instagram",
    description: "Follow my Instagram to see my latest photos and updates",
    icon: <FaInstagram className="w-8 h-8" />,
    classname: "text-white bg-pink-500",
    accentColor: "bg-pink-600",
    destination: "/"
  },
  {
    title: "Send me an email",
    name: "Email",
    description: "Feel free to send me an email for any inquiries",
    icon: <FaEnvelope className="w-8 h-8" />,
    classname: "text-white bg-red-600",
    accentColor: "bg-red-700",
    destination: "/"
  },
];

