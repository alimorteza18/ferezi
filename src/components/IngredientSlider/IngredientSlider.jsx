import React from "react";
import classes from "./IngredientSlider.module.scss";
import tomato from "assets/images/temporaryImages/tomato.png";
import { useTranslation } from "react-i18next";

const IngredientSlider = ({ ingredient, componentType }) => {
  const { i18n, t } = useTranslation();
  const lang = i18n.language;
  const hostAddress = process.env.REACT_APP_Host_Address;
  return (
    <div className={classes.caloriesContainer}>
      {/* <div className={classes.ingredienSpecification}>
        <span>low salt</span>
        <span>|</span>
        <span>fatty</span>
      </div> */}
      {componentType ? (
        <div className="flex flex-col items-center ">
          <img
            src={`${hostAddress}${ingredient.image}`}
            alt="#"
            className="w-[50px]"
          />
          <span className="text-sm"> {`${ingredient[`name_${lang}`]}`}</span>
          <span className="text-xs">{ingredient.copen_count}</span>
          <span className="text-xs">{ingredient.copen_type}</span>
        </div>
      ) : null}
    </div>
  );
};

export default IngredientSlider;
