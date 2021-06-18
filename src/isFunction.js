import { functionType } from './internals/typeLabels.js';

export const isFunction = val =>
  typeof val === functionType;
