import { functionType } from './internals/typeLabels';

/* global Symbol */

export const isIterable = val =>
  val != null && typeof val[Symbol.iterator] === functionType;
