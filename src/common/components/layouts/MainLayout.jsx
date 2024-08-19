import PropTypes from "prop-types";
import SideBar from "../sidebar/Sidebar";

const MainLayout = (props) => {
  const { children } = props;
  return (
    <div className="md:p-10 md:flex lg:mx-40 xl:mx-52">
      <div className="w-full sticky top-0 z-10 md:block md:w-1/4">
        <SideBar />
      </div>
      <div className="w-full mt-3 mb-20 md:w-3/4 px-10">{children}</div>
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
