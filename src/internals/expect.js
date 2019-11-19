import { typeOf } from '../typeOf';

export const expect = (val, validator, expected) => {
  if (validator(val)) {
    return val;
  }

  throw new TypeError(`Expected ${expected}, got ${typeOf(val)}`);
};
