import { stringType } from './internals';

export const isString = val =>
  typeof val === stringType;
