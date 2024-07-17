import PropTypes from "prop-types";
import SideBar from "../sidebar/Sidebar";

const MainLayout = (props) => {
  const { children } = props;
  return (
    <div className="mx-52 mt-10 flex">
      <div className="hidden sm:block w-1/4 ">
        <SideBar></SideBar> 
      </div>
      <div className="w-full sm:w-3/4">
        {children}</div>
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
