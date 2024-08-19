import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FaArrowRight } from "react-icons/fa";

const ProjectCard = (props) => {
  const { destination, image, title, description } = props;
  return (
    <Link to={destination}>
      <div className="border border-slate-300 rounded-lg mb-2 overflow-hidden relative project-card shadow shadow-lg hover:scale-105 transition duration-300">
        <div className="w-full h-40 overflow-hidden">
          <img src={image} alt={title} />
        </div>
        <div className="project-card-img-shadow hidden w-full h-40 bg-black absolute top-0 opacity-75 items-center justify-center text-white font-bold gap-2">
          <p>View Project</p>
          <FaArrowRight />
        </div>
        <div className="p-3 pb-4 h-full">
          <p className="text-lg font-medium text-neutral-700 dark:text-white">
            {title}
          </p>
          <p className="text-sm leading-7 text-neutral-600 dark:text-white">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};

ProjectCard.propTypes = {
  destination: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ProjectCard;
