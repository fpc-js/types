import { functionType } from './internals';

/* global Symbol */

export const isIterable = val =>
  val != null && typeof val[Symbol.iterator] === functionType;
