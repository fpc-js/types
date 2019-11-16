import { objectType, functionType } from './internals';

/* eslint-disable no-mixed-operators */

export const isObject = val =>
  val != null && typeof val === objectType || typeof val === functionType;
