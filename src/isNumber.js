import { numberType } from './internals';

export const isNumber = val =>
  typeof val === numberType && isFinite(val);
