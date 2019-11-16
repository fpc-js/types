import { isNumber } from './isNumber';

export const isInteger = val =>
  isNumber(val) && Math.floor(val) === val;
