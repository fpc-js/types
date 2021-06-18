import { functionType } from './internals/typeLabels.js';

export const isPromise = val =>
  val != null && typeof val.then === functionType;
