import { ReactComponent as Plus } from "assets/icons/plus-xs.svg";
import { ReactComponent as Minus } from "assets/icons/minus-xs.svg";
import IngredientSlider from "components/IngredientSlider/IngredientSlider";
import Accordion from "components/accordion/Accordion";
import {
  addAProductToTempCartForEvent,
  addAProductToTempCartForSchool,
  checkProductWeightAndOptionsEqualWithExitProduct,
  decreaseCountOfProduct,
  increaseCountOfProduct,
  productIsEqual,
  productNameIsEqual,
  removeProductFromTempCart,
} from "functions/functions";
import ProductDV from "pages/productDetails/ProductDV";
import React, { useEffect, useState, useLayoutEffect } from "react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTemporaryCartContext } from "context/TemporaryCartContext";
import { useTranslation } from "react-i18next";

// interface packCardProps {
//   nutsImage: any;
//   nutsName: string | any;
//   setTemporaryCard?: any;
//   temporaryCard?: any;
//   id?: number | any;
//   sizes?:
//     | {
//         price: number;
//         id: number;
//         name: string;
//       }[]
//     | any;
//   options: {
//     id: number;
//     name: string;
//     options: {
//       id: number;
//       name: string;
//       value: string;
//     }[];
//   }[];
// }

const ShowNutsDetails = ({ selectedProduct, orderType }) => {
  const { i18n, t } = useTranslation();
  const lang = i18n.language;
  console.log(selectedProduct);
  const hostAddress = process.env.REACT_APP_Host_Address;

  const { options, sizes, id, name, image, category, categoryId, features } =
    selectedProduct;
  const { temporaryCart, setTemporaryCart } = useTemporaryCartContext();
  // const [count, setCount] = useState(0);
  const [productDuplicated, setProductDuplicated] = useState(false);
  const [fisrtOption, setFisrtOption] = useState({
    id: features[0].id,
    value: features[0].name,
    name: features[0].name,
    // id: options[0].options[0].id,
    // value: options[0].options[0].name,
    // name: options[0].name,
  });
  // const [secondOption, setSecondOption] = useState({
  //   id: options[1].options[0].id,
  //   value: options[1].options[0].name,
  //   name: options[1].name,
  // });

  // const [selectedPackWeight, setSelectedPackWeight] = useState(sizes[0]);
  // const packWeightChangeHandler = (e) => {
  //   console.log(sizes[e.target.value]);
  //   setSelectedPackWeight(sizes[e.target.value]);
  // };
  const orderedProduct = {
    fisrtOption,
    // secondOption,
    // selectedPackWeight,
    id,
    name,
    image,
    category,
    categoryId,
  };
  // useEffect(() => {
  //   console.log(orderedProduct);
  //   checkProducIsExistInTempCart();
  // }, [fisrtOption, secondOption, selectedPackWeight, temporaryCart]);

  // useEffect(() => {
  //   checkProducIsExistInTempCart();
  // }, [temporaryCart]);

  // const checkProducIsExistInTempCart = () => {
  //   const existingItemIndex = temporaryCart.findIndex((item) => item.id === id);
  //   if (existingItemIndex !== -1) {
  //     productNameIsEqual(temporaryCart[existingItemIndex], orderedProduct)
  //       ? setProductDuplicated(true)
  //       : setProductDuplicated(false);
  //   } else if (existingItemIndex === -1) setProductDuplicated(false);
  // };

  return (
    <div className="w-full flex justify-center items-center">
      <div className="h-[60vh] overflow-scroll w-10/12 max-w-[500px] flex flex-col">
        <div className="mt-2">
          <h2 className="text-lg font-semibold">
            {selectedProduct[`name_${lang}`]}
          </h2>
          <h2 className="text-sm mt-2">
            <span className="font-semibold">{selectedProduct.price}$</span>
            {/* <del className="mx-3">$45.00</del>
            <span className="px-2 py-1 bg-green-100 rounded-lg text-green-default -m-2 text-xs">
              25% off
            </span> */}
          </h2>
        </div>
        <div>
          {/* if product is in diffrent sizes show size option */}
          {/* {sizes && (
            <div className="w-[100%] all-center my-5">
              <select
                name="packWeight"
                id="packWeight"
                className="w-full bg-green-400 rounded-lg h-[27px]"
                // onChange={(e) => {
                //   packWeightChangeHandler(e);
                // }}
              >
                {sizes.map((size, index) => {
                  return (
                    <option value={index} className="w-full bg-green-100">
                      {`${size[`name_${lang}`]} / $ ${size.price}`}
                    </option>
                  );
                })}
              </select>
            </div>
          )} */}
          <div className="w-full flex flex-row justify-between border-t border-black-300">
            {features?.map((feature, index) => {
              return (
                <div className="flex flex-col mt-4 mb-2 w-5/12">
                  <fieldset className="flex flex-col ">
                    <legend>{feature[`name_${lang}`]}:</legend>
                    <div
                      className="flex flex-col mt-2"
                      // onChange={(e) => selectFistOptionHandler(e)}
                    >
                      <div className="">
                        <input
                          type="radio"
                          // id={options[0].options[0].name}
                          name={feature[`name_en`]}
                          // value={options[0].options[0].name}
                          className="accent-orange-700"
                          defaultChecked
                          onChange={() => {
                            setFisrtOption({
                              id: feature.id,
                              value: feature.name_en,
                              name: feature.name_en,
                              // setFisrtOption({
                              //   id: options[0].options[0].id,
                              //   value: options[0].options[0].name,
                              //   name: options[0].name,
                            });
                          }}
                        />
                        <label htmlFor={feature.name_en} className="mx-1">
                          {feature.name_en}
                        </label>
                      </div>
                    </div>
                  </fieldset>
                </div>
              );
            })}
            {/* <div className="flex flex-col mt-4 mb-2 w-5/12">
              <fieldset className="flex flex-col ">
                <legend>{features[0][`name_${lang}`]}:</legend>
                <div
                  className="flex flex-col mt-2"
                  // onChange={(e) => selectFistOptionHandler(e)}
                >
                  <div className="">
                    <input
                      type="radio"
                      // id={options[0].options[0].name}
                      name={features[0][`name_en`]}
                      // value={options[0].options[0].name}
                      className="accent-orange-700"
                      defaultChecked
                      onChange={() => {
                        setFisrtOption({
                          id: features[0].id,
                          value: features[0].name_en,
                          name: features[0].name_en,
                          // setFisrtOption({
                          //   id: options[0].options[0].id,
                          //   value: options[0].options[0].name,
                          //   name: options[0].name,
                        });
                      }}
                    />
                    <label htmlFor={features[0].name_en} className="mx-1">
                      {features[0].name_en}
                    </label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      // id={options[0].options[1].name}
                      name={options[0].name}
                      // value={options[0].options[1].name}
                      className="accent-orange-700"
                      onChange={() =>
                        setFisrtOption({
                          id: options[0].options[1].id,
                          value: options[0].options[1].name,
                          name: options[0].name,
                        })
                      }
                    />
                    <label
                      htmlFor={options[0].options[1].name}
                      className="mx-1"
                    >
                      {options[0].options[1].name}
                    </label>
                  </div>
                </div>
              </fieldset>
            </div> */}
            {/* <div className="flex flex-col mt-4 mb-2 w-5/12">
              <fieldset className="flex flex-col ">
                <legend>{options[1].name}:</legend>
                <div
                  className="flex flex-col mt-2"
                  // onChange={(e) => selectSecondOptionHandler(e)}
                >
                  <div className="">
                    <input
                      type="radio"
                      // id={options[1].options[0].name}
                      name={options[1].name}
                      // value={options[1].options[0].name}
                      className="accent-orange-700"
                      defaultChecked
                      onChange={() => {
                        setSecondOption({
                          id: options[1].options[0].id,
                          value: options[1].options[0].name,
                          name: options[1].name,
                        });
                      }}
                    />
                    <label
                      htmlFor={options[1].options[0].name}
                      className="mx-1"
                    >
                      {options[1].options[0].name}
                    </label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      // id={options[1].options[1].name}
                      name={options[1].name}
                      // value={options[1].options[1].name}
                      className="accent-orange-700"
                      onChange={() => {
                        setSecondOption({
                          id: options[1].options[1].id,
                          value: options[1].options[1].name,
                          name: options[1].name,
                        });
                      }}
                    />
                    <label
                      htmlFor={options[1].options[1].name}
                      className="mx-1"
                    >
                      {options[1].options[1].name}
                    </label>
                  </div>
                </div>
              </fieldset>
            </div> */}
          </div>
        </div>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className={`mySwiper custom-button-slider-productDetails`}
          // spaceBetween={50}
          slidesPerView={1}
          loop={true}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <img
              src={`${hostAddress}${selectedProduct.image}`}
              alt={`${selectedProduct[`name_${lang}`]}-image`}
              style={{ width: "100%" }}
            />
          </SwiperSlide>
        </Swiper>
        {/* <div className="mt-5">
          <Swiper
            navigation={true}
            modules={[Navigation]}
            className={`mySwiper width-auto-swiper-slide custom-button-slider-show-nut-details `}
            spaceBetween={12}
            slidesPerView={"auto"}
            loop={true}
          >
            {[0, 1, 2, 3, 4, 5].map((item) => {
              return (
                <SwiperSlide>
                  <IngredientSlider />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div> */}
        {/* <div className="mt-5">
          <Accordion title="Manufacturer Details" id={1}>
            <div className="mb-3">
              <Swiper
                navigation={true}
                modules={[Navigation]}
                className={`mySwiper width-auto-swiper-slide  custom-button-slider-show-nut-details`}
                spaceBetween={15}
                slidesPerView={"auto"}
                loop={true}
              >
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
              </Swiper>
            </div>
          </Accordion>
          <Accordion title="Product Disclaimer" id={2}>
            <p className="text-xs text-justify px-2">
              Our fresh fruit and vegetables are sourced daily. When you order
              eg. a kilo of apples, the actual weight may be a few grams over /
              under the kilo - this is unavoidable - you will be charged for the
              actual weight, but we will make every effort to get the weight as
              close as possible to your order. If there is more than a 10%
              discrepancy we will ring you to check whether you would prefer to
              change your order. Some items may be withdrawn if not available on
              the day. If any of our products are unavailable we will replace
              your original choice with a close alternative, and note any
              substitutions on your paperwork.
            </p>
          </Accordion>
          <Accordion title="Features & details" id={3}>
            <p className="text-xs text-justify px-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos nemo voluptatibus, officia tenetur assumenda quod
              eveniet perspiciatis quasi, nihil ex velit nesciunt nobis nisi
              cupiditate. Pariatur quod nulla soluta aliquid.
            </p>
          </Accordion>
        </div> */}
        {/* {orderType === "school" ? ( */}
        {productDuplicated ? (
          <div
            className="all-center h-fit w-full mt-4 mb-3 bg-[#87CB44] p-[6px] text-xl font-medium rounded-md shadow-[#e2e2e2] shadow-sm"
            onClick={() =>
              removeProductFromTempCart(
                orderedProduct,
                selectedProduct,
                temporaryCart,
                setTemporaryCart
              )
            }
          >
            {t("remove")}
          </div>
        ) : (
          <div
            className="all-center h-fit w-full mt-4 mb-3 bg-[#87CB44] p-[6px] text-xl font-medium rounded-md shadow-[#e2e2e2] shadow-sm"
            onClick={() => {
              orderType === "event"
                ? addAProductToTempCartForEvent(
                    orderedProduct,
                    selectedProduct,
                    temporaryCart,
                    setTemporaryCart
                  )
                : addAProductToTempCartForSchool(
                    orderedProduct,
                    selectedProduct,
                    temporaryCart,
                    setTemporaryCart
                  );
            }}
          >
            {t("AddToTheCart")}
          </div>
        )}
        {/* : (
        <>
          <div
            className="p-1 rounded-lg cursor-pointer"
            onClick={() => decreaseCountOfProduct()}
          >
            <Minus className="w-[16px] h-auto" />
          </div>
          <div className="w-7 mx-1 text-center"> {count} </div>
          <div
            className="p-1 rounded-lg cursor-pointer"
            onClick={() =>
              increaseCountOfProduct(
                count,
                setCount,
                name,
                image,
                id,
                selectedPackWeight,
                fisrtOption,
                secondOption
              )
            }
          >
            <Plus className="w-[16px] h-auto " />
          </div>
        </>
        )} */}
      </div>
    </div>
  );
};

export default ShowNutsDetails;
