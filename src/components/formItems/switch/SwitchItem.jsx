import React from "react";
import classes from "./Switch.module.scss";
const SwitchItem = (props) => {
  const { toggleSwitchHandler, switchStatus } = props;
  return (
    <div className="flex flex-row justify-start w-fit items-start">
      {/* <label className={classes.switch}>
        <input
          type="checkbox"
          defaultChecked={switchStatus}
          onChange={() => toggleSwitchHandler(!switchStatus)}
        />
        <span className={`${classes.slider} ${classes.round}`}></span>
      </label> */}

      <div
        onClick={() => toggleSwitchHandler(!switchStatus)}
        className={` ${classes.circleLoader} ${
          switchStatus ? classes.loadComplete : ""
        } `}
      >
        <div
          className={` ${classes.checkmark} ${classes.draw} ${
            switchStatus ? "block" : "hidden"
          }  `}
        ></div>
      </div>

      <p className="mx-2">{props.name}</p>
    </div>
  );
};

export default SwitchItem;
