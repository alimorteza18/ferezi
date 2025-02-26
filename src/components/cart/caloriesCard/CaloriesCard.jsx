import BottomSheetComponent from "components/bottomSheet/BottomSheetComponent";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const CaloriesCard = ({ needCal, packCal, packCaloriesIsOk }) => {
  const { t } = useTranslation();

  return (
    <>
      <div
        className={`flex flex-col text-xs px-2 py-1 ${
          packCaloriesIsOk ? "bg-[#87CB44]" : "bg-[#FBBB23]"
        } rounded-md w-full`}
      >
        <div className="flex flex-row">
          <span>{t("totalValue")}</span>:
          <span className="mx-1">{packCal || null}</span>
        </div>
        <div className="flex flex-row">
          <span>{t("dailyValue")}</span>:
          <span className="mx-1">{needCal || null}</span>
        </div>
      </div>
    </>
  );
};

export default CaloriesCard;
