import PropTypes from "prop-types";
import { FaCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const EducationCard = (props) => {
  const { logo, name, year, major, place } = props;
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="flex gap-4 items-center h-32 border rounded-lg shadow px-5 mb-5 select-none"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.9 }}
        className="w-16 h-16 sm:w-24 sm:h-24 overflow-hidden"
      >
        <img src={logo} alt="" className="w-full h-full object-contain" />
      </motion.div>
      <div>
        <h1 className="text-sm md:text-md lg:text-lg text-center text-neutral-700 font-semibold">
          {name}
        </h1>
        <hr className="my-2" />
        <div className="flex gap-3 text-neutral-500">
          <InformationText text={year} />
          <InformationText text={major} />
          <InformationText text={place} />
        </div>
      </div>
    </motion.div>
  );
};

EducationCard.propTypes = {
  logo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  major: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired,
};

const InformationText = (props) => {
  const { text } = props;
  return (
    <div className="text-[10px] sm:text-sm md:text-md lg:text-base flex items-center gap-2">
      <FaCircle className="text-[5px]" />
      <p>{text}</p>
    </div>
  );
};

InformationText.propTypes = {
  text: PropTypes.string.isRequired,
};

export default EducationCard;
