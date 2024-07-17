import PropTypes from "prop-types"

import { motion } from "framer-motion";

const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  );
};

PageWrapper.propTypes = {
  children: PropTypes.node,
};

export default PageWrapper