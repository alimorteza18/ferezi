import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

const TabForSelect = (props: any) => {
  const { t } = useTranslation();
  const { itemTypes, setItemTypes, firstTab, secondTab } = props;

  useEffect(() => {
    console.log(itemTypes);
  }, [itemTypes]);
  return (
    <>
      <div>
        <div
          className="px-3 font-semibold relative cursor-pointer"
          onClick={() => setItemTypes("pack")}
        >
          {firstTab}
          <div
            className={`fr-underline transition-opacity duration-300 ${
              itemTypes === "pack" ? "opacity-100" : "opacity-0"
            }`}
          ></div>
        </div>
      </div>
      <div>
        <div
          className="px-3 font-semibold relative cursor-pointer"
          onClick={() => setItemTypes("custom")}
        >
          {secondTab}
          <div
            className={`fr-underline transition-opacity duration-300 ${
              itemTypes === "custom" ? "opacity-100" : "opacity-0"
            }`}
          ></div>
        </div>
      </div>
    </>
  );
};

export default TabForSelect;
