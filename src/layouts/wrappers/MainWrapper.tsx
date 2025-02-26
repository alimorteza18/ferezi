import { useLocation } from "react-router-dom";
import "./MainWrapper.scss";
const MainWrapper = (props: any) => {
  const location = useLocation();
  const currnetLocation = location.pathname;
  const backgroundPrimary = ["/login", "/sign-up", "/landing"];
  return (
    <div
      className={`main-wrapper max-h-screen overflow-hidden relative  w-mainWrapper ${
        backgroundPrimary.includes(currnetLocation)
          ? "bg-image-Primary"
          : "bg-image-general"
      }`}
    >
      {/* <div
      className={`main-wrapper max-h-screen overflow-hidden relative w-mainWrapper`}
    > */}
      {props.children}
    </div>
  );
};
export default MainWrapper;
