import { ReactComponent as Minus } from "assets/icons/minus-gray.svg";
import { ReactComponent as Plus } from "assets/icons/plus-green.svg";
import BottomSheetComponent from "components/bottomSheet/BottomSheetComponent";
import ShowproductDetails from "components/showProductDetails/ShowproductDetails";
import { useTemporaryCartContext } from "context/TemporaryCartContext";
import { useLayoutEffect, useState, useEffect } from "react";
import classes from "./PackCard.module.scss";
import { useTranslation } from "react-i18next";
import OpenNotificationWithIcon from "components/notificationWithIcon/OpenNotificationWithIcon";

const PackCard = ({ pack, orderTypeIsSchool, cart, setCart, setCl, childId }) => {
  const hostAddress = "https://ferezi.runflare.run";
  const { i18n, t } = useTranslation();
  const lang = i18n.language;
  
  const [showProductDetails, setShowProductDetails] = useState(false);
  const { temporaryCart, setTemporaryCart } = useTemporaryCartContext();
  const [added, setAdded] = useState({});
  const [childCalories, setChildCalories] = useState({});

  const handleQuantityChange = (pack_id, change) => {
    setCart(prevCart => {
      const updatedCart = prevCart && prevCart.packs ? prevCart : { packs: [] };
      const existingProduct = updatedCart.packs.find(item => item.pack_id === pack_id && item.child_id === childId);

      let updatedPacks;
      if (existingProduct) {
        updatedPacks = updatedCart.packs
          .map(item =>
            item.pack_id === pack_id && item.child_id === childId
              ? { ...item, quantity: Math.max(0, item.quantity + change) }
              : item
          )
          .filter(item => item.quantity > 0);
      } else if (change > 0) {
        updatedPacks = [...updatedCart.packs, { pack_id, quantity: change, child_id: childId }];
      } else {
        updatedPacks = updatedCart.packs;
      }

      return { packs: updatedPacks };
    });
  };

  useEffect(() => {
    setAdded(prevAdded => ({ ...prevAdded, [childId]: false }));
  }, [childId]);

  const handleAddPack = () => {
    handleQuantityChange(pack.id, 1);
    setAdded(prevAdded => ({ ...prevAdded, [childId]: true }));
    setChildCalories(prevCalories => ({
      ...prevCalories,
      [childId]: (prevCalories[childId] || 0) + pack.calorie,
    }));
    OpenNotificationWithIcon("This Pack Added To Cart");
  };

  const handleRemovePack = () => {
    handleQuantityChange(pack.id, -1);
    setAdded(prevAdded => ({ ...prevAdded, [childId]: false }));
    setChildCalories(prevCalories => ({
      ...prevCalories,
      [childId]: Math.max(0, (prevCalories[childId] || 0) - pack.calorie),
    }));
    OpenNotificationWithIcon("This Pack Removed From Cart");
  };

  useEffect(() => {
    setCl(childCalories[childId] || 0);
  }, [childCalories, childId]);

  return (
    <div className="w-full all-center">
      <div className={classes.PackCardContainer}>
        <div className="w-full" onClick={() => setShowProductDetails(true)}>
          <div className="w-full flex flex-row justify-between">
            <span className="font-bold text-sm w-[40%]">{pack[`name_${lang}`]}</span>
            <span className="font-bold text-sm">{`${pack.calorie} ${t("calories")}`}</span>
          </div>
          <div className={classes.packTray}>
            <div className={classes.content}>
              <div className={` ${classes.max} grid grid-cols-3 place-items-center gap-2`}>
                {pack.food?.map((foodType) => 
                  foodType?.products?.map((ingredient) => (
                    <div key={ingredient.slug} className="flex justify-center items-center bg-white rounded-lg w-[60px] h-[60px] shadow-md">
                      <img
                        src={`${hostAddress}${ingredient.image}`}
                        alt="tray-pack"
                        className={classes.tray}
                      />
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
          <div className={`${classes.contentNames}`}>
            {pack.food?.map((foodType, foodTypeIndex) => 
              foodType?.products?.map((ingredient, index) => (
                <span key={ingredient.slug}>
                  {`${ingredient[`name_${lang}`]}`}
                  {(foodType.products.length > index + 1 || pack.food.length > foodTypeIndex + 1) && ", "}
                </span>
              ))
            )}
          </div>
        </div>
        <div className="flex flex-row justify-end w-full font-bold">
          <div className="flex flex-row ">
            {added[childId] === false ? (
              <div className="p-1 rounded-lg cursor-pointer" onClick={handleAddPack}>
                <img src="/plus-orange.svg" alt="Add" />
              </div>
            ) : (
              <div className="flex space-x-1 justify-center items-center">
                <div onClick={handleRemovePack} className="bg-[#f43253] flex justify-center items-center w-7 h-7 rounded-[4px]">
                  <p className="text-white">x</p>
                </div>
                <img src="/tick.svg" alt="Added" />
              </div>
            )}
          </div>
        </div>
      </div>
      <BottomSheetComponent showBottomSheet={showProductDetails} setShowBottomSheet={setShowProductDetails}>
        <ShowproductDetails pack={pack} />
      </BottomSheetComponent>
    </div>
  );
};

export default PackCard;
