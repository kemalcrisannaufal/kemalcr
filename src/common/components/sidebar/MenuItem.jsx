import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import RightArrowIcon from "../../../assets/right_arrow.svg";

const MenuItem = (props) => {
  const { name, icon, destination, isActive, onClick } = props;

  return (
    <Link to={destination} className="w-full select-none">
      <div
        className={`item-menu-box w-full flex justify-between items-center gap-3 p-2 pl-3 mb-2 border rounded-md transition-all duration-300 ${
          isActive && "bg-neutral-200"
        } hover:bg-neutral-200`}
        onClick={onClick}
      >
        <div className="item-menu w-full flex items-center gap-3">
          <img src={icon} alt={name} className="icon-item-menu w-5 h-5" />
          <p className="text-md text-neutral-600 font-normal tracking-wide">
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
