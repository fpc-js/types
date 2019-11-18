import { expect } from './internal';
import { isIterable } from './isIterable';

export const expectIterable = val =>
  expect(val, isIterable, 'iterable');
