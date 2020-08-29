import { expected } from './internals/expected';
import { integerType } from './internals/typeLabels';
import { isInteger } from './isInteger';

export const expectInteger = val => (
  isInteger(val) ? val : expected(integerType, val)
);
