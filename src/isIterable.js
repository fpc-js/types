import { functionType } from './internals/typeLabels.js';

/* global Symbol */

export const isIterable = val =>
  val != null && typeof val[Symbol.iterator] === functionType;
