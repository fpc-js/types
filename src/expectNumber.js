import { expected, numberType } from './internals';
import { isNumber } from './isNumber';

export const expectNumber = val => (
  isNumber(val) ? val : expected(numberType, val)
);
