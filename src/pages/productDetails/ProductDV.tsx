import React from "react";
import classes from "./ProductDV.module.scss";
const ProductDV: React.FC<any> = ({ className }) => {
  return (
    <div className={`${classes.container} ${className}`}>
      <div className={classes.name}>CHO</div>
      <div className={classes.dv}>
        <span>6%</span>
        <span>DV</span>
      </div>
      <div className={`${classes.circleShapeWrap} left-[-10px]`}>
        <div className={classes.circleShape}></div>
      </div>
      <div className={`${classes.circleShapeWrap} right-[-10px]`}>
        <div className={classes.circleShape}></div>
      </div>
    </div>
  );
};

export default ProductDV;
