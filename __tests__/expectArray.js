import { expectArray as expArr } from '../src';
import * as test from '../test-utils';

test._nan(expArr, new Error('Expected array, got NaN'));
test._plusInfinity(expArr, new Error('Expected array, got infinity'));
test._minusInfinity(expArr, new Error('Expected array, got infinity'));
test._undefined(expArr, new Error('Expected array, got undefined'));
test._null(expArr, new Error('Expected array, got null'));
test._true(expArr, new Error('Expected array, got boolean'));
test._false(expArr, new Error('Expected array, got boolean'));
test._function(expArr, new Error('Expected array, got function'));
test._number(expArr, new Error('Expected array, got number'));
test._object(expArr, new Error('Expected array, got object'));
test._string(expArr, new Error('Expected array, got string'));
test._symbol(expArr, new Error('Expected array, got symbol'));
test._integer(expArr, new Error('Expected array, got number'));
test._array(expArr, 'itself');
test._typedArray(expArr, new Error('Expected array, got object'));
test._map(expArr, new Error('Expected array, got object'));
test._set(expArr, new Error('Expected array, got object'));
test._promise(expArr, new Error('Expected array, got object'));
