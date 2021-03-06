import { expectString as expStr } from '../src/index.js';
import * as test from '../test-utils.js';

test._nan(expStr, new Error('Expected string, got NaN'));
test._plusInfinity(expStr, new Error('Expected string, got infinity'));
test._minusInfinity(expStr, new Error('Expected string, got infinity'));
test._undefined(expStr, new Error('Expected string, got undefined'));
test._null(expStr, new Error('Expected string, got null'));
test._true(expStr, new Error('Expected string, got boolean'));
test._false(expStr, new Error('Expected string, got boolean'));
test._function(expStr, new Error('Expected string, got function'));
test._number(expStr, new Error('Expected string, got number'));
test._object(expStr, new Error('Expected string, got object'));
test._string(expStr, 'itself');
test._symbol(expStr, new Error('Expected string, got symbol'));
test._integer(expStr, new Error('Expected string, got number'));
test._array(expStr, new Error('Expected string, got object'));
test._typedArray(expStr, new Error('Expected string, got object'));
test._map(expStr, new Error('Expected string, got object'));
test._set(expStr, new Error('Expected string, got object'));
test._promise(expStr, new Error('Expected string, got object'));
