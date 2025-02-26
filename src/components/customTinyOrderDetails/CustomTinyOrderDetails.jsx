import React from "react";
import classes from "../IngredientSlider/IngredientSlider.module.scss";
import almonds from "assets/images/temporaryImages/nuts/tinyjpg/almonds.jpg";

const CustomTinyOrderDetails = ({ order }) => {
  console.log(order);
  const thisSiteDomain = () => {
    return window.location.host;
  };
  return (
    <div className={classes.caloriesContainer}>
      <div className={classes.ingredienSpecification}>
        <span>{order?.fisrtOption?.value}</span>
        <span>|</span>
        <span>{order?.secondOption?.value}</span>
      </div>
      <div className="flex flex-col items-center ">
        <img src={order.image} alt="#" className="w-[50px]" />
        <span className="text-sm">{order?.name}</span>
        <span className="text-xs">{order?.selectedPackWeight?.name}</span>
      </div>
    </div>
  );
};

export default CustomTinyOrderDetails;
