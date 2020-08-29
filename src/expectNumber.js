import { expected } from './internals/expected';
import { numberType } from './internals/typeLabels';
import { isNumber } from './isNumber';

export const expectNumber = val => (
  isNumber(val) ? val : expected(numberType, val)
);
