function convertToISOWithOffset(dateString) {
  // Split the input date string into date and time components
  const [datePart] = dateString.split(" ");

  // Further split the date and time to work with individual components
  const [year, month, day] = datePart.split("/");
  // const [hour, minute] = timePart.split(":");

  // Create a new formatted ISO string with the provided timezone offset
  const isoFormattedDate = `${year}-${month}-${day}`;

  return isoFormattedDate;
}

export default convertToISOWithOffset;
