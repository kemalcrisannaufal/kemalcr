import TabMenu from "./TabMenu";
import menu from "../../../common/constant/menuTabBarAbout";
import { useState } from "react";
import Intro from "./Intro";
import Resume from "./Resume";
import Education from "./Education";
import Certification from "./Certification";

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
        {tabActive === 0 && <Intro />}
        {tabActive === 1 && <Resume />}
        {tabActive === 2 && <Certification />}
        {tabActive === 3 && <Education />}
      </div>
    </div>
  );
};

export default TabBar;
