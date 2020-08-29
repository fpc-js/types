import { symbolType } from './internals/typeLabels';

export const isSymbol = val =>
  typeof val === symbolType;
