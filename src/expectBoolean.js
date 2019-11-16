import { expected, booleanType } from './internals';
import { isBoolean } from './isBoolean';

export const expectBoolean = val => (
  isBoolean(val) ? val : expected(booleanType, val)
);
