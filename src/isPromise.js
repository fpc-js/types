import { functionType } from './internals/typeLabels';

export const isPromise = val =>
  val != null && typeof val.then === functionType;
