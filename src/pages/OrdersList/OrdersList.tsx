import OrderListCard from "components/orderListCard/OrderListCard";
import TitleWithUnderline from "layouts/titleWithUnderline/TitleWithUnderline";
import React from "react";
import { useTranslation } from "react-i18next";

const OrdersList = () => {
  const { t } = useTranslation();
  return (
    <div>
      <TitleWithUnderline
        title={t("Order List")}
        className="all-center mt-3 mb-2"
      />
      <div>
        <OrderListCard />
        <OrderListCard />
        <OrderListCard />
        <OrderListCard />
      </div>
    </div>
  );
};

export default OrdersList;