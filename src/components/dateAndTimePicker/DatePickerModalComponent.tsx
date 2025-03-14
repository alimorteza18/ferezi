import { ReactComponent as CalendarIcon } from "assets/icons/calendar.svg";
import { useEffect, useState } from "react";
import arabic from "react-date-object/calendars/arabic";
import gregorian from "react-date-object/calendars/gregorian";
import persian from "react-date-object/calendars/persian";
import arabic_ar from "react-date-object/locales/arabic_ar";
import gregorian_en from "react-date-object/locales/gregorian_en";
import persian_fa from "react-date-object/locales/persian_fa";
import { useTranslation } from "react-i18next";
import DatePicker from "react-multi-date-picker";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import "react-multi-date-picker/styles/layouts/mobile.css";
import "./custom-color-for-datepicker.scss";
// type propsType = {
//   deliveryDateAndTime: string | null;
//   setDeliveryDateAndTime: React.Dispatch<React.SetStateAction<any>>;
// };
// type datePickerOptionsType = {
//   calendar?: {};
//   locale?: {};
//   format?: string;
// };
const DatePickerModalComponent = ({
  deliveryDateAndTime,
  setDeliveryDateAndTime,
}: any) => {
  const { i18n, t } = useTranslation();
  const lang = i18n.language;
  const [datePickerOptions, setDatePickerOptions] = useState({
    calendar: gregorian,
    locale: gregorian_en,
    format: "MM/DD/YYYY",
  });

  const datePickerOptionsHandler = () => {
    if (lang === "fa") {
      setDatePickerOptions({
        calendar: persian,
        locale: persian_fa,
        format: "YYYY/MM/DD",
      });
    } else if (lang === "ar") {
      setDatePickerOptions({
        calendar: arabic,
        locale: arabic_ar,
        format: "YYYY/MM/DD",
      });
    } else {
      setDatePickerOptions({
        calendar: gregorian,
        locale: gregorian_en,
        format: "YYYY/MM/DD",
      });
    }
  };
  useEffect(() => {
    // props.setDeliveryDate(null);
    datePickerOptionsHandler();
  }, [lang]);
  return (
    <DatePicker
      className="orange rmdp-mobile"
      {...datePickerOptions}
      onChange={(date) => {
        // Ensure that date is not null before calling setDeliveryDate
        if (date) {
          // console.log(date)
          setDeliveryDateAndTime(date.toString()); // or use any other method
        } else {
          setDeliveryDateAndTime(null);
        }
      }}
      render={(value, openCalendar) =>
        deliveryDateAndTime ? (
          <div onClick={openCalendar} className="cursor-pointer">
            <h2 className="text-white-text underline underline-offset-[5px]">
              {t("change")}
            </h2>
          </div>
        ) : (
          <CalendarIcon
            className="w-[28px] sm:w-[34px] h-auto cursor-pointer"
            onClick={openCalendar}
          />
        )
      }
      // disableDayPicker
      plugins={[<TimePicker hideSeconds />]}
      mobileLabels={{
        OK: t("Accept"),
        CANCEL: t("Close"),
      }}
    />
  );
};
export default DatePickerModalComponent;
