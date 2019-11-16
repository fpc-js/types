import { expected, symbolType } from './internals';
import { isSymbol } from './isSymbol';

export const expectSymbol = val => (
  isSymbol(val) ? val : expected(symbolType, val)
);
