// // Convert Persian date to Gregorian
// const persianDate = "1403/06/05";
// const gregorianDate = convertDate(persianDate, "persian", "gregorian");
// console.log(gregorianDate); // Outputs: "08/26/2024"

// // Convert Arabic date to Gregorian
// const arabicDate = "1445/02/11";
// const gregorianDateFromArabic = convertDate(arabicDate, "arabic", "gregorian");
// console.log(gregorianDateFromArabic); // Outputs: "08/26/2024"

// // Convert Gregorian date to Persian
// const gregorianDate = "2024/08/26";
// const persianDateFromGregorian = convertDate(gregorianDate, "gregorian", "persian");
// console.log(persianDateFromGregorian); // Outputs: "1403/06/05"

// // Convert Gregorian date to Arabic
// const arabicDateFromGregorian = convertDate(gregorianDate, "gregorian", "arabic");
// console.log(arabicDateFromGregorian); // Outputs: "1445/02/11"

import DateObject from "react-date-object";
import persian from "react-date-object/calendars/persian";
import arabic from "react-date-object/calendars/arabic";
import gregorian from "react-date-object/calendars/gregorian";
import persian_fa from "react-date-object/locales/persian_fa";
import arabic_ar from "react-date-object/locales/arabic_ar";

// JavaScript Function for Date Conversion
const convertDate = (dateString, fromCalendarType, toCalendarType) => {
  let fromCalendar, fromLocale, toCalendar, toLocale;

  // Determine the "from" calendar and locale
  if (fromCalendarType === "gregorian") {
    fromCalendar = gregorian;
  } else if (fromCalendarType === "persian" || fromCalendarType === "fa") {
    fromCalendar = persian;
    fromLocale = persian_fa;
  } else if (fromCalendarType === "arabic" || fromCalendarType === "ar") {
    fromCalendar = arabic;
    fromLocale = arabic_ar;
  } else {
    return null; // Unsupported calendar type
  }

  // Determine the "to" calendar and locale
  if (toCalendarType === "gregorian") {
    toCalendar = gregorian;
  } else if (toCalendarType === "persian" || toCalendarType === "fa") {
    toCalendar = persian;
    toLocale = persian_fa;
  } else if (toCalendarType === "arabic" || toCalendarType === "ar") {
    toCalendar = arabic;
    toLocale = arabic_ar;
  } else {
    return null; // Unsupported calendar type
  }

  // Create a DateObject with the fromCalendar and locale
  const date = new DateObject({
    date: dateString,
    calendar: fromCalendar,
    locale: fromLocale,
  });

  // Convert to the target calendar
  const convertedDate = date.convert(toCalendar);

  // Format the date in the target calendar
  return convertedDate.format("YYYY/MM/DD");
};

export default convertDate;
