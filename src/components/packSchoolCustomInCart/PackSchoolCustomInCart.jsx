import { ReactComponent as LeftArrow } from "assets/icons/arrow-left-gray.svg";
import Child from "assets/icons/child.png";
import { ReactComponent as CloseIcon } from "assets/icons/close-icon.svg";
import { ReactComponent as Minus } from "assets/icons/minus-gray.svg";
import { ReactComponent as Plus } from "assets/icons/plus-green.svg";
import { ReactComponent as Trash } from "assets/icons/trash.svg";
import minus from "assets/images/minus-cart.png";
import plus from "assets/images/plus-cart.png";
import BottomSheetComponent from "components/bottomSheet/BottomSheetComponent";
import CaloriesCard from "components/cart/caloriesCard/CaloriesCard";
import { useCartContext } from "context/CartContext";
import {
  decreaseCountOfCustomSchoolPackInCard,
  decreaseCountOfProductInCard,
  increaseCountOfCustomSchoolPackInCard,
  increaseCountOfProductInCard,
} from "functions/cardFunction";
import { useEffect, useLayoutEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import classes from "./PackSchoolCustomInCart.module.scss";
const PackSchoolCustomInCart = ({ cartIndex, schoolIndex, eventIndex }) => {
  const { t } = useTranslation();
  const [showDetails, setShowDetails] = useState(false);
  const [totalPrice, setTotalPrice] = useState(null);
  const [totalCalories, setTotalCalories] = useState(null);
  const [pack, setPack] = useState(null);
  const [count, setCount] = useState(null);
  const [child, setChild] = useState(null);
  const [showEditSuggestion, setShowEditSuggestion] = useState(false);
  const [packCaloriesIsOk, setPackCaloriesIsOk] = useState(true);
  // temporary item to prevent update pack
  const [dontAutoCheckTotalCalories, setDontAutoCheckTotalCalories] =
    useState(false);
  const [showEditSuggestionMessage, setShowEditSuggestionMessage] =
    useState(true);

  const { cart, setCart } = useCartContext();
  //   console.log(cart);
  const getPack = () => {
    if (schoolIndex !== undefined) {
      try {
        const temp = cart[cartIndex]?.school[schoolIndex]?.tiny?.slice(1);
        setPack(temp);
        console.log(cart[cartIndex]?.school[schoolIndex]);
      } catch {
        alert("problem in get pack - pack custom school");
      }
    }
  };

  const getChild = () => {
    // console.log(cart[cartIndex]?.school[schoolIndex]?.child?.name)
    if (schoolIndex !== undefined) {
      const temp = cart[cartIndex].school[schoolIndex].child;
      console.log(temp);
      setChild(temp);
    } else {
      const temp = cart[cartIndex].event[eventIndex].child;
      setChild(temp);
    }
  };

  const getCount = () => {
    const countOfPack = cart[cartIndex]?.school[schoolIndex].count || 1;

    setCount(countOfPack);
  };

  useLayoutEffect(() => {
    getChild();
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
  const calcTotalCalories = () => {
    try {
      const calories = pack.reduce(
        (total, item) =>
          total +
          (item.count
            ? item.count * item.selectedPackWeight.cal
            : item.selectedPackWeight.cal),
        0
      );
      setTotalCalories(calories);
    } catch {
      const calories = "-";
      setTotalCalories(calories);
    }
  };

  useEffect(() => {
    if (!dontAutoCheckTotalCalories) {
      calcTotalCalories();
      calcTotalPrice();
    }
  }, [cart, pack]);

  const checkBMIOfPack = () => {
    if (totalCalories) {
      try {
        const temp = totalCalories - child?.needFTEE;
        if (temp) {
          if (temp >= -130 && temp <= 130) {
            setPackCaloriesIsOk(true);
          } else {
            setPackCaloriesIsOk(false);
            if (showEditSuggestionMessage) {
              setShowEditSuggestion(true);
            }
          }
        }
      } catch (err) {
        alert("error in check bmi of pack");
      }
    }
  };

  useEffect(() => {
    checkBMIOfPack();
    setDontAutoCheckTotalCalories(false);
  }, [totalCalories]);

  const setAutoPackHandler = () => {
    const tempCart = [...cart];

    const FreziPackSuggestion = [
      {
        fisrtOption: {
          id: 1,
          value: "salty",
          name: "type1",
        },
        secondOption: {
          id: 1,
          value: "with skin",
          name: "type2",
        },
        selectedPackWeight: {
          id: 301,
          name: "100g",
          price: 10,
          cal: 70,
        },
        id: 200,
        name: "almonds",
        image:
          "data:image/png;base64,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",
        category: "nuts",
        categoryId: 0,
      },
      {
        fisrtOption: {
          id: 1,
          value: "salty",
          name: "type1",
        },
        secondOption: {
          id: 1,
          value: "with skin",
          name: "type2",
        },
        selectedPackWeight: {
          id: 301,
          name: "100g",
          price: 10,
          cal: 70,
        },
        id: 202,
        name: "apple",
        image:
          "data:image/png;base64,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",
        category: "fruits",
        categoryId: 1,
      },
      {
        fisrtOption: {
          id: 1,
          value: "salty",
          name: "type1",
        },
        secondOption: {
          id: 1,
          value: "with skin",
          name: "type2",
        },
        selectedPackWeight: {
          id: 301,
          name: "100g",
          price: 10,
          cal: 70,
        },
        id: 208,
        name: "cheese",
        image:
          "data:image/png;base64,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",
        category: "Dairy",
        categoryId: 4,
      },
      {
        fisrtOption: {
          id: 1,
          value: "salty",
          name: "type1",
        },
        secondOption: {
          id: 1,
          value: "with skin",
          name: "type2",
        },
        selectedPackWeight: {
          id: 301,
          name: "100g",
          price: 10,
          cal: 70,
        },
        id: 210,
        name: "orange juice",
        image:
          "data:image/png;base64,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",
        category: "juice",
        categoryId: 5,
      },
    ];

    tempCart[cartIndex].school[schoolIndex].tiny = [
      tempCart[cartIndex]?.school[schoolIndex]?.tiny[0],
      ...FreziPackSuggestion,
    ];
    console.log(tempCart);
    setCart(tempCart);
    setTotalCalories(Math.floor((child?.needFTEE + 40) / 10) * 10);
    setDontAutoCheckTotalCalories(true);
  };

  return (
    <>
      <div className={classes.packCardSchoolCustomInCart}>
        <div className="h-6 w-full flex justify-end">
          <CloseIcon />
        </div>

        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row gap-1 items-center">
            <img src={Child} className="w-6 h-6" />
            <div>
              <span className="text-[#000] font-bold text-xl">
                {child?.name || "- - -"}
              </span>
              <span className="text-[#393939] mx-1">{t("pack")}</span>
            </div>
          </div>
          <span className="text-[#000] font-bold text-xl">{totalPrice}$</span>
        </div>
        {/* <div className="flex flex-col text-xs px-2 py-1 bg-[#87CB44] rounded-md">
        <div className="flex flex-row">
          <span>{t("totalValue")}</span>:
          <span className="mx-1">{totalCalories}</span>
        </div>
        <div className="flex flex-row">
          <span>{t("dailyValue")}</span>:
          <span className="mx-1">{child?.needFTEE}</span>
        </div>
      </div> */}
        <CaloriesCard
          needCal={child?.needFTEE}
          packCal={totalCalories}
          packCaloriesIsOk={packCaloriesIsOk}
        />

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
              onClick={
                () => {
                  decreaseCountOfCustomSchoolPackInCard(
                    cart,
                    setCart,
                    cartIndex,
                    schoolIndex,
                    pack
                  );
                }
                // id,
                // price,
                // nutsName,
                // nutsImage,
                // orderTypeIsSchool,
                // temporaryCart,
                // setTemporaryCart,
                // count
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
                () => {
                  increaseCountOfCustomSchoolPackInCard(
                    cart,
                    setCart,
                    cartIndex,
                    schoolIndex,
                    pack
                  );
                }
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
                        <img
                          src={minus}
                          alt=""
                          className="h-4 w-4"
                          onClick={() =>
                            decreaseCountOfProductInCard(
                              cart,
                              setCart,
                              cartIndex,
                              schoolIndex,
                              productIndex,
                              pack
                            )
                          }
                        />
                        <span className="all-center w-7">
                          {item.count || 1}
                        </span>
                        <img
                          src={plus}
                          alt=""
                          className="h-4 w-4"
                          onClick={() =>
                            increaseCountOfProductInCard(
                              cart,
                              setCart,
                              cartIndex,
                              schoolIndex,
                              productIndex,
                              pack
                            )
                          }
                        />
                      </div>
                      <div className="w-10 text-center text-[#231F20] font-bold ">
                        <span>{item?.price * item?.count || item.price}</span>
                        <span className="mx-1 ">$</span>
                      </div>
                    </div>
                  </div>
                );
              })}
              <div className="h-6 w-full flex justify-between font-bold">
                <span className="">{t("Total amount")}</span>
                <span className="w-10">
                  {totalPrice}
                  <span className="mx-1">$</span>
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
      <BottomSheetComponent
        showBottomSheet={showEditSuggestion}
        setShowBottomSheet={setShowEditSuggestion}
      >
        <div className="all-center flex-col h-auto">
          <div className="w-[350px] bg-[#FBBB23] rounded-xl flex justify-center flex-col p-4 my-4">
            <p className="font-bold text-lg mt-3 text-center">
              1 pack needs to be edited
            </p>
            <p className="mt-2 text-center text-[#393939]">
              Total value in one of the packs is higher than daily value
            </p>
            <p
              className="text-black-900 underline mt-3 text-center cursor-pointer"
              onClick={() => {
                setShowEditSuggestion(false);
                setShowEditSuggestionMessage(false);
              }}
            >
              edit
            </p>
            <p
              className="text-black-900 underline mt-3 text-center cursor-pointer"
              onClick={() => {
                setAutoPackHandler();
                setShowEditSuggestion(false);
                setShowEditSuggestionMessage(false);
              }}
            >
              Frezi Edit
            </p>
          </div>

          {/* <Link
         to="/order/event"
         className="fr-orange-button w-[260px] my-3 text-center"
       >
         {t("add onother event")}
       </Link>
       <Link
         to="/order/school"
         className="fr-orange-button  w-[260px] my-3 text-center"
       >
         {t("add onother school")}
       </Link>
       <Link
         to="/addresses"
         className="fr-primary-button  w-[260px] my-3 text-center"
       >
         {t("Proceed to Checkout")}
       </Link> */}
        </div>
      </BottomSheetComponent>
    </>
  );
};

export default PackSchoolCustomInCart;
