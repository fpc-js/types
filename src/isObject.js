import { typeOf } from './typeOf';

export const isObject = val =>
  typeOf(val) === 'object';
