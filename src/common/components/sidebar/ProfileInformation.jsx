import PropTypes from "prop-types";
import { FaCheckCircle } from "react-icons/fa";

const ProfileInformation = (props) => {
  const { image, name, nickname } = props;
  return (
    <div className="flex flex-col">
      <div className="w-28 h-28 rounded-full overflow-hidden">
        <img src={image} alt={"profile"} />
      </div>
      <div className="flex items-center mt-2">
        <h1 className="text-xl text-neutral-800 font-medium">{name}</h1>
        <FaCheckCircle size={20} color="green" className="ml-2" />
      </div>
      <h2 className="text-lg text-neutral-500 mb-3">@{nickname}</h2>
    </div>
  );
};

ProfileInformation.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  nickname: PropTypes.string.isRequired,
};

export default ProfileInformation;
