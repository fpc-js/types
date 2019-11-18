import { expect } from './internal';
import { isSymbol } from './isSymbol';

export const expectSymbol = val =>
  expect(val, isSymbol, 'symbol');
