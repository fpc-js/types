import { expected } from './internals/expected';
import { arrayType } from './internals/typeLabels';
import { isArray } from './isArray';

export const expectArray = val => (
  isArray(val) ? val : expected(arrayType, val)
);
