import { expected } from './internals/expected.js';
import { objectType } from './internals/typeLabels.js';
import { isObject } from './isObject.js';

export const expectObject = val => (
  isObject(val) ? val : expected(objectType, val)
);
