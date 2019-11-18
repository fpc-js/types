import { expect } from './internal';
import { isArray } from './isArray';

export const expectArray = val =>
  expect(val, isArray, 'array');
