import { expect } from './internal/expect';
import { isIterable } from './isIterable';

export const expectIterable = val =>
  expect(val, isIterable, 'iterable');
