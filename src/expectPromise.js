import { expected } from './internals/expected.js';
import { promiseType } from './internals/typeLabels.js';
import { isPromise } from './isPromise.js';

export const expectPromise = val => (
  isPromise(val) ? val : expected(promiseType, val)
);
