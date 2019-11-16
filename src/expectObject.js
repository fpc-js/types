import { expect } from './internal/expect';
import { isObject } from './isObject';

export const expectObject = val =>
  expect(val, isObject, 'object');
