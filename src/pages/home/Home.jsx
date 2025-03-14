import logo from "assets/images/logo/logo.png";
import HomeItemSelection from "components/homeItemSelection/HomeItemSelection";
import TitleWithUnderline from "layouts/titleWithUnderline/TitleWithUnderline";
import { useTranslation } from "react-i18next";
import "./home.module.scss";
import { useEffect } from "react";
import { calcFinalFTEE } from "functions/functions";
import event from "assets/images/school-event/event.svg";
import eventColored from "assets/images/school-event/event.svg";
import school from "assets/images/school-event/school.svg";
import schoolColored from "assets/images/school-event/school.svg";
const Home = () => {
  const { t } = useTranslation();

  // useEffect(() => {
  //   calcFinalFTEE("girl", 17, 40, 90);
  //   console.log("first");
  // }, []);

  return (
    <div className="all-center h-full -mt-2">
      {/* <div className="w-full h-auto all-center flex-col">
        <img
          src={logo}
          alt="ferezi-Logo"
          className="w-1/4 h-auto max-h-[25vh]"
        />
        <h2 className="font-semibold text-xl md:text-2xl underline underline-offset-4 md:underline-offset-[6px]">
          {t("ferezi")}
        </h2>
      </div> */}
      <div className="w-full flex-col">
        {/* <TitleWithUnderline
          title={t("select your order type")}
          className="all-center text-md font-semibold"
        /> */}
        <h2 className="font-bold text-lg text-[#393939] text-center">
          {t("Select your order type")}
        </h2>
        <div className="w-full all-center flex-col">
        <HomeItemSelection
            img={school}
            name={t("School")}
            to="/order/select-date?order=school"
          />
          <HomeItemSelection
            img={event}
            name={t("Home")}
            // to="/order/select-date?order=event"
             to="/order/select-date?order=event"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
