import { symbolType } from './internals';

export const isSymbol = val =>
  typeof val === symbolType;
