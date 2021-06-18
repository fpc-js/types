import { expected } from './internals/expected.js';
import { symbolType } from './internals/typeLabels.js';
import { isSymbol } from './isSymbol.js';

export const expectSymbol = val => (
  isSymbol(val) ? val : expected(symbolType, val)
);
