import { useState } from "react";
import classes from "./SelectChild.module.scss";
import { ReactComponent as LeftArrow } from "assets/icons/arrow-left-green.svg";
// import { ReactComponent as Child } from "assets/icons/child.svg";
import Child from "assets/icons/child.png";

import { useTranslation } from "react-i18next";

const SelectChild = ({
  children,
  selectedChild,
  setSelectedChild,
  setShowAddChildForm,
}) => {
  const [showChilrenList, setShowChilrenList] = useState(false);
  const { t } = useTranslation();
  return (
    <div
      className={classes.childSelection}
      onClick={() => {
        setShowChilrenList(!showChilrenList);
      }}
    >
      <div className="all-center flex-row justify-between w-full">
        <div className={classes.childName}>
          {selectedChild ? (
            <div className="flex flex-row items-center gap-[6px]">
              <img src={Child} className="w-6 h-6" />
              {selectedChild?.name}
            </div>
          ) : (
            t("selectChild")
          )}
        </div>
        <LeftArrow className="h-3 w-4 -rotate-90 " />
      </div>

      {showChilrenList ? (
        <div className={classes.childrenListContainer}>
          {children?.map((child) => {
            return (
              <div
                className={`${classes.childItem} ${
                  child.id === selectedChild?.id ? classes.activeItem : ""
                }`}
                onClick={() => setSelectedChild(child)}
              >
                <span>
                  <img src={Child} className="w-6 h-6" />
                </span>
                <span>{child?.name}</span>
              </div>
            );
          })}
          <div
            className={`${classes.childItem} mb-2`}
            onClick={() => setShowAddChildForm(true)}
          >
            <span className=" py-1"> add new child</span>
          </div>
        </div>
      ) : null}
    </div>
  );
};
export default SelectChild;
