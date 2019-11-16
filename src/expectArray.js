import { expected, arrayType } from './internals';
import { isArray } from './isArray';

export const expectArray = val => (
  isArray(val) ? val : expected(arrayType, val)
);
