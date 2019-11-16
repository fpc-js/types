import { expect } from './internal/expect';
import { isSymbol } from './isSymbol';

export const expectSymbol = val =>
  expect(val, isSymbol, 'symbol');
