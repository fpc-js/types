import { expected, objectType } from './internals';
import { isObject } from './isObject';

export const expectObject = val => (
  isObject(val) ? val : expected(objectType, val)
);
