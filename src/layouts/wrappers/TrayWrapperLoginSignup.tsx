import classes from "./TrayWrapperLoginSignup.module.scss";
const TrayWrapperLoginSignup = (props: any) => {
  return (
    <>
      <div className={classes.trayBackground}>
        <div className={classes.trayStyle}>{props.children}</div>
      </div>
    </>
  );
};

export default TrayWrapperLoginSignup;
