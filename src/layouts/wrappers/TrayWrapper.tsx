import useCurrentRoute from "functions/useCurrentRoute ";
import classes from "./TrayWrapper.module.scss";
const TrayWrapper = (props: any) => {
  const hideTray = ["/landing", "/login", "/sign-up"];

  return hideTray.includes(useCurrentRoute()) ? (
    <>{props.children}</>
  ) : (
    <>
      <div className={classes.trayBackground}>
        <div className={classes.trayStyle}>{props.children}</div>
      </div>
    </>
  );
};

export default TrayWrapper;
