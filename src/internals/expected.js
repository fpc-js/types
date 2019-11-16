import { typeOf } from '../typeOf';

export const expected = (type, val) => {
  throw new TypeError(`Expected ${type}, got ${typeOf(val)}`);
};
