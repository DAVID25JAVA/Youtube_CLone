import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import LeftNavMenuItem from "./LeftNavMenuItem";
import selectCategory from "../utils/constant";
import { context } from "../context/context";

const LeftNav = () => {
  const { selectedCategory, setMobileMenu, setSelectedCategory, mobileMenu } =
    useContext(context);

  const navigate = useNavigate();

  const clickHandler = (name, type) => {
    switch (type) {
      case "category":
        return setSelectedCategory(name);
      case "home":
        return setSelectedCategory(name);
      case "menu":
        setMobileMenu(!mobileMenu);
        return false;
      default:
        break;
    }
  };

  return (
    <div
      className={`md:block w-[240px] overflow-y-auto h-full py-4 bg-black absolute md:relative z-10 ${
        mobileMenu ? "block" : "hidden"
      } transition duration-300 ease-in-out`}
    >
      <div className="flex px-5 flex-col">
        {selectCategory.map((item) => {
          return (
            <React.Fragment key={item.name}>
              <LeftNavMenuItem
                text={item.type === "home" ? "Home" : item.name}
                icon={item.icon}
                action={() => {
                  clickHandler(item.name, item.type);
                  navigate("/");
                }}
                className={`${
                  selectedCategory === item.name ? "bg-white/[0.15]" : ""
                }`}
              />
              {item.divider && <hr className="my-5 border-white/[0.2]" />}
            </React.Fragment>
          );
        })}
        <hr className="my-5 border-white/[0.2]" />
        <div className="text-white/[0.5] text-[12px]">
          Clone by: JS Dev Hindi
        </div>
      </div>
    </div>
  );
};

export default LeftNav;
