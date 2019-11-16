import { expected, stringType } from './internals';
import { isString } from './isString';

export const expectString = val => (
  isString(val) ? val : expected(stringType, val)
);
