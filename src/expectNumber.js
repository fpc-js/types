import { expected } from './internals/expected.js';
import { numberType } from './internals/typeLabels.js';
import { isNumber } from './isNumber.js';

export const expectNumber = val => (
  isNumber(val) ? val : expected(numberType, val)
);
