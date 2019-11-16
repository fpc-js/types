import { expect } from './internal/expect';
import { isArray } from './isArray';

export const expectArray = val =>
  expect(val, isArray, 'array');
