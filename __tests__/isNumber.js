import { isNumber } from '../src/index.js';
import * as test from '../test-utils.js';

test._nan(isNumber, false);
test._plusInfinity(isNumber, false);
test._minusInfinity(isNumber, false);
test._undefined(isNumber, false);
test._null(isNumber, false);
test._true(isNumber, false);
test._false(isNumber, false);
test._function(isNumber, false);
test._number(isNumber, true);
test._object(isNumber, false);
test._string(isNumber, false);
test._symbol(isNumber, false);
test._integer(isNumber, true);
test._array(isNumber, false);
test._typedArray(isNumber, false);
test._map(isNumber, false);
test._set(isNumber, false);
test._promise(isNumber, false);
