import { expect } from './internal/expect';
import { isBoolean } from './isBoolean';

export const expectBoolean = val =>
  expect(val, isBoolean, 'boolean');
