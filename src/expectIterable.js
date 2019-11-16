import { expected, iterableType } from './internals';
import { isIterable } from './isIterable';

export const expectIterable = val => (
  isIterable(val) ? val : expected(iterableType, val)
);
