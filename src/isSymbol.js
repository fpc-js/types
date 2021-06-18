import { symbolType } from './internals/typeLabels.js';

export const isSymbol = val =>
  typeof val === symbolType;
