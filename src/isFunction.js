import { functionType } from './internals';

export const isFunction = val =>
  typeof val === functionType;
