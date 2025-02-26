import { ReactComponent as CloseIcon } from "assets/icons/close-icon.svg";
import { ReactComponent as Minus } from "assets/icons/minus-gray.svg";
import { ReactComponent as Trash } from "assets/icons/trash.svg";
import { ReactComponent as Plus } from "assets/icons/plus-green.svg";
import TrayForPack from "assets/images/backgrounds/tray-for-pack.png";
import TrayContentForPack from "assets/images/temporaryImages/tinyContent/six-item.png";
import BottomSheetComponent from "components/bottomSheet/BottomSheetComponent";
import ShowproductDetails from "components/showProductDetails/ShowproductDetails";
import { useCartContext } from "context/CartContext";
import { decreaseCountOfPack, increaseCountOfPack } from "functions/functions";
import { useLayoutEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import classes from "./PackCardForSchoolAndEventInCart.module.scss";
import CaloriesCard from "components/cart/caloriesCard/CaloriesCard";
import {
  decreaseCountOfEventPackInCard,
  increaseCountOfCustomSchoolPackInCard,
  increaseCountOfEventPackInCard,
} from "functions/cardFunction";

const PackCardForSchoolAndEventInCart = ({
  cartIndex,
  schoolIndex,
  eventIndex,
  packIndex,
}) => {
  const { t } = useTranslation();
  const [count, setCount] = useState(0);
  const [pack, setPack] = useState(null);
  const [child, setChild] = useState(null);
  const [showProductDetails, setShowProductDetails] = useState(false);
  const { cart, setCart } = useCartContext();
  const isSchool = schoolIndex !== undefined;
  const getPack = () => {
    // if pack be Frezi school pack
    if (schoolIndex !== undefined) {
      console.log("pack is school");
      const temp = cart[cartIndex]?.school[schoolIndex]?.tiny?.slice(1);
      console.log(temp);
      setPack(temp[0]);
      setCount(temp.count);
    } else {
      // event custom pack
      if (cart[cartIndex]?.event[eventIndex].tinyType === "custom") {
        const temp = cart[cartIndex]?.event[eventIndex].tiny;
        setPack(temp);
        // console.log(temp);
        // event Frezi pack
      } else {
        const temp = cart[cartIndex]?.event[eventIndex]?.tiny[packIndex];
        setPack(temp);
        setCount(temp?.count);
        // console.log(temp.count);
        // console.log(temp);
      }
    }
  };

  const date = cart[cartIndex]?.date;

  const getChild = () => {
    // console.log(cart[cartIndex]?.school[schoolIndex]?.child?.name)
    if (schoolIndex !== undefined) {
      const temp = cart[cartIndex].school[schoolIndex].child;
      // console.log(temp);
      setChild(temp);
    } else {
      const temp = cart[cartIndex]?.event[eventIndex]?.child;

      temp && setChild(temp);
      // console.log(temp);
    }
  };

  useLayoutEffect(() => {
    try {
      if (schoolIndex !== undefined) {
        getChild();
      }
      getPack();
    } catch {
      alert("error in getChild or getPack");
    }
  }, [cart]);
  return (
    <div className="w-full all-center">
      <div className={classes.PackCardContainer}>
        <div className="h-6 w-full flex justify-end">
          <CloseIcon />
        </div>
        <div className="w-full flex flex-row justify-between">
          <span className="font-bold">
            {isSchool
              ? `${child?.name}'s pack`
              : pack?.nutsName || "custom pack"}
          </span>
          <span className="font-bold">
            {
              // isSchool
              //   ? `${child?.name}`
              //   :
              pack?.cal ? `${pack.cal} cal` : null
            }
          </span>
        </div>
        {/* {isSchool && (
          <CaloriesCard needCal={child?.needFTEE} packCal={pack?.cal} />
        )} */}
        {date && (
          <div className="w-full h-auto flex justify-between">
            <span>{t("Delivery")}</span>
            <span>{date}</span>
          </div>
        )}

        <div className={classes.packTray}>
          <img src={TrayForPack} alt="tray-pack" className={classes.tray} />
          <img
            src={TrayContentForPack}
            alt="tray-pack"
            className={classes.content}
          />
        </div>
        <div className={`${classes.contentNames}`}>
          Almond, orange juice, apple, cheese, cupcake, bread
        </div>
        <div className="flex flex-row justify-between w-full font-bold">
          <span className={classes.price}>{pack?.price} $</span>
          {/* {console.log(pack)} */}
          {isSchool ? null : (
            <div className="flex flex-row">
              <div
                className="p-1 rounded-lg cursor-pointer all-center"
                onClick={() =>
                  decreaseCountOfEventPackInCard(
                    cart,
                    setCart,
                    cartIndex,
                    isSchool,
                    schoolIndex,
                    eventIndex,
                    packIndex
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
                onClick={() =>
                  increaseCountOfEventPackInCard(
                    cart,
                    setCart,
                    cartIndex,
                    isSchool,
                    schoolIndex,
                    eventIndex,
                    packIndex
                  )
                }
              >
                <Plus className="w-6 h-auto " />
              </div>
            </div>
          )}
        </div>
      </div>

      <BottomSheetComponent
        showBottomSheet={showProductDetails}
        setShowBottomSheet={setShowProductDetails}
      >
        <ShowproductDetails />
      </BottomSheetComponent>
    </div>
  );
};

export default PackCardForSchoolAndEventInCart;
