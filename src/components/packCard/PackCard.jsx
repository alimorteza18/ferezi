import { ReactComponent as Minus } from "assets/icons/minus-gray.svg";
import { ReactComponent as Plus } from "assets/icons/plus-green.svg";
import BottomSheetComponent from "components/bottomSheet/BottomSheetComponent";
import ShowproductDetails from "components/showProductDetails/ShowproductDetails";
import { useTemporaryCartContext } from "context/TemporaryCartContext";

import { useLayoutEffect, useState } from "react";
import classes from "./PackCard.module.scss";
import { useTranslation } from "react-i18next";

const PackCard = ({
  pack,
  orderTypeIsSchool,
  cart,
  setCart,
  selectedChildFTEE,
}) => {
  const hostAddress = "https://ferezi.runflare.run";

  console.log(pack);

  const { i18n, t } = useTranslation();
  const lang = i18n.language;

  // Set initial count to 1
  const [count, setCount] = useState(1);
  const [showProductDetails, setShowProductDetails] = useState(false);
  const { temporaryCart, setTemporaryCart } = useTemporaryCartContext();

  const handleQuantityChange = (pack_id, change) => {
    setCart(prevCart => {
      const existingProduct = prevCart.find(item => item.pack_id === pack_id);

      if (existingProduct) {
        return prevCart.map(item =>
          item.pack_id === pack_id ? { ...item, quantity: Math.max(0, item.quantity + change) } : item
        ).filter(item => item.quantity > 0);
      } else if (change > 0) {
        return [...prevCart, { pack_id, quantity: change }];
      }
      return prevCart;
    });
  };

  useLayoutEffect(() => { }, [temporaryCart]);

  return (
    <div className="w-full all-center">
      <div className={classes.PackCardContainer}>
        <div className="w-full" onClick={() => setShowProductDetails(true)}>
          <div className="w-full flex flex-row justify-between">
            <span className="font-bold">
              {pack[`name_${lang}`]}
            </span>
            <span className="font-bold">{`${selectedChildFTEE} ${t(
              "calories"
            )}`}</span>
          </div>
          <div className={classes.packTray}>
            <div className={classes.content}>
              <div className={` ${classes.max}`}>
                {pack.food?.map((foodType, index) => {
                  return foodType?.products?.map((ingredient, index) => {
                    return (
                      <img
                        src={`${hostAddress}${ingredient.image}`}
                        alt="tray-pack"
                        className={classes.tray}
                      />
                    );
                  });
                })}
              </div>
            </div>
          </div>
          <div className={`${classes.contentNames}`}>
            {pack.food?.map((foodType, foodTypeindex) => {
              return foodType?.products?.map((ingredient, index) => {
                // if is not last product name of category(ingredient)
                return foodType?.products?.length > index + 1 ||
                  // if is not last product category (foodType)
                  pack.food.length > foodTypeindex + 1 ? (
                  <span key={ingredient.slug}>{`${ingredient[`name_${lang}`]
                    }, `}</span>
                ) : (
                  <span key={ingredient.slug}>
                    {`${ingredient[`name_${lang}`]}`}
                  </span>
                );
              });
            })}
          </div>
        </div>
        <div className="flex flex-row justify-between w-full font-bold">
          <span className={classes.price}>{pack.price * count} $</span>
          <div className="flex flex-row ">
            <div
              className="p-1 rounded-lg cursor-pointer all-center"
              onClick={() => handleQuantityChange(pack.id, -1)}
            >
              <Minus className="w-6 h-auto" />
            </div>
            <div className="w-7 mx-1 text-center h-full all-center text-[#231F20] font-medium text-base">
              {cart.find(item => item.pack_id === pack.id)?.quantity || 0}
            </div>
            <div
              className="p-1 rounded-lg cursor-pointer"
              onClick={() => handleQuantityChange(pack.id, 1)}
            >
              <Plus className="w-6 h-auto " />
            </div>
          </div>
        </div>
      </div>

      <BottomSheetComponent
        showBottomSheet={showProductDetails}
        setShowBottomSheet={setShowProductDetails}
      >
        <ShowproductDetails pack={pack} />
      </BottomSheetComponent>
    </div>
  );
};

export default PackCard;

