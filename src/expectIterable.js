import { expect } from './internals';
import { isIterable } from './isIterable';

export const expectIterable = val =>
  expect(val, isIterable, 'iterable');