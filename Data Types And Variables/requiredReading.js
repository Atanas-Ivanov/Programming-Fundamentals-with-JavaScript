function requiredReading(pages, timeNeededToReed, daysRequired) {
  let totalTime = pages / timeNeededToReed;
  let hoursPerDay = totalTime / daysRequired;
  console.log(hoursPerDay);
}
requiredReading(212, 20, 2);
