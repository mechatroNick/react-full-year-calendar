export const TYPE_OF_EVENTS = {
  TODAY_DATE: "TODAY_DATE",
  NOTHING_SPECIAL: "NOTHING_SPECIAL",
  HOLIDAY: "HOLIDAY",
  BIRTHDAY: "BIRTHDAY",
  BUSY: "BUSY",
  ANNIVERSARY: "ANNIVERSARY"
};

export const eventColors = {
  dayBoxBg: {
    [TYPE_OF_EVENTS.NOTHING_SPECIAL]: "lightGray",
    [TYPE_OF_EVENTS.HOLIDAY]: "green",
    [TYPE_OF_EVENTS.BUSY]: "red",
    [TYPE_OF_EVENTS.BIRTHDAY]: "orange",
    [TYPE_OF_EVENTS.ANNIVERSARY]: "purple"
  },
  color: {
    [TYPE_OF_EVENTS.NOTHING_SPECIAL]: "black",
    [TYPE_OF_EVENTS.HOLIDAY]: "white",
    [TYPE_OF_EVENTS.BUSY]: "white",
    [TYPE_OF_EVENTS.BIRTHDAY]: "white",
    [TYPE_OF_EVENTS.ANNIVERSARY]: "white"
  },
  toggleColor: {
    [TYPE_OF_EVENTS.NOTHING_SPECIAL]: "white",
    [TYPE_OF_EVENTS.HOLIDAY]: "white",
    [TYPE_OF_EVENTS.BUSY]: "white",
    [TYPE_OF_EVENTS.BIRTHDAY]: "white",
    [TYPE_OF_EVENTS.ANNIVERSARY]: "white"
  },
  unToggledColor: {
    [TYPE_OF_EVENTS.NOTHING_SPECIAL]: "black",
    [TYPE_OF_EVENTS.HOLIDAY]: "black",
    [TYPE_OF_EVENTS.BUSY]: "black",
    [TYPE_OF_EVENTS.BIRTHDAY]: "black",
    [TYPE_OF_EVENTS.ANNIVERSARY]: "black"
  },
  toggleBg: {
    [TYPE_OF_EVENTS.NOTHING_SPECIAL]: "darkGray",
    [TYPE_OF_EVENTS.HOLIDAY]: "darkGreen",
    [TYPE_OF_EVENTS.BUSY]: "darkRed",
    [TYPE_OF_EVENTS.BIRTHDAY]: "darkOrange",
    [TYPE_OF_EVENTS.ANNIVERSARY]: "darkPurple"
  },
  unToggledBg:{
    [TYPE_OF_EVENTS.NOTHING_SPECIAL]: "borderGray",
    [TYPE_OF_EVENTS.HOLIDAY]: "lightGreen",
    [TYPE_OF_EVENTS.BUSY]: "lightRed",
    [TYPE_OF_EVENTS.BIRTHDAY]: "lightOrange",
    [TYPE_OF_EVENTS.ANNIVERSARY]: "lightPurple"
  }
};

export const TYPE_OF_CHANGE_YEAR = {
  TO_PREVIOUS_YEAR: "TO_PREVIOUS_YEAR",
  TO_NEXT_YEAR: "TO_NEXT_YEAR"
};

export const DAYS_IN_WEEK = {
  MONDAY: "MONDAY",
  TUESDAY: "TUESDAY",
  WEDNESDAY: "WEDNESDAY",
  THURSDAY: "THURSDAY",
  FRIDAY: "FRIDAY",
  SATURDAY: "SATURDAY",
  SUNDAY: "SUNDAY"
};

export const MONTHS = {
  JANUARY: "JANUARY",
  FEBRUARY: "FEBRUARY",
  MARCH: "MARCH",
  APRIL: "APRIL",
  MAY: "MAY",
  JUNE: "JUNE",
  JULY: "JULY",
  AUGUST: "AUGUST",
  SEPTEMBER: "SEPTEMBER",
  OCTOBER: "OCTOBER",
  NOVEMBER: "NOVEMBER",
  DECEMBER: "DECEMBER"
};

export const MONTHS_LIST = [
  "JANUARY",
  "FEBRUARY",
  "MARCH",
  "APRIL",
  "MAY",
  "JUNE",
  "JULY",
  "AUGUST",
  "SEPTEMBER",
  "OCTOBER",
  "NOVEMBER",
  "DECEMBER"
];
