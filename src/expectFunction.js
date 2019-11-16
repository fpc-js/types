import { expect } from './internal/expect';
import { isFunction } from './isFunction';

export const expectFunction = val =>
  expect(val, isFunction, 'function');
