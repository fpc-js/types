import { expect } from './internal';
import { isFunction } from './isFunction';

export const expectFunction = val =>
  expect(val, isFunction, 'function');
