import { stringType } from './internals/typeLabels';

export const isString = val =>
  typeof val === stringType;
