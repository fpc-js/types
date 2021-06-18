import { numberType } from './internals/typeLabels.js';

export const isNumber = val =>
  typeof val === numberType && isFinite(val);
