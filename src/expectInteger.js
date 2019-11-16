import { expect } from './internal/expect';
import { isInteger } from './isInteger';

export const expectInteger = val =>
  expect(val, isInteger, 'integer');
