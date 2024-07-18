import PropTypes from "prop-types";

const Header = (props) => {
  const { title, description } = props;
  return (
    <div className="mb-5 tracking-wide">
      <h1 className="text-neutral-700 font-medium text-lg">
        {title}
      </h1>
      <p className="text-neutral-600 font-normal text-md">
        {description}
      </p>
      <hr className="w-full mt-2 border-1 border-neutral-700 border-dashed" />
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export default Header;
