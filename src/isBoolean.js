import { booleanType } from './internals/typeLabels';

export const isBoolean = val =>
  typeof val === booleanType;
