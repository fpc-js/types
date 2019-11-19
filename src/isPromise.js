import { isFunction } from './isFunction';

export const isPromise = val =>
  isFunction(val == null || val.then);
