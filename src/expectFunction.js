import { expected } from './internals/expected.js';
import { functionType } from './internals/typeLabels.js';
import { isFunction } from './isFunction.js';

export const expectFunction = val => (
  isFunction(val) ? val : expected(functionType, val)
);
