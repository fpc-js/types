import { expected } from './internals/expected.js';
import { booleanType } from './internals/typeLabels.js';
import { isBoolean } from './isBoolean.js';

export const expectBoolean = val => (
  isBoolean(val) ? val : expected(booleanType, val)
);
