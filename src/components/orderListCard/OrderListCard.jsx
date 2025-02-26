import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ReactComponent as Arrow } from "assets/icons/arrow-left-yellow.svg";
const OrderListCard = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col px-3 py-2 bg-white-text mt-5 rounded-lg ">
      <div className="flex flex-row items-start justify-between text-sm">
        <div>
          <span className="ltr:mr-1 rtl:ml-1">{t("Order code")}</span>
          <span className="text-green-900">1234</span>
        </div>
        <Link to="/order-details">
          <Arrow className="w-[30px] px-2 py-1 h-auto ltr:rotate-180" />
        </Link>
      </div>
      <div className="flex flex-row justify-between text-xs mt-2">
        <div>2023/11/19</div>
        <div>300$</div>
      </div>
    </div>
  );
};
export default OrderListCard;
