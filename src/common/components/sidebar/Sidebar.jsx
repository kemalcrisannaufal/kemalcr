import ProfileInformation from "./ProfileInformation";
import MenuItem from "./MenuItem";

import menu from "../../constant/menu";
import { useState } from "react";

const SideBar = () => {
  const [idxActive, setIdxActive] = useState(0);

  const handleMenuClick = (idx) => {
    setIdxActive(idx);
  };

  return (
    <div className="max-w-xs p-5">
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

export default SideBar;
