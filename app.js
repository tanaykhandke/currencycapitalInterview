
function calculateTotalCost(startDate, numberOfDays) {

  let totalCost=0;
//error handling
if (startDate === undefined) {
  throw 'No arguments passed in the function,two arguments required';
}
  if (typeof startDate !== "string") {
    throw "startDate not a string";
  }
  if (!numberOfDays) {
    throw 'argument numberOfDays missing';
  }
  if (typeof numberOfDays !== "number") {
    throw "numberOfDays not a number";
  }

  if (numberOfDays < 0) {
    throw 'numberOfDays should be a positive number'
  }
  if (numberOfDays > 365) {
    throw 'numberOfDays should be less than 365'
  }
  const startDateObject = new Date(startDate);
  if (startDateObject == 'Invalid Date') {
    throw 'Invalid Date';
}
  for(i=0; i<numberOfDays; i++) {
    const day = startDateObject.getDay();
    const date = startDateObject.getDate();
    //buys only on weekday
    if (day > 0 && day < 6) {
      if (date <= 7) {
        totalCost += 0.05;
      }
      else if (date <= 14) {
        totalCost += 0.1;
      }
      else if (date <= 21) {
        totalCost += 0.15;
      }
      else if (date <= 28) {
        totalCost += 0.2;
      }
      else {
        totalCost += 0.25;
      }
    }
    startDateObject.setDate(date + 1);
  }
  return Number(totalCost.toFixed(2));
}
module.exports = { calculateTotalCost };
