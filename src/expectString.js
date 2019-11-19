import { expect } from './internals';
import { isString } from './isString';

export const expectString = val =>
  expect(val, isString, 'string');
