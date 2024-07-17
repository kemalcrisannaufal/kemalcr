import PropTypes from "prop-types";

const TitleSection = (props) => {
  const { children } = props;
  return (
    <p className="text-lg text-neutral-600 font-medium tracking-wide md:text-xl">
      {children}
    </p>
  );
};

TitleSection.propTypes = {
  children: PropTypes.string.isRequired,
};

export default TitleSection;
