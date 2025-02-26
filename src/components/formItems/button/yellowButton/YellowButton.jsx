import LoadingForButton from "../loadingForButton/LoadingForButton";
import classes from "./YellowButton.module.scss";

const YellowButton = ({ name, onClick, type, className, loading }) => {
  return (
    <button
      className={`${classes.yellowButton} ${className}`}
      onClick={onClick}
      type={type}
    >
      {loading ? <LoadingForButton /> : name}
    </button>
  );
};

export default YellowButton;
