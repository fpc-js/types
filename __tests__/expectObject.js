import { expectObject as expObj } from '../src';
import * as test from '../test-utils';

test._nan(expObj, new TypeError('Expected object, got NaN'));
test._plusInfinity(expObj, new TypeError('Expected object, got infinity'));
test._minusInfinity(expObj, new TypeError('Expected object, got infinity'));
test._undefined(expObj, new TypeError('Expected object, got undefined'));
test._null(expObj, new TypeError('Expected object, got null'));
test._true(expObj, new TypeError('Expected object, got boolean'));
test._false(expObj, new TypeError('Expected object, got boolean'));
test._function(expObj, new TypeError('Expected object, got function'));
test._number(expObj, new TypeError('Expected object, got number'));
test._object(expObj, 'itself');
test._string(expObj, new TypeError('Expected object, got string'));
test._symbol(expObj, new TypeError('Expected object, got symbol'));
test._integer(expObj, new TypeError('Expected object, got number'));
test._array(expObj, 'itself');
test._typedArray(expObj, 'itself');
test._map(expObj, 'itself');
test._set(expObj, 'itself');
