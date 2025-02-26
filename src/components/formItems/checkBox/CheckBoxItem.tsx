import React from "react";
import classes from "./CheckBoxItem.module.scss";
const CheckBoxItem = () => {
  return (
    <div>
      <label className={classes.container}>
        <input type="checkbox" />
        <span className={classes.label}></span>
        <span className={classes.checkbox}></span>
        <span className={classes.checkmark}></span>
      </label>
    </div>
  );
};
export default CheckBoxItem;