import { expect } from './internal';
import { isObject } from './isObject';

export const expectObject = val =>
  expect(val, isObject, 'object');
