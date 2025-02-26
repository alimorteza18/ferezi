import fingerSign1 from "assets/images/landing/finger-sign-1.png";
import fingerSign2 from "assets/images/landing/finger-sign-2.png";
import leaf from "assets/images/landing/leaf.png";
import classes from "./AppleAnimationIcon.module.scss";
const AppleAnimationIcon = () => {
  return (
    <div className={classes.appleIconContainer}>
      <img src={leaf} className={classes.leaf} alt="#" />
      <img src={fingerSign1} className={classes.fingerSign1} alt="#" />
      <img src={fingerSign2} className={classes.fingerSign2} alt="#" />
    </div>
  );
};

export default AppleAnimationIcon;
