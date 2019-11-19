import { expect } from './internals';
import { isInteger } from './isInteger';

export const expectInteger = val =>
  expect(val, isInteger, 'integer');
