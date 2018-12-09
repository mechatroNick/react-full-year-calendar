import * as moment from "moment";

export const getCurrentYear = () => {
  const check = moment();
  return check.format("YYYY");
};

export const getCurrentMonth = () => {
  const check = moment();
  return check.format("MMMM");
};
