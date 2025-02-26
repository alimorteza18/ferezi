import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import classes from "./BeforePaymentSummary.module.scss";
const BeforePaymentSummary = () => {
  const { t } = useTranslation();
  return (
    <div className={classes.container}>
      <h2>{t("Order details")}</h2>
      <div className="flex flex-row justify-between text-black-textSecondry">
        <span>{t("Bag total")}</span>
        <span>520.00</span>
      </div>
      <div className="flex flex-row justify-between">
        <span className="text-black-textSecondry">{t("Bag savings")}</span>
        <span className="text-green-default">25.00</span>
      </div>
      <div className="flex flex-row justify-between">
        <span className="text-black-textSecondry">{t("Coupon discount")}</span>
        <button className="fr-button text-orange-900">
          {t("Apply coupon")}
        </button>
      </div>
      <div className="flex flex-row justify-between text-black-textSecondry">
        <span>{t("Delivery")}</span>
        <span>30.00</span>
      </div>
      {/* Total Amount */}
      <div className="flex flex-row justify-between border-t-2 border-green-100">
        <span>{t("Total amount")}</span>
      </div>
    </div>
  );
};

export default BeforePaymentSummary;
