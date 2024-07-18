import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

const ContactCard = (props) => {
  const {
    title,
    name,
    description,
    destination,
    icon,
    classname,
    accentColor,
  } = props;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className={`w-full h-full flex flex-col  border rounded-lg p-4 ${classname} opacity-95`}
    >
      <h1 className="font-bold lg:text-lg">{title}</h1>
      <h2 className="text-xs lg:text-sm lg:tracking-wide">{description}</h2>
      <div className="w-full flex flex-grow justify-between items-end mt-2">
        <a
          href={destination}
          className={`block w-max mt-3 rounded px-3 py-2 text-sm hover:opacity-70 hover:border ${accentColor}`}
        >
          <div className="flex gap-3 items-center font-medium">
            <span className="hidden xl:block">Go To</span>
            {name} <FaExternalLinkAlt />
          </div>
        </a>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className={`w-12 h-12 rounded-[50%] px-2 flex items-center justify-center ${accentColor}`}
        >
          {icon}
        </motion.div>
      </div>
    </motion.div>
  );
};

ContactCard.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  classname: PropTypes.string.isRequired,
  accentColor: PropTypes.string.isRequired,
};

export default ContactCard;
