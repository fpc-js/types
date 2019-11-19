import { expect } from './internals';
import { isSymbol } from './isSymbol';

export const expectSymbol = val =>
  expect(val, isSymbol, 'symbol');
