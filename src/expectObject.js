import { expect } from './internals';
import { isObject } from './isObject';

export const expectObject = val =>
  expect(val, isObject, 'object');
