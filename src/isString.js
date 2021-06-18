import { stringType } from './internals/typeLabels.js';

export const isString = val =>
  typeof val === stringType;
