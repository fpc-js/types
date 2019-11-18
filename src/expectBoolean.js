import { expect } from './internal';
import { isBoolean } from './isBoolean';

export const expectBoolean = val =>
  expect(val, isBoolean, 'boolean');
