import back from "assets/icons/header/chevron-left.png";
import dots from "assets/icons/header/threeDots.png";
import { ReactComponent as UserProfile } from "assets/icons/user-profile-circle.svg";
import logoOrange from "assets/images/logo/logo-orange.png";
import useCurrentRoute from "functions/useCurrentRoute ";
import SelectLang from "layouts/selectLang/SelectLang";
import { useNavigate } from "react-router-dom";
import classes from "./Header.module.scss";
import SidebarMenu from "layouts/sidebarMenu/SidebarMenu";
import { useState } from "react";
const Header = () => {
  const RouteIsHome = useCurrentRoute() === "/";
  const hideHeader = ["/login", "/sign-up", "/landing", "/confirm-email", "/email-verified", "/reset-password"];
  const navigate = useNavigate();

  const [showSidebar, setShowSidebar] = useState(false);

  const backHandler = () => {
    // === back one page
    navigate(-1);
  };
  // === if route if out of
  return hideHeader.includes(useCurrentRoute()) ? null : (
    <>
      {/* <div
            className={`${classes.header} ${
              RouteIsHome ? "rtl" : "ltr"
            } w-100 h-header flex flex-row items-center justify-between relative`}
          > */}
      <div
        className={`${classes.header}
        
        rtl h-header flex flex-row items-center justify-between rounded-b-xl bg-white bg-opacity-75 backdrop-blur-lg px-4`}
      >
        {/* <SelectLang /> */}
        {/* === if route is "/" show profile button and show header in rtl mode else show back and in ltr mode */}
        {/* {RouteIsHome ? ( */}
        {/* <div className={classes.profileContainer}>
            <UserProfile className={classes.profile} />
          </div>
        ) : ( */}
        {/* )} */}
        {/* <div className={classes.logoOrange} onClick={() => navigate("/")}>
          <img src={logoOrange} alt="#" />
        </div> */}
        <div
          className={classes.logoContainer}
          onClick={() => setShowSidebar(true)}
        >
          <img src={dots} alt="#" className={classes.logo} />
        </div>
        <div>
          {/* <LeftArrow className={classes.back} /> */}
          <img src="./logo.svg" />
        </div>
      </div>
      <SidebarMenu showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
    </>
  );
};
export default Header;
