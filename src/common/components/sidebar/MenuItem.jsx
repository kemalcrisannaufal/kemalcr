import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import RightArrowIcon from "../../../assets/right_arrow.svg";

const MenuItem = (props) => {
  const { name, icon, destination, isActive, onClick } = props;

  return (
    <Link to={destination} className="w-full">
      <div
        className={`w-full flex justify-between items-center gap-3 p-2 pl-3 mb-2 border rounded-md ${
          isActive && "bg-neutral-200"
        } hover:bg-neutral-200`}
        onClick={onClick}
      >
        <div className="flex items-center gap-3">
          <img src={icon} alt={name} className="w-5 h-5" />
          <p className="text-lg text-neutral-600 font-normal tracking-wide">
            {name}
          </p>
        </div>

        {isActive && (
          <div>
            <img src={RightArrowIcon} alt="->" className="w-6 h-6" />
          </div>
        )}
      </div>
    </Link>
  );
};

MenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default MenuItem;
