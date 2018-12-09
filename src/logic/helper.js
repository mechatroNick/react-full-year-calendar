import * as moment from "moment";

export const getCurrentYear = () => {
  const check = moment();
  return check.format("YYYY");
};

export const getCurrentMonth = () => {
  const check = moment();
  return check.format("MM");
};

export const getCurrentDateMonthYear = () => {
  const check = moment();
  return check.format("YYYY-MM-DD");
};

export const getNumberOfDaysInMonth = (
  year = getCurrentYear(),
  month = getCurrentMonth()
) => {
  return moment(`${year}-${month}`, "YYYY-MM").daysInMonth();
};

export const getDaysInMonthsInList = (year = getCurrentYear()) => {
  const months = [...Array(12).keys()];
  const daysInMonths = [];
  months.forEach(month => {
    let correctMonth = convertMonthToNiceMonthNumberFormat(month + 1);
    daysInMonths.push(getNumberOfDaysInMonth(year, correctMonth));
  });
  return daysInMonths;
};

export const convertMonthToNiceMonthNumberFormat = (
  month = getCurrentMonth()
) => {
  if (Number.isInteger(month)) {
    if (month < 10 && month > 0) {
      return "0" + month;
    } else if (month < 13) {
      return "" + month;
    }
    throw new Error("Month is number but out of range");
  } else if (String.isString(month)) {
    if (month.length === 1) {
      return "0" + month;
    } else if (month === 2) {
      return month;
    }
    throw new Error("Month is string but incorrect length");
  } else {
    throw new Error("Month is not string or number");
  }
};

export const convertDayToNiceMonthNumberFormat = (
  month = getCurrentMonth()
) => {
  if (Number.isInteger(month)) {
    if (month < 10 && month > 0) {
      return "0" + month;
    } else if (month < 32) {
      return "" + month;
    }
    throw new Error("Day is number but out of range");
  } else if (String.isString(month)) {
    if (month.length === 1) {
      return "0" + month;
    } else if (month === 2) {
      return month;
    }
    throw new Error("Day is string but incorrect length");
  } else {
    throw new Error("Day is not string or number");
  }
};

export const getDaysOfMonthFullFormatInList = (
  year = getCurrentYear(),
  month = getCurrentMonth(),
  numberOfDaysInThatMonth = getNumberOfDaysInMonth(year, month)
) => {
  let daysInMonthFullFormat = [];
  const days = [...Array(numberOfDaysInThatMonth).keys()];
  days.forEach(day => {
    let correctDay = convertDayToNiceMonthNumberFormat(day + 1);
    daysInMonthFullFormat.push(`${year}-${month}-${correctDay}`);
  });
  return daysInMonthFullFormat;
};

export const getDaysOfYearFullFormatInLists = (year = getCurrentYear()) => {
  const daysInMonths = getDaysInMonthsInList(year);
  let daysInMonthsFullFormat = [];
  let daysInMonthFullFormat = [];
  daysInMonths.forEach((numOfDays, index) => {
    let correctMonths = convertMonthToNiceMonthNumberFormat(index + 1);
    let numberOfDaysInThatMonth = daysInMonths[index];
    daysInMonthFullFormat = getDaysOfMonthFullFormatInList(
      year,
      correctMonths,
      numberOfDaysInThatMonth
    );
    daysInMonthsFullFormat.push(daysInMonthFullFormat);
  });
  return daysInMonthsFullFormat;
};

