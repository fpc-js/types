import { expect } from './internal/expect';
import { isString } from './isString';

export const expectString = val =>
  expect(val, isString, 'string');
