import { booleanType } from './internals/typeLabels.js';

export const isBoolean = val =>
  typeof val === booleanType;
