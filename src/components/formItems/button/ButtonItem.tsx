import React from "react";
import classes from "./ButtonItem.module.scss";
import LoadingForButton from "./loadingForButton/LoadingForButton";
interface ButtonTypes {
  name: string;
  loading?: boolean;
  onClick: any;
  className?: string;
}
const ButtonItem: React.FC<ButtonTypes> = ({
  name,
  loading,
  onClick,
  className,
}) => {
  return (
    <button
      className={`${classes.buttonStyle} ${className}`}
      onClick={() => onClick()}
    >
      {loading ? <LoadingForButton /> : name}
    </button>
  );
};
export default ButtonItem;
