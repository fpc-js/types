import { expect } from './internal/expect';
import { isNumber } from './isNumber';

export const expectNumber = val =>
  expect(val, isNumber, 'number');
