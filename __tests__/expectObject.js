import { expectObject as expObj } from '../src/index.js';
import * as test from '../test-utils.js';

test._nan(expObj, new Error('Expected object, got NaN'));
test._plusInfinity(expObj, new Error('Expected object, got infinity'));
test._minusInfinity(expObj, new Error('Expected object, got infinity'));
test._undefined(expObj, new Error('Expected object, got undefined'));
test._null(expObj, new Error('Expected object, got null'));
test._true(expObj, new Error('Expected object, got boolean'));
test._false(expObj, new Error('Expected object, got boolean'));
test._function(expObj, 'itself');
test._number(expObj, new Error('Expected object, got number'));
test._object(expObj, 'itself');
test._string(expObj, new Error('Expected object, got string'));
test._symbol(expObj, new Error('Expected object, got symbol'));
test._integer(expObj, new Error('Expected object, got number'));
test._array(expObj, 'itself');
test._typedArray(expObj, 'itself');
test._map(expObj, 'itself');
test._set(expObj, 'itself');
test._promise(expObj, 'itself');
