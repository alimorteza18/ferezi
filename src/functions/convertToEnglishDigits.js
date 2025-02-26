// Utility function to convert Persian/Arabic digits to English digits
const convertToEnglishDigits = (input) => {
  const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  const arabicDigits = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
  const englishDigits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  return input.replace(/[۰-۹٠-٩]/g, (w) => {
    if (persianDigits.includes(w)) {
      return englishDigits[persianDigits.indexOf(w)];
    } else if (arabicDigits.includes(w)) {
      return englishDigits[arabicDigits.indexOf(w)];
    }
    return w;
  });
};

export default convertToEnglishDigits;
