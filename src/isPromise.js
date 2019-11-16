import { functionType } from './internals';

export const isPromise = val =>
  val != null && typeof val.then === functionType;
