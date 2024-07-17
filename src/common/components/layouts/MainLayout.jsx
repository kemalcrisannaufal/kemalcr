import PropTypes from "prop-types";
import SideBar from "../sidebar/Sidebar";

const MainLayout = (props) => {
  const { children } = props;
  return (
    <div className="md:m-10 md:flex lg:mx-52">
      <div className="w-full sticky top-0 z-10 md:block w-1/4 ">
        <SideBar></SideBar>
      </div>
      <div className="w-full mb-20 md:w-3/4 px-10">{children}</div>
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
