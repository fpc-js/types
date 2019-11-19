import { expect } from './internals';
import { isNumber } from './isNumber';

export const expectNumber = val =>
  expect(val, isNumber, 'number');
