import { expected, integerType } from './internals';
import { isInteger } from './isInteger';

export const expectInteger = val => (
  isInteger(val) ? val : expected(integerType, val)
);
