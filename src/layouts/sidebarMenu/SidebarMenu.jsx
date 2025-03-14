import { ReactComponent as Arrow } from "assets/icons/arrow-left-black.svg";
import { ReactComponent as Logout } from "assets/icons/sidebarMenu/logout.svg";
import sidebarMenuItems from "data/sidebarMenu";
import { useEffect, useState } from "react";
import classes from "./SidebarMenu.module.scss";

import OpenNotificationWithIcon from "components/notificationWithIcon/OpenNotificationWithIcon";
import Axios from "middleware/axiosInstance";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";

const SidebarMenu = ({ showSidebar, setShowSidebar }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [userName, setUserName] = useState("");

  const handleSignOut = () => {
    localStorage.clear();
    navigate("/login");
  };

  const getUserName = () => {
    console.log("geted");
    const userName = localStorage.getItem("email");
    const fullName = localStorage.getItem("email");
    setUserName(userName || fullName);
  };

  useEffect(() => {
    getUserName();
  }, []);

  return (
    <div
      className={`${classes.sidebarContainer}  ${
        showSidebar ? classes.showSidebar : ""
      }`}
    >
      <ul className="mt-9">
        <li className={`w-full h-14 ${classes.menuItem}`}>
          <div
            className="w-full h-full relative flex items-center "
            onClick={() => setShowSidebar(false)}
          >
            <Arrow className="rotate-180 w-[14px] h-5 cursor-pointer" />
          </div>
        </li>
        <li
          className={`w-full h-14 ${classes.menuItem} text-lg font-bold bg-[#FFEFEA]`}
        >
          <div>{t(userName)}</div>
        </li>

        {sidebarMenuItems.map((item) => {
          return item.link ? (
            <li className="w-full h-11" key={item.id}>
              <Link
                onClick={() => setShowSidebar(false)}
                to={item.link}
                className={`w-full h-full flex flex-row gap-1 ${classes.menuItem}`}
              >
                <span>{item.icon}</span>
                <span>{t(item.name)}</span>
              </Link>
            </li>
          ) : (
            <li
              className={`w-full h-11 flex flex-row gap-1 ${classes.menuItem}`}
              key={item.id}
            >
              <span>{item.icon}</span>
              <span>{t(item.name)}</span>
            </li>
          );
        })}

        <li
          className={`w-full h-11 flex flex-row gap-1 ${classes.menuItem} cursor-pointer`}
          onClick={handleSignOut}
        >
          <span>{<Logout />}</span>
          <span>{t("Log out")}</span>
        </li>
      </ul>
    </div>
  );
};

export default SidebarMenu;
