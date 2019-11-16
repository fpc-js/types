import { numberType } from './internals';

export const typeOf = val => (
  /* eslint-disable indent, multiline-ternary, no-negated-condition */
  val === null ? 'null'
  : typeof val !== numberType ? typeof val
  : isNaN(val) ? 'NaN'
  : isFinite(val) ? numberType
  : 'infinity'
);
