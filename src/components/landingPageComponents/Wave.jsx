import React from "react";
import wave from "assets/images/landing/wave.png";
import hart from "assets/images/landing/hart.png";
import classes from "./Wave.module.scss";
const Wave = () => {
  return (
    <div className={classes.waveContainer}>
      <img src={wave} className={classes.wave} alt="#" />
      <img src={hart} className={classes.hart} alt="#" />
    </div>
  );
};

export default Wave;
