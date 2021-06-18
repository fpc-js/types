import { expected } from './internals/expected.js';
import { arrayType } from './internals/typeLabels.js';
import { isArray } from './isArray.js';

export const expectArray = val => (
  isArray(val) ? val : expected(arrayType, val)
);
