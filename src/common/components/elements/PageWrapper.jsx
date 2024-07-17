import PropTypes from "prop-types";
import { motion } from "framer-motion";

const PageWrapper = ({
  children,
  initial = { opacity: 0, y: 100 },
  animate = { opacity: 1, y: 0 },
  exit = { opacity: 0, y: -100 },
  transition = { duration: 0.4 },
}) => {
  return (
    <motion.div
      initial={initial}
      animate={animate}
      exit={exit}
      transition={transition}
    >
      {children}
    </motion.div>
  );
};

PageWrapper.propTypes = {
  children: PropTypes.node,
  initial: PropTypes.object,
  animate: PropTypes.object,
  exit: PropTypes.object,
  transition: PropTypes.object,
};

export default PageWrapper;
