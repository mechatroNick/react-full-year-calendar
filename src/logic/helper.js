import * as moment from "moment";

export const getCurrentYear = () => {
  const check = moment();
  return check.format("YYYY");
};

export const getCurrentMonth = () => {
  const check = moment();
  return check.format("MMMM");
};

export const getCurrentDateMonthYear = () => {
  const check = moment();
  return check.format("DD-MM-YYYY");
};
