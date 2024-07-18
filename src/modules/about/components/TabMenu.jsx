import PropTypes from "prop-types";

const TabMenu = (props) => {
  const { icon, label, isActive, onClick } = props;
  return (
    <div
      className={`text-xs w-1/4 py-2 flex items-center justify-center gap-3 border cursor-pointer lg:text-base select-none ${
        isActive ? "bg-neutral-500 text-white" : "bg-neutral-100"
      }`}
      onClick={onClick}
    >
      {icon}
      <p>{label}</p>
    </div>
  );
};

TabMenu.propTypes = {
  icon: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default TabMenu;
