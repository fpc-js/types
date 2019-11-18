import { expect } from './internal';
import { isString } from './isString';

export const expectString = val =>
  expect(val, isString, 'string');
