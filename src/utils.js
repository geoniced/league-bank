import dayjs from "dayjs";
import {ALLOWED_DATE_RANGE} from "./const";

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const formatDateDashed = (date) => dayjs(date).format(`YYYY-MM-DD`);
export const formatDateDotted = (date) => dayjs(date).format(`D.M.YYYY`);

export const roundToFourDecimals = (num) => Math.round(num * 10000) / 10000;

export const getSevenDaysBack = () => {
  const today = dayjs().startOf(`day`);
  return formatDateDotted(today.subtract(ALLOWED_DATE_RANGE, `day`));
};

