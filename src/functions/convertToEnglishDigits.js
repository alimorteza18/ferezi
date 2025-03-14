const convertToEnglishDigits = (input) => {
  if (!input || typeof input !== "string") return ""; // Prevents errors if input is undefined/null
  
  // Arabic digits from ٠ to ٩ (Unicode range \u0660 to \u0669)
  const arabicDigits = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
  const englishDigits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  
  // Replace Arabic digits with corresponding English digits
  return input.replace(/[\u0660-\u0669]/g, (digit) => {
    const index = arabicDigits.indexOf(digit); // Find the Arabic digit's index
    return englishDigits[index]; // Return the corresponding English digit
  });
};

export default convertToEnglishDigits;
