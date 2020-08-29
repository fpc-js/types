import { expected } from './internals/expected';
import { stringType } from './internals/typeLabels';
import { isString } from './isString';

export const expectString = val => (
  isString(val) ? val : expected(stringType, val)
);
