import { expected, promiseType } from './internals';
import { isPromise } from './isPromise';

export const expectPromise = val => (
  isPromise(val) ? val : expected(promiseType, val)
);
