import { expected } from './internals/expected.js';
import { stringType } from './internals/typeLabels.js';
import { isString } from './isString.js';

export const expectString = val => (
  isString(val) ? val : expected(stringType, val)
);
