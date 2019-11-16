import { isFunction } from './isFunction';

/* global Symbol */

export const isIterable = val =>
  isFunction(val == null || val[Symbol.iterator]);
