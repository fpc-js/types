import { typeOf } from '../typeOf.js';

export const expected = (type, val) => {
  throw new TypeError(`Expected ${type}, got ${typeOf(val)}`);
};
