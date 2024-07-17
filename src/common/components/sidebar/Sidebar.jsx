import ProfileInformation from "./ProfileInformation";
import MenuItem from "./MenuItem";
import PropTypes from "prop-types";
import menu from "../../constant/menu";
import { useState } from "react";

const SideBar = (props) => {
  const { classname } = props;
  const [idxActive, setIdxActive] = useState(0);

  const handleMenuClick = (idx) => {
    setIdxActive(idx);
  };

  return (
    <div className={`max-w-64 p-5 ${classname}`}>
      <ProfileInformation
        image={"images/foto.jpg"}
        name={"Kemal Crisannaufal"}
        nickname={"kemalcr"}
      />
      {menu.map((item, index) => (
        <MenuItem
          key={index}
          icon={item["icon"]}
          name={item["name"]}
          destination={item["destination"]}
          isActive={idxActive === index}
          onClick={() => handleMenuClick(index)}
        />
      ))}
    </div>
  );
};

SideBar.propTypes = {
  classname: PropTypes.string,
};

export default SideBar;
