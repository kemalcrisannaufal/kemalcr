import TabMenu from "./TabMenu";
import menu from "../../../common/constant/menuTabBarAbout";
import { useState } from "react";
import Intro from "./Intro";

const TabBar = () => {
  const [tabActive, setTabActive] = useState(0);

  const handleTabClick = (idx) => {
    setTabActive(idx);
  };

  return (
    <div>
      <div className="sticky top-0 flex">
        {menu.map((item, index) => (
          <TabMenu
            key={index}
            icon={item["icon"]}
            label={item["label"]}
            isActive={index === tabActive}
            onClick={() => handleTabClick(index)}
          />
        ))}
      </div>

      <div className="border px-5 pb-5 rounded-b-lg">
      {tabActive === 0 && <Intro> </Intro>} 
      </div>
    </div>
  );
};

export default TabBar;
