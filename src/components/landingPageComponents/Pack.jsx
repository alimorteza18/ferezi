// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
// Import Swiper styles
import frouts from "assets/images/landing/frouts.png";
import classes from "./Pack.module.scss";
import { useTranslation } from "react-i18next";

import Orange from "assets/images/landing/orange.png";
import Strawberry from "assets/images/landing/Strawberry.png";
import Pomegranate from "assets/images/landing/Pomegranate.png";

const Pack = ({}) => {
  const { t } = useTranslation();

  return (
    <div className={classes.packContainer}>
      <div className="font-medium text-black text-base"></div>
      {t("whatMakesFEREZIUnique?")}

      <div className="bg-[#FEA386] w-[110px] h-[110px] rounded-[20px]">
        {/* <Swiper
          navigation={true}
          modules={[Navigation, Autoplay]}
          className={`mySwiper h-full full-height-slider ${classes.swiperContaier}`}
          // spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        > */}
        <Swiper
          navigation={true}
          modules={[Navigation, Autoplay]}
          className={`mySwiper full-height-slider custom-button-slider-landingPage ${classes.swiperContaier}`}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{ delay: 900 }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <img src={Orange} className="w-full h-full" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Strawberry} className="w-full h-full" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Pomegranate} className="w-full h-full" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Pack;
