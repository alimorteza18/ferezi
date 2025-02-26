import React from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import TitleWithUnderline from "layouts/titleWithUnderline/TitleWithUnderline";
import "swiper/css";
import pack1 from "assets/images/temporaryImages/pack1.jpeg";
import pack2 from "assets/images/temporaryImages/pack2.jpeg";
import pack3 from "assets/images/temporaryImages/pack3.png";
import pack4 from "assets/images/temporaryImages/pack4.jpeg";
import nuts from "assets/images/temporaryImages/tomato.png";
import IngredientSlider from "components/IngredientSlider/IngredientSlider";
import ProductDV from "./ProductDV";
import Accordion from "components/accordion/Accordion";
import { Link } from "react-router-dom";
const ProductDetails = () => {
  const { t } = useTranslation();

  return (
    <div>
      <TitleWithUnderline
        title={t("Nuts Details")}
        className="all-center mt-3 mb-2"
      />

      <div>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className={`mySwiper custom-button-slider-productDetails`}
          // spaceBetween={50}
          slidesPerView={1}
          loop={true}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper: any) => console.log(swiper)}
        >
          <SwiperSlide>
            <img src={pack1} alt="#" />
          </SwiperSlide>
          {/* <SwiperSlide>
            <img src={pack2} alt="#" />
          </SwiperSlide> */}
          <SwiperSlide>
            <img src={pack3} alt="#" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={pack4} alt="#" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="mt-2">
        <h2 className="text-lg font-semibold">Burger pack</h2>
        <h2 className="text-sm mt-2">
          <span className="font-semibold">$25.00</span>
          <del className="mx-3">$45.00</del>
          <span className="px-2 py-1 bg-green-100 rounded-lg text-green-default -m-2 text-xs">
            25% off
          </span>
        </h2>
      </div>
      <div className="mt-5">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className={`mySwiper width-auto-swiper-slide custom-button-slider-productDetails`}
          spaceBetween={12}
          slidesPerView={"auto"}
          loop={true}
        >
          {[0, 1, 2, 3, 4, 5].map((item) => {
            return (
              <SwiperSlide>
                {/* <IngredientSlider /> */}
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="mt-5">
        <Accordion title="Manufacturer Details" id={1}>
          <Swiper
            navigation={true}
            modules={[Navigation]}
            className={`mySwiper width-auto-swiper-slide custom-button-slider-productDetails`}
            spaceBetween={15}
            slidesPerView={"auto"}
            loop={true}
          >
            {/* {[0, 1, 2, 3, 4, 5].map((item) => {
            return ( */}
            <SwiperSlide>
              <ProductDV className="bg-orange-900" />
            </SwiperSlide>
            <SwiperSlide>
              <ProductDV className="bg-green-900" />
            </SwiperSlide>
            <SwiperSlide>
              <ProductDV className="bg-orange-900" />
            </SwiperSlide>
            <SwiperSlide>
              <ProductDV className="bg-green-900" />
            </SwiperSlide>
            <SwiperSlide>
              <ProductDV className="bg-blue-900" />
            </SwiperSlide>
            <SwiperSlide>
              <ProductDV className="bg-black-600" />
            </SwiperSlide>
            <SwiperSlide>
              <ProductDV className="bg-green-900" />
            </SwiperSlide>
            <SwiperSlide>
              <ProductDV className="bg-blue-900" />
            </SwiperSlide>
            {/* );
          })} */}
          </Swiper>
        </Accordion>
        <Accordion title="Product Disclaimer" id={2}>
          <p className="text-xs text-justify px-2">
            Our fresh fruit and vegetables are sourced daily. When you order eg.
            a kilo of apples, the actual weight may be a few grams over / under
            the kilo - this is unavoidable - you will be charged for the actual
            weight, but we will make every effort to get the weight as close as
            possible to your order. If there is more than a 10% discrepancy we
            will ring you to check whether you would prefer to change your
            order. Some items may be withdrawn if not available on the day. If
            any of our products are unavailable we will replace your original
            choice with a close alternative, and note any substitutions on your
            paperwork.
          </p>
        </Accordion>
        <Accordion title="Features & details" id={3}>
          <p className="text-xs text-justify px-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            nemo voluptatibus, officia tenetur assumenda quod eveniet
            perspiciatis quasi, nihil ex velit nesciunt nobis nisi cupiditate.
            Pariatur quod nulla soluta aliquid.
          </p>
        </Accordion>
      </div>
      <div className="w-full all-center">
        <Link
          to="/cart"
          className="fr-primary-button absolute bottom-[70px] w-7/12 text-center z-20"
        >
          Add to card
        </Link>
      </div>
    </div>
  );
};
export default ProductDetails;
