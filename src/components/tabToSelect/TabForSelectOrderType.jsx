import React from "react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import classes from "./SelectionPostType.module.scss";
import { useTranslation } from "react-i18next";
const TabForSelectOrderType = ({
  itemTypes,
  setItemTypes,
  firstTab,
  secondTab,
  className,
}) => {
  const selectedTypeRef = useRef(null);
  const packSelectedItemRef = useRef(null);
  const customSelectedItemRef = useRef(null);
  const selectedItemBackgroundRef = useRef(null);

  const changeTypeHandler = (orderType, event) => {
    setItemTypes(orderType);

    //  -&-&-&- start move the background to clicked item -&-&-&-
    selectedTypeRef.current = event.target;
    selectedTypeRef.current = event.target;
    //  -&-&-&- access the width of the clicked element -&-&-&-
    if (selectedTypeRef.current) {
      const width = selectedTypeRef.current.offsetWidth;
      const left = selectedTypeRef.current.offsetLeft;
      // generate a style object based on the width and left
      const customClass = { width: `${width}px`, left: `${left}px` };
      // apply the generated style to the clicked element
      Object.assign(selectedItemBackgroundRef.current.style, customClass);
    }
    // -&-&-&- end of move the background to clicked item -&-&-&-
  };

  const defaultTypeSelected = () => {
    let width = 0;
    let left = 0;
    if (itemTypes === "pack") {
      width = packSelectedItemRef.current.offsetWidth;
      left = packSelectedItemRef.current.offsetLeft;
    } else {
      width = customSelectedItemRef.current.offsetWidth;
      left = customSelectedItemRef.current.offsetLeft;
    }
    const defaultClass = { width: `${width}px`, left: `${left}px` };
    Object.assign(selectedItemBackgroundRef.current.style, defaultClass);
  };
  console.log(itemTypes,"SSSSSSSSSSSSSS")
  useLayoutEffect(() => {
    defaultTypeSelected();
    console.log("changed", itemTypes);
    // Add event listener
    window.addEventListener("resize", defaultTypeSelected);
    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("resize", defaultTypeSelected);
    };
  }, [itemTypes]);
  return (
    <div className={`${classes.postType} ${className}`}>
      <div
        ref={packSelectedItemRef}
        onClick={(event) => changeTypeHandler("pack", event)}
        className={`${classes.postTypeItem}
              ${itemTypes === "pack" ? classes.selected : ""}`}
      >
        {firstTab}
      </div>
      <div
        ref={customSelectedItemRef}
        onClick={(event) => changeTypeHandler("custom", event)}
        className={`${classes.postTypeItem}
              ${itemTypes === "custom" ? classes.selected : ""}`}
      >
        {secondTab}
      </div>

      <div
        ref={selectedItemBackgroundRef}
        className={`${classes.selectedItemBackground}`}
      ></div>
    </div>
  );
};

export default TabForSelectOrderType;
