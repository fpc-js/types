import { typeOf } from './typeOf';
import { isFunction } from './isFunction';

export const isObject = val =>
  typeOf(val) === 'object' || isFunction(val);
