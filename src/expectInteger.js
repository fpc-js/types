import { expect } from './internal';
import { isInteger } from './isInteger';

export const expectInteger = val =>
  expect(val, isInteger, 'integer');
