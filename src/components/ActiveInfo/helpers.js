import moment from "moment";

export const iftttDate = iftttTimestamp =>
  moment(iftttTimestamp, "MMMM DD, YYYY at LT"); // January 11, 2019 at 03:27PM

export const iftttDateOrUndefined = iftttTimestamp => {
  const parsedDate = iftttDate(iftttTimestamp);
  return parsedDate.isValid() ? parsedDate : undefined;
};
