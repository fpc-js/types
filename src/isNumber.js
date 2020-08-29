import { numberType } from './internals/typeLabels';

export const isNumber = val =>
  typeof val === numberType && isFinite(val);
