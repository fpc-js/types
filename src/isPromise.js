import { isFunction } from './isFunction';

export const isPromise = val =>
  val != null && isFunction(val.then);
