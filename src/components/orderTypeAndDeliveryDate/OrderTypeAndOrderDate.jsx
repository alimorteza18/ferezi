import { ReactComponent as LeftArrow } from "assets/icons/arrow-left-green.svg";
import convertDate from "functions/convertDate";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const OrderTypeAndOrderDate = ({
  orderType,
  deliveryDate,
  setDeliveryDate,
}) => {
  const { i18n, t } = useTranslation();
  const lang = i18n.language;
  const [convertedDeliveryDate, setConvertedDeliveryDate] = useState();

  const convertDeliveryDate = () => {
    try {
      if (lang === "en") {
        setConvertedDeliveryDate(deliveryDate.split(" ")[0]);
      } else {
        setConvertedDeliveryDate(convertDate(deliveryDate, "gregorian", lang));
      }
    } catch {
      setConvertedDeliveryDate("error to convert date");
    }
  };
  useEffect(() => {
    convertDeliveryDate();
  }, [lang]);

  return (
    <div className="flex flex-row w-full gap-1">
      <div className="bg-[#CFCFCF] px-3 py-2 text-[#fff] text-base font-medium rounded-[10px] w-fit">
        {orderType}
      </div>
      <div className="bg-[#fff] w-full all-center flex-row rounded-[10px] gap-2">
        <div>{convertedDeliveryDate}</div>
        <LeftArrow className="h-3 w-4 -rotate-90 " />
      </div>
    </div>
  );
};

export default OrderTypeAndOrderDate;
