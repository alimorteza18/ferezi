import FooterMenu from "layouts/footerMenu/FooterMenu";
import Header from "layouts/header/Header";
import SidebarMenu from "layouts/sidebarMenu/SidebarMenu";
import MainWrapper from "layouts/wrappers/MainWrapper";
import TrayWrapper from "layouts/wrappers/TrayWrapper";
import { Outlet } from "react-router-dom";

const PageLayout = () => (
  <>
    <MainWrapper>
      <Header />
      <TrayWrapper>
        <Outlet />
      </TrayWrapper>
      <FooterMenu />
    </MainWrapper>
  </>
);
export default PageLayout;
