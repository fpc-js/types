import { isFunction } from './isFunction';

/* global Symbol */

export const isIterable = val =>
  val != null && isFunction(val[Symbol.iterator]);
