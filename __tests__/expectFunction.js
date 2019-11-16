import { expectFunction as expFn } from '../src';
import * as test from '../test-utils';

test._nan(expFn, new Error('Expected function, got NaN'));
test._plusInfinity(expFn, new Error('Expected function, got infinity'));
test._minusInfinity(expFn, new Error('Expected function, got infinity'));
test._undefined(expFn, new Error('Expected function, got undefined'));
test._null(expFn, new Error('Expected function, got null'));
test._true(expFn, new Error('Expected function, got boolean'));
test._false(expFn, new Error('Expected function, got boolean'));
test._function(expFn, 'itself');
test._number(expFn, new Error('Expected function, got number'));
test._object(expFn, new Error('Expected function, got object'));
test._string(expFn, new Error('Expected function, got string'));
test._symbol(expFn, new Error('Expected function, got symbol'));
test._integer(expFn, new Error('Expected function, got number'));
test._array(expFn, new Error('Expected function, got object'));
test._typedArray(expFn, new Error('Expected function, got object'));
test._map(expFn, new Error('Expected function, got object'));
test._set(expFn, new Error('Expected function, got object'));
test._promise(expFn, new Error('Expected function, got object'));
