import React from "react";
import rate from "assets/images/landing/rate.png";
import frouts from "assets/images/landing/frouts.png";
import classes from "./Rate.module.scss"
const Rate = ({}) => {
  return (
    <div className={classes.rateContainer}>
      <img src={rate} className={classes.rate} alt="#" />
      <img src={frouts}  className={classes.frouts} alt="#" />
    </div>
  );
};

export default Rate;
