export const typeOf = val => (
  /* eslint-disable indent, multiline-ternary, no-negated-condition */
  val === null ? 'null'
  : typeof val !== 'number' ? typeof val
  : isNaN(val) ? 'NaN'
  : isFinite(val) ? 'number'
  : 'infinity'
);
