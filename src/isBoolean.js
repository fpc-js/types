import { booleanType } from './internals';

export const isBoolean = val =>
  typeof val === booleanType;
