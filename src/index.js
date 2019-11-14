/* global Symbol */

export const typeOf = val => (
  /* eslint-disable indent, multiline-ternary, no-negated-condition */
  val === null ? 'null'
  : typeof val !== 'number' ? typeof val
  : isNaN(val) ? 'NaN'
  : isFinite(val) ? 'number'
  : 'infinity'
);

const expect = (val, validator, expected) => {
  if (validator(val)) {
    return val;
  }

  throw new TypeError(`Expected ${expected}, got ${typeOf(val)}`);
};

export const isBoolean = val =>
  typeof val === 'boolean';

export const expectBoolean = val =>
  expect(val, isBoolean, 'boolean');

export const isFunction = val =>
  typeof val === 'function';

export const expectFunction = val =>
  expect(val, isFunction, 'function');

export const isNumber = val =>
  typeOf(val) === 'number';

export const expectNumber = val =>
  expect(val, isNumber, 'number');

export const isObject = val =>
  typeOf(val) === 'object';

export const expectObject = val =>
  expect(val, isObject, 'object');

export const isString = val =>
  typeof val === 'string';

export const expectString = val =>
  expect(val, isString, 'string');

export const isSymbol = val =>
  typeof val === 'symbol';

export const expectSymbol = val =>
  expect(val, isSymbol, 'symbol');

export const isArray = val =>
  Array.isArray(val);

export const expectArray = val =>
  expect(val, isArray, 'array');

export const isInteger = val =>
  isNumber(val) && Math.floor(val) === val;

export const expectInteger = val =>
  expect(val, isInteger, 'integer');

export const isIterable = val =>
  isFunction(val == null || val[Symbol.iterator]);

export const expectIterable = val =>
  expect(val, isIterable, 'iterable');
