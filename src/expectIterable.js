import { expected } from './internals/expected';
import { iterableType } from './internals/typeLabels';
import { isIterable } from './isIterable';

export const expectIterable = val => (
  isIterable(val) ? val : expected(iterableType, val)
);
