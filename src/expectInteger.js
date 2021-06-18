import { expected } from './internals/expected.js';
import { integerType } from './internals/typeLabels.js';
import { isInteger } from './isInteger.js';

export const expectInteger = val => (
  isInteger(val) ? val : expected(integerType, val)
);
