import menuItems from "data/menuItems";
import { NavLink } from "react-router-dom";
import classes from "./FooterMenu.module.scss";
import useCurrentRoute from "functions/useCurrentRoute ";
const FooterMenu = () => {
  // hide footer in this routes
  const hideFooter = ["/login", "/sign-up", "/landing", "/confirm-email", "/email-verified", "/reset-password"];
  return hideFooter.includes(useCurrentRoute()) ? null : (
    <div className="w-full h-footerMenu bg-[#ffffff] backdrop-blur-[2px] absolute bottom-0 rounded-t-2xl">
      <ul className="h-full w-full flex flex-row justify-evenly items-center rtl:flex-row-reverse">
        {menuItems.map((item) => {
          return (
            <li className="relative" key={item.id}>
              <NavLink
                to={item.link}
                className={({ isActive }) =>
                  "flex flex-col items-center transition-all duration-700 relative font-medium " +
                  (isActive ? classes.dotInActiveIcons : "")
                }
              >
                {/* (item.ItemIcon) imported as svg react component */}
                {/* <item.ItemIcon className="w-[20px] self-center text-center h-auto" /> */}
                <img
                  src={item.ItemIcon}
                  className={`w-[${item.width}] self-center text-center h-auto`}
                />

                {/* <span>{item.itemName}</span> */}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default FooterMenu;
