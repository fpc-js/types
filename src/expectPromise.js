import { expect } from './internals';
import { isPromise } from './isPromise';

export const expectPromise = val =>
  expect(val, isPromise, 'promise');
