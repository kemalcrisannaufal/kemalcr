import PropTypes from "prop-types";

const TitleSection = (props) => {
  const { children } = props;
  return (
    <p className="text-xl text-neutral-600 font-medium tracking-wide">
      {children}
    </p>
  );
};

TitleSection.propTypes = {
  children: PropTypes.string.isRequired,
};

export default TitleSection;
