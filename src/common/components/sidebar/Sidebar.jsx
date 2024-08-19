import ProfileInformation from "./ProfileInformation";
import MenuItem from "./MenuItem";
import PropTypes from "prop-types";
import menu from "../../constant/menu";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SideBar = (props) => {
  const { classname } = props;
  const [idxActive, setIdxActive] = useState(0);
  const [isToggleOpen, setToggleOpen] = useState(false);

  const handleMenuClick = (idx) => {
    setIdxActive(idx);
  };

  const handleToggleClick = () => {
    setToggleOpen(!isToggleOpen);
  };

  const location = useLocation();

  useEffect(() => {
    const activeIndex = menu.findIndex(
      (item) => item.destination === location.pathname
    );
    setIdxActive(activeIndex !== -1 ? activeIndex : 0);
  }, [location]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    if (mediaQuery.matches) {
      setToggleOpen(true);
    } else {
      setToggleOpen(false);
    }

    const handleResize = () => {
      if (mediaQuery.matches) {
        setToggleOpen(true);
      } else {
        setToggleOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={`bg-white dark:bg-neutral-800 flex justify-between items-center w-full bg-white md:max-w-64 md:block md:bg-white xl:fixed p-5 ${classname}`}
    >
      <ProfileInformation
        image={"images/foto.jpg"}
        name={"Kemal Crisannaufal"}
        nickname={"kemalcr"}
      />

      <div className="md:hidden">
        <button onClick={() => handleToggleClick()}>
          <FaBars className="text-2xl" />
        </button>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isToggleOpen ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className={`w-full absolute top-24 left-0 z-10 bg-white w-[90%] ${
          isToggleOpen ? "block" : "hidden"
        }  md:sticky dark:bg-neutral-800`}
      >
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
      </motion.div>
    </div>
  );
};

SideBar.propTypes = {
  classname: PropTypes.string,
};

export default SideBar;
