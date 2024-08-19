import PropTypes from "prop-types";
import { FaCheckCircle } from "react-icons/fa";

const ProfileInformation = (props) => {
  const { image, name, nickname } = props;
  return (
    <div className="flex md:flex-col gap-4">
      <div className="w-16 h-16 rounded-full overflow-hidden md:w-28 md:h-28">
        <img
          src={image}
          alt={"profile"}
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <div className="flex items-center mt-2">
          <h1 className="text-md lg:text-xl text-neutral-800 font-medium dark:text-white">
            {name}
          </h1>
          <FaCheckCircle size={20} color="green" className="ml-2" />
        </div>
        <h2 className="text-sm lg:text-lg text-neutral-500 mb-3">
          @{nickname}
        </h2>
      </div>
    </div>
  );
};

ProfileInformation.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  nickname: PropTypes.string.isRequired,
};

export default ProfileInformation;
