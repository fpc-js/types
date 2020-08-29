import { expected } from './internals/expected';
import { booleanType } from './internals/typeLabels';
import { isBoolean } from './isBoolean';

export const expectBoolean = val => (
  isBoolean(val) ? val : expected(booleanType, val)
);
