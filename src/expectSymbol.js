import { expected } from './internals/expected';
import { symbolType } from './internals/typeLabels';
import { isSymbol } from './isSymbol';

export const expectSymbol = val => (
  isSymbol(val) ? val : expected(symbolType, val)
);
