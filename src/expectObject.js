import { expected } from './internals/expected';
import { objectType } from './internals/typeLabels';
import { isObject } from './isObject';

export const expectObject = val => (
  isObject(val) ? val : expected(objectType, val)
);
