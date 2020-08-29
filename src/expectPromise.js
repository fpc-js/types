import { expected } from './internals/expected';
import { promiseType } from './internals/typeLabels';
import { isPromise } from './isPromise';

export const expectPromise = val => (
  isPromise(val) ? val : expected(promiseType, val)
);
