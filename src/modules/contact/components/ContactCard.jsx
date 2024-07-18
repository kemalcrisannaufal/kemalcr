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
      className={`w-full border rounded-lg p-4 ${classname} opacity-95`}
    >
      <h1 className="font-bold text-lg">{title}</h1>
      <div className="w-full flex justify-between items-end mt-2">
        <div>
          <h2 className="text-sm tracking-wide">{description}</h2>
          <a
            href={destination}
            className={`block w-max mt-3 rounded px-3 py-2 text-sm hover:opacity-70 hover:border ${accentColor}`}
          >
            <div className="flex gap-3 items-center font-medium">
              Go To {name} <FaExternalLinkAlt />
            </div>
          </a>
        </div>
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
