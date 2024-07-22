import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const ListProject = (props) => {
  const { projects } = props;
  return (
    <div className="grid md:grid-cols-2 gap-5">
      {projects.map((item, index) => (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          key={index}
        >
          <ProjectCard
            image={item.image}
            destination={item.destination}
            title={item.title}
            description={item.description}
          />
        </motion.div>
      ))}
    </div>
  );
};

ListProject.propTypes = {
  projects: PropTypes.array.isRequired,
};

export default ListProject;
