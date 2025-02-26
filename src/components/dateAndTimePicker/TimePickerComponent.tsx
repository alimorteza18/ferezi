import { useEffect, useState } from "react";
import DatePicker from "react-multi-date-picker";
import TimePicker from "react-multi-date-picker/plugins/time_picker";

import gregorian from "react-date-object/calendars/gregorian";
import gregorian_en from "react-date-object/locales/gregorian_en";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import arabic from "react-date-object/calendars/arabic";
import arabic_ar from "react-date-object/locales/arabic_ar";
import "react-multi-date-picker/styles/layouts/mobile.css";
import { ReactComponent as FFFF } from "assets/icons/bag-check.svg";
import { useTranslation } from "react-i18next";
import Icon from "react-multi-date-picker/components/icon";

type propsType = {
  deliveryDate: string | null;
  setDeliveryDate: React.Dispatch<React.SetStateAction<string | null>>;
};
// type datePickerOptionsType = {
//   calendar?: {};
//   locale?: {};
//   format?: string;
// };
const DatePickerComponent = (props: propsType) => {
  const { i18n, t } = useTranslation();

  const lang = i18n.language;

  const [datePickerOptions, setDatePickerOptions] = useState({
    calendar: gregorian,
    locale: gregorian_en,
    format: "MM/DD/YYYY HH:mm",
  });

  const datePickerOptionsHandler = () => {
    if (lang === "fa") {
      setDatePickerOptions({
        calendar: persian,
        locale: persian_fa,
        format: "YYYY/MM/DD HH:mm",
      });
    } else if (lang === "ar") {
      setDatePickerOptions({
        calendar: arabic,
        locale: arabic_ar,
        format: "YYYY/MM/DD HH:mm",
      });
    } else {
      setDatePickerOptions({
        calendar: gregorian,
        locale: gregorian_en,
        format: "MM/DD/YYYY HH:mm",
      });
    }
  };

  useEffect(() => {
    props.setDeliveryDate("--/--/-- , --:--");
    datePickerOptionsHandler();
  }, [lang]);

  return (
    <DatePicker
      {...datePickerOptions}
      onChange={(date) => {
        // Ensure that date is not null before calling setDeliveryDate
        if (date) {
          props.setDeliveryDate(date.toLocaleString()); // or use any other method
        } else {
          props.setDeliveryDate(null);
        }
      }}
      render={(value, openCalendar) => (
        <FFFF className="w-[20px] h-5" onClick={openCalendar} />
      )}
      className="rmdp-mobile"
      mobileLabels={{
        OK: t("Accept"),
        CANCEL: t("Close"),
      }}
    />
  );
};

export default DatePickerComponent;
