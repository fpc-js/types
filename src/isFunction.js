import { functionType } from './internals/typeLabels';

export const isFunction = val =>
  typeof val === functionType;
