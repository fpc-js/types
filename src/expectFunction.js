import { expected, functionType } from './internals';
import { isFunction } from './isFunction';

export const expectFunction = val => (
  isFunction(val) ? val : expected(functionType, val)
);
