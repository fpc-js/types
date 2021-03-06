import { expectPromise as expProm } from '../src/index.js';
import * as test from '../test-utils.js';

test._nan(expProm, new Error('Expected promise, got NaN'));
test._plusInfinity(expProm, new Error('Expected promise, got infinity'));
test._minusInfinity(expProm, new Error('Expected promise, got infinity'));
test._undefined(expProm, new Error('Expected promise, got undefined'));
test._null(expProm, new Error('Expected promise, got null'));
test._true(expProm, new Error('Expected promise, got boolean'));
test._false(expProm, new Error('Expected promise, got boolean'));
test._function(expProm, new Error('Expected promise, got function'));
test._number(expProm, new Error('Expected promise, got number'));
test._object(expProm, new Error('Expected promise, got object'));
test._string(expProm, new Error('Expected promise, got string'));
test._symbol(expProm, new Error('Expected promise, got symbol'));
test._integer(expProm, new Error('Expected promise, got number'));
test._array(expProm, new Error('Expected promise, got object'));
test._typedArray(expProm, new Error('Expected promise, got object'));
test._map(expProm, new Error('Expected promise, got object'));
test._set(expProm, new Error('Expected promise, got object'));
test._promise(expProm, 'itself');
