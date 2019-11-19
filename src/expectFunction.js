import { expect } from './internals';
import { isFunction } from './isFunction';

export const expectFunction = val =>
  expect(val, isFunction, 'function');
