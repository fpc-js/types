import { expect } from './internals';
import { isBoolean } from './isBoolean';

export const expectBoolean = val =>
  expect(val, isBoolean, 'boolean');
