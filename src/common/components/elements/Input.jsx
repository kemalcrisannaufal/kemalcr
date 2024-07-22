import PropTypes from "prop-types";

const Input = (props) => {
  const { placeholder, name, classname } = props;
  return (
    <input
      type="text"
      placeholder={placeholder}
      id={name}
      name={name}
      className={`w-full border rounded-lg px-3 py-2 text-xs md:text-md lg:text-base  ${classname}`}
    />
  );
};

Input.propTypes = {
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  classname: PropTypes.string,
};

export default Input;
