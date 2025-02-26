import React from "react";
import background from "assets/images/landing/landing-frezi-logo.png";
import classes from "./LandingAndSignupWrapper.module.scss";

const LandingAndSignupWrapper = (props: any) => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <img src={background} className={classes.fereziLogo} alt="#" />
        {props.children}
      </div>
    </div>
  );
};

export default LandingAndSignupWrapper;
