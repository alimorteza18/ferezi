import React from "react";
import { ReactComponent as ReviceSVG } from "assets/images/temporaryImages/recive.svg";
import { useTranslation } from "react-i18next";
import { ReactComponent as CalendarIcon } from "assets/icons/calendar.svg";
import { ReactComponent as Condition } from "assets/icons/document-text.svg";
import BeforePaymentSummary from "components/cart/beforePaymentSummary/BeforePaymentSummary";

const OrderDetails = () => {
  const { t } = useTranslation();
  return (
    <div className="flex items-center flex-col ">
      <ReviceSVG className="w-5/6 max-w-[400px] " />
      <div className="text-center mt-4">
        <h2 className="font-semibold ">{t("Thank you for your order")}</h2>
        <p className="text-sm mt-2">
          {`${t(
            "your order has been placed successfully.")} ${t("Your order ID is"
          )} #548475151`}
        </p>
      </div>
      <div className="w-full flex justify-evenly flex-row flex-wrap">
        <div className="all-center flex-row bg-green-900 text-green-default p-1 rounded-xl w-[150px] mt-3">
          <CalendarIcon className="w-[23px] self-center text-center h-auto mx-1" />
          <div className="text-black-text flex flex-col ">
            <span className="font-semibold text-sm">order date</span>
            <span className="text-xs">Sun, 13 sep, 10:52</span>
          </div>
        </div>
        <div className=" all-center flex-row bg-green-900 text-green-default p-1 rounded-xl w-[150px] mt-3">
          <Condition className="w-[23px] self-center text-center h-auto mx-1 text-black-text" />
          <div className="text-black-text flex flex-col ">
            <span className="font-semibold text-sm">order ID</span>
            <span className="text-xs">548475151</span>
          </div>
        </div>
      </div>
      <BeforePaymentSummary />
    </div>
  );
};

export default OrderDetails;
