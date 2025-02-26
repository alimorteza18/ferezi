function convertToISOWithOffset(dateString, timeZoneOffset = "+03:30") {
  // Split the input date string into date and time components
  const [datePart, timePart] = dateString.split(" ");

  // Further split the date and time to work with individual components
  const [year, month, day] = datePart.split("/");
  const [hour, minute] = timePart.split(":");

  // Create a new formatted ISO string with the provided timezone offset
  const isoFormattedDate = `${year}-${month}-${day}T${hour}:${minute}:00${timeZoneOffset}`;

  return isoFormattedDate;
}

export default convertToISOWithOffset;
