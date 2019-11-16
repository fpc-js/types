import { typeOf } from './typeOf';

export const isNumber = val =>
  typeOf(val) === 'number';
