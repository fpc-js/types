import { expected } from './internals/expected';
import { functionType } from './internals/typeLabels';
import { isFunction } from './isFunction';

export const expectFunction = val => (
  isFunction(val) ? val : expected(functionType, val)
);
