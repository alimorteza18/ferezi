import { ReactComponent as LeftArrow } from "assets/icons/arrow-left-gray.svg";
import Child from "assets/icons/child.png";
import { ReactComponent as CloseIcon } from "assets/icons/close-icon.svg";
import { ReactComponent as Minus } from "assets/icons/minus-gray.svg";
import { ReactComponent as Plus } from "assets/icons/plus-green.svg";
import { ReactComponent as Trash } from "assets/icons/trash.svg";
import minus from "assets/images/minus-cart.png";
import plus from "assets/images/plus-cart.png";
import { useCartContext } from "context/CartContext";
import {
  decreaseCountOfCustomEventPackInCard,
  decreaseCountOfCustomEventPackProductInCard,
  increaseCountOfCustomEventPackInCard,
  increaseCountOfCustomEventPackProductInCard,
} from "functions/cardFunction";
import { useEffect, useLayoutEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import classes from "./PackEventCustomInCart.module.scss";
const PackEventCustomInCart = ({ cartIndex, eventIndex }) => {
  const { t } = useTranslation();
  const [showDetails, setShowDetails] = useState(false);
  const [totalPrice, setTotalPrice] = useState(null);
  const [totalCalories, setTotalCalories] = useState(null);
  const [pack, setPack] = useState(null);
  const [count, setCount] = useState(null);
  const [child, setChild] = useState(null);

  const { cart, setCart } = useCartContext();
  //   console.log(cart);
  const getPack = () => {
    try {
      const temp = cart[cartIndex]?.event[eventIndex]?.tiny?.slice(1);
      setPack(temp);
    } catch {
      alert("problem in get pack - pack custom school");
    }
  };

  const getCount = () => {
    const countOfPack = cart[cartIndex]?.event[eventIndex].count || 1;

    setCount(countOfPack);
  };

  useLayoutEffect(() => {
    getPack();
    getCount();
  }, [cart]);

  const date = cart[cartIndex]?.date;
  const calcTotalPrice = () => {
    try {
      const price = pack.reduce(
        (total, item) =>
          total +
          (item.count
            ? item.count * item.selectedPackWeight.price
            : item.selectedPackWeight.price),
        0
      );
      setTotalPrice(price);
    } catch {
      const price = "-";
      setTotalPrice(price);
    }
  };
  // const calcTotalCalories = () => {
  //   try {
  //     const calories = pack.reduce(
  //       (total, item) =>
  //         total +
  //         (item.count
  //           ? item.count * item.selectedPackWeight.cal
  //           : item.selectedPackWeight.cal),
  //       0
  //     );
  //     setTotalCalories(calories);
  //   } catch {
  //     const calories = "-";
  //     setTotalCalories(calories);
  //   }
  // };

  useEffect(() => {
    // calcTotalCalories();
    calcTotalPrice();
  }, [cart, pack]);

  return (
    <div className={classes.packCardSchoolCustomInCart}>
      <div className="h-6 w-full flex justify-end">
        <CloseIcon />
      </div>

      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row gap-1 items-center">
          <img src={Child} className="w-6 h-6" />
          <div>
            <span className="text-[#393939] mx-1 font-bold">
              {t("custom pack")}
            </span>
          </div>
        </div>
        <span className="text-[#000] font-bold text-xl">{totalPrice}$</span>
      </div>

      {/* <CaloriesCard needCal={child?.needFTEE} packCal={totalCalories} /> */}

      <div className="w-full h-auto flex justify-between">
        <span>{t("Delivery")}</span>
        <span>{date}</span>
      </div>
      <div className={classes.tinyInCard}>
        <div className="h-[70%] w-[80%] flex flex-wrap ">
          {console.log(pack)}
          {pack?.map((item) => {
            return (
              <div className="h-1/2 w-1/3 all-center">
                <img
                  src={item.image}
                  className="w-[80%] h-[80%] rounded-[50%]"
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-row justify-between w-full font-bold">
        <span className={classes.price}>{/* {pack?.price} $ */}</span>
        <div className="flex flex-row">
          <div
            className="p-1 rounded-lg cursor-pointer all-center"
            onClick={() =>
              decreaseCountOfCustomEventPackInCard(
                cart,
                setCart,
                cartIndex,
                eventIndex,
                pack
              )
            }
          >
            {count > 1 ? (
              <Minus className="w-6 h-auto" />
            ) : (
              <Trash className="w-6 h-auto" />
            )}
          </div>
          <div className="w-7 mx-1 text-center h-full all-center text-[#231F20] font-medium text-base">
            {count}
          </div>
          <div
            className="p-1 rounded-lg cursor-pointer"
            onClick={
              () =>
                increaseCountOfCustomEventPackInCard(
                  cart,
                  setCart,
                  cartIndex,
                  eventIndex,
                  pack
                )
              // id,
              // price,
              // count,
              // nutsName,
              // nutsImage,
              // orderTypeIsSchool,
              // temporaryCart,
              // setTemporaryCart
            }
          >
            <Plus className="w-6 h-auto " />
          </div>
        </div>
      </div>

      <div
        className={`${classes.detailsContainer} ${
          showDetails ? " max-h-[500px]" : "max-h-[42px]"
        } `}
      >
        {showDetails && (
          <div className="h-full flex flex-col p-2 items-center w-full gap-2">
            {pack?.map((item, productIndex) => {
              return (
                <div className="w-full flex flex-row justify-between items-center">
                  <span>{item.name}</span>
                  <div className="flex flex-row h-auto items-center gap-3">
                    <div className="flex flex-row h-8 items-center">
                      <div
                        className="p-1 rounded-lg cursor-pointer all-center"
                        onClick={() =>
                          decreaseCountOfCustomEventPackProductInCard(
                            cart,
                            setCart,
                            cartIndex,
                            eventIndex,
                            productIndex,
                            pack
                          )
                        }
                      >
                        {count > 1 ? (
                          <Minus className="w-6 h-auto" />
                        ) : (
                          <Trash className="w-6 h-auto" />
                        )}
                      </div>
                      {/* <img
                        src={minus}
                        alt=""
                        className="h-4 w-4"
                        onClick={() =>
                          decreaseCountOfCustomEventPackProductInCard(
                            cart,
                            setCart,
                            cartIndex,
                            eventIndex,
                            productIndex,
                            pack
                          )
                        }
                      /> */}
                      <span className="all-center w-7">{item.count || 1}</span>
                      <img
                        src={plus}
                        alt=""
                        className="h-4 w-4"
                        onClick={() =>
                          increaseCountOfCustomEventPackProductInCard(
                            cart,
                            setCart,
                            cartIndex,
                            eventIndex,
                            productIndex,
                            pack
                          )
                        }
                      />
                    </div>
                    <div className="w-10 text-center text-[#231F20]">
                      {/* <span>{item?.price * item?.count || item.price}</span>
                      <span className="mx-1 ">$</span> */}
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="h-6 w-full flex justify-between text-[#231F20]">
              <span className="font-bold">{t("Total amount")}</span>
              <span className="w-10">
                {totalPrice}
                <span className="mx-1 ">$</span>
              </span>
            </div>
          </div>
        )}

        <span className="w-full h-fit flex justify-center">
          <div
            className="w-fit h-fit all-center flex-row gap-1 cursor-pointer my-2 "
            onClick={() => setShowDetails(!showDetails)}
          >
            <span>{showDetails ? t("hideDetails") : t("seeDetails")}</span>
            <LeftArrow
              className={`h-4 w-4 transition-all duration-300  ${
                showDetails ? "rotate-90 " : "-rotate-90"
              }`}
            />
          </div>
        </span>
      </div>
    </div>
  );
};

export default PackEventCustomInCart;
