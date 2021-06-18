import { expected } from './internals/expected.js';
import { iterableType } from './internals/typeLabels.js';
import { isIterable } from './isIterable.js';

export const expectIterable = val => (
  isIterable(val) ? val : expected(iterableType, val)
);
