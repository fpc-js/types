import { expectNumber as expNum } from '../src/index.js';
import * as test from '../test-utils.js';

test._nan(expNum, new Error('Expected number, got NaN'));
test._plusInfinity(expNum, new Error('Expected number, got infinity'));
test._minusInfinity(expNum, new Error('Expected number, got infinity'));
test._undefined(expNum, new Error('Expected number, got undefined'));
test._null(expNum, new Error('Expected number, got null'));
test._true(expNum, new Error('Expected number, got boolean'));
test._false(expNum, new Error('Expected number, got boolean'));
test._function(expNum, new Error('Expected number, got function'));
test._number(expNum, 'itself');
test._object(expNum, new Error('Expected number, got object'));
test._string(expNum, new Error('Expected number, got string'));
test._symbol(expNum, new Error('Expected number, got symbol'));
test._integer(expNum, 'itself');
test._array(expNum, new Error('Expected number, got object'));
test._typedArray(expNum, new Error('Expected number, got object'));
test._map(expNum, new Error('Expected number, got object'));
test._set(expNum, new Error('Expected number, got object'));
test._promise(expNum, new Error('Expected number, got object'));
