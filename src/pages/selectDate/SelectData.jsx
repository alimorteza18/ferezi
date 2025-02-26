import { ReactComponent as ArrowGray } from "assets/icons/arrow-left-gray.svg";
import { ReactComponent as ArrowWhite } from "assets/icons/arrow-left-white.svg";
import "components/dateAndTimePicker/custom-color-for-datepicker.scss";
import convertToEnglishDigits from "functions/convertToEnglishDigits";
import { useEffect, useState } from "react";
import arabic from "react-date-object/calendars/arabic";
import gregorian from "react-date-object/calendars/gregorian";
import persian from "react-date-object/calendars/persian";
import arabic_ar from "react-date-object/locales/arabic_ar";
import gregorian_en from "react-date-object/locales/gregorian_en";
import persian_fa from "react-date-object/locales/persian_fa";
import { useTranslation } from "react-i18next";
import { Calendar } from "react-multi-date-picker";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import "react-multi-date-picker/styles/layouts/mobile.css";
import { Link, useLocation, useNavigate } from "react-router-dom";

const SelectDate = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const eventParam = queryParams.get("order");

  const { i18n, t } = useTranslation();
  const lang = i18n.language;

  const [deliveryDate, setDeliveryDate] = useState(null);

  const [datePickerOptions, setDatePickerOptions] = useState({
    calendar: gregorian,
    locale: gregorian_en,
    digits: false,
    format: "YYYY/MM/DD HH:mm",
    // format: "YYYY/MM/DD",
  });

  const datePickerOptionsHandler = () => {
    if (lang === "fa") {
      setDatePickerOptions({
        ...datePickerOptions,
        calendar: persian,
        locale: persian_fa,
      });
    } else if (lang === "ar") {
      setDatePickerOptions({
        ...datePickerOptions,
        calendar: arabic,
        locale: arabic_ar,
      });
    } else {
      setDatePickerOptions({
        ...datePickerOptions,
        calendar: gregorian,
        locale: gregorian_en,
      });
    }
  };
  useEffect(() => {
    // props.setDeliveryDate(null);
    datePickerOptionsHandler();
  }, [lang]);

  const nextHandler = () => {
    if (deliveryDate) {
      navigate(
        `/order/${eventParam}?date=${convertToEnglishDigits(deliveryDate)}`
      );
    }
  };

  return (
    <div className="w-full h-full flex items-center flex-col">
      <p className="">{t("chooseDeliveryDate")}</p>
      <div className="w-fit h-auto py-3">
        <Calendar
          className="mt-4 orange !shadow-none !bg-transparent"
          {...datePickerOptions}
          onChange={(date) => {
            // Ensure that date is not null before calling setDeliveryDate
            if (date) {
              // console.log(date.toString())
              // setDeliveryDateAndTime(date.toString()); // or use any other method
              setDeliveryDate(date.convert(gregorian).toString()); // or use any other method
            } else {
              // setDeliveryDateAndTime(null);
            }
          }}
          // disableDayPicker
          // mobileLabels={{
          //   OK: t("Accept"),
          //   CANCEL: t("Close"),
          // }}
        />
        <div
          className={`flex flex-row justify-between  w-full text-lg font-medium ltr`}
        >
          <Link to="/" className="fr-secondry-button all-center flex-row gap-1">
            <ArrowGray className="w-4 h-auto" />
            {t("back")}
          </Link>
          <button
            onClick={() => nextHandler()}
            disabled={!deliveryDate}
            className={`bg-[#FFB300] flex justify-center items-center px-2 rounded-lg text-[#fff] all-center flex-row gap-1 shadow-none 
            ${deliveryDate ? "!bg-[#FFB300]" : "bg-inherit"}
            `}
          >
            {t("next")}
            <ArrowWhite className="w-4 h-auto rotate-180" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default SelectDate;
