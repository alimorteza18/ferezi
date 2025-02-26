// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// Import Swiper styles
import classes from "./LandingPage.module.scss";
import { useTranslation } from "react-i18next";
import LandingAndSignupWrapper from "layouts/landingAndSignupWrapper/LandingAndSignupWrapper";
import { Link } from "react-router-dom";
import Rate from "components/landingPageComponents/Rate";
import Wave from "components/landingPageComponents/Wave";
import Pack from "components/landingPageComponents/Pack";

const LandingPage = () => {
  const { t } = useTranslation();
  return (
    <LandingAndSignupWrapper>
      {/* <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]}
        className={`mySwiper full-height-slider custom-button-slider-landingPage ${classes.swiperContaier}`}
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper: any) => console.log(swiper)}
      > */}

      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]}
        className={`mySwiper full-height-slider custom-button-slider-landingPage ${classes.swiperContaier}`}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper: any) => console.log(swiper)}
      >
        {/* {[0, 1, 2, 3].map((item, index) => {
          return ( */}
        <SwiperSlide>
          <Link
            to="/sign-up"
            className="flex flex-col items-center h-full all-center"
          >
            <Pack />
            <p className="font-medium text-[16px] mt-4 flex flex-col">
              <span>{t("Fresh and healthy food")}</span>
              <span>{t("with")}</span>
              <span className="">{t("high nutritional value")}</span>
            </p>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link
            to="/sign-up"
            className="flex flex-col items-center h-full all-center"
          >
            <Wave />
            <p className="font-medium text-[16px] mt-4 flex flex-col">
              <span>{t("Fresh and healthy food")}</span>
              <span>{t("with")}</span>
              <span className="">{t("high nutritional value")}</span>
            </p>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link
            to="/sign-up"
            className="flex flex-col items-center h-full all-center"
          >
            <Rate />
            <p className="font-medium text-[16px] mt-4 flex flex-col">
              <span>{t("Healthy nutrition according to ")}</span>
              <span>{t("daily calories requirement")}</span>
              <span className="font-bold">{t("based on BMI")}</span>
            </p>
          </Link>
        </SwiperSlide>
        {/* );
        })} */}
      </Swiper>
    </LandingAndSignupWrapper>
  );
};
export default LandingPage;
