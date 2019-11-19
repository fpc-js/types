import { expect } from './internals';
import { isArray } from './isArray';

export const expectArray = val =>
  expect(val, isArray, 'array');
