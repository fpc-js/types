import { expect } from './internal';
import { isNumber } from './isNumber';

export const expectNumber = val =>
  expect(val, isNumber, 'number');
