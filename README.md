# @fpc/types

<div align="center">
  <a href="https://travis-ci.org/fpc-js/types" target="_blank">
    <img src="https://travis-ci.org/fpc-js/types.svg?branch=master" alt="Build Status">
  </a>
  <a href="https://snyk.io/test/github/fpc-js/types?targetFile=package.json">
    <img src="https://snyk.io/test/github/fpc-js/types/badge.svg?targetFile=package.json" alt="Known Vulnerabilities" data-canonical-src="https://snyk.io/test/github/fpc-js/types?targetFile=package.json" style="max-width:100%;">
  </a>
  <a href="https://coveralls.io/github/fpc-js/types?branch=master" target="_blank">
    <img src="https://coveralls.io/repos/github/fpc-js/types/badge.svg?branch=master" alt="Coverage Status">
  </a>
  <a href="https://github.com/semantic-release/semantic-release" target="_blank">
    <img src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg" alt="semantic-release">
  </a>
</div>

This package exposes a few utilities for dynamic type checking.
The aim is to provide a better developer experience to users who haven't adopted
a static type system like typescript.

Consider the following code:

```javascript
const fetchWeather = () =>
  fetch('https://api.weather.gov/stations/KPTK/observations/latest')
    .then(resp => resp.json());

const listeners = [];

const addWeatherListener = fn =>
  listeners.push(fn);

setInterval(() =>
  fetchWeather().then(data =>
    listeners.forEach(listener => listener(data))
  )
, 10000);
```

If something that isn't a function is accidentally passed to `addWeatherListener`,
we'll get an error like `TypeError: listener is not a function`, and the stacktrace
will report the line with the `listener(data)` call.

Unfortunately it won't containt the call to `addWeatherListener`, namely
the line that mistakenly passed the wrong value, so the stacktrace is
basically useless in finding the bug.

A dynamic type check can be added in `addWeatherListener` to detect the wrong
type immediately:

```javascript
import { expectFunction } from '@fpc/types';

const addWeatherListener = fn =>
  listeners.push(expectFunction(fn));
```

Now `addWeatherListener(null)` throws `TypeError: Expected function, got null`.

## API

### [isArray](https://github.com/fpc-js/types/blob/master/src/isArray.js)

Alias for [Array.isArray](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)

### [isBoolean](https://github.com/fpc-js/types/blob/master/src/isBoolean.js)

Shortcut for `typeof val === 'boolean'`

### [isFunction](https://github.com/fpc-js/types/blob/master/src/isFunction.js)

Shortcut for `typeof val === 'function'`

### [isInteger](https://github.com/fpc-js/types/blob/master/src/isInteger.js)

Alias for [Number.isSafeInteger](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger)

### [isIterable](https://github.com/fpc-js/types/blob/master/src/isIterable.js)

Checks if an object implements the [iterable protocol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterable_protocol)

### [isNumber](https://github.com/fpc-js/types/blob/master/src/isNumber.js)

Checks if a value is a number, excludes `Infinity`, `-Infinity` and `NaN`.

### [isObject](https://github.com/fpc-js/types/blob/master/src/isObject.js)

Checks if a value is a non-`null` object. Functions are considered objects
since in javascript they are implemented as [Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) object.

Functions have the same interface as every other plain object,
so there's no point in return `false` on functions.

E.g.:

```javascript
const obj = () => null;
obj.x1 = 10;
console.log({ ...obj, x2: 20 }); // { x1: 10, x2: 20 }
```

### [isPromise](https://github.com/fpc-js/types/blob/master/src/isPromise.js)

Checks if an object is [thenable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await#Thenable_objects).

N.b.: thenable objects may not be standard promises.

```javascript
import { isPromise } from '@fpc/types';

if (isPromise(obj)) {
  obj.then(console.log, console.error); // ← this cannot fail
  obj.then(console.log).catch(console.error); // `catch` method may not be defined
}
```

### [isString](https://github.com/fpc-js/types/blob/master/src/isPromise.js)

Shortcut for `typeof val === 'string'`

### [isSymbol](https://github.com/fpc-js/types/blob/master/src/isSymbol.js)

Shortcut for `typeof val === 'symbol'`

### [typeOf](https://github.com/fpc-js/types/blob/master/src/typeOf.js)

Works like built-in [typeof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof) with the following differences:

- `typeOf(null) === 'null'`
- `typeOf(NaN) === 'NaN'`
- `typeOf(±Infinity) === 'infinity'`

### expect*

Every `is*` function has an `expect*` counterpart. For example `expectInteger(5)` returns `5`, `expectInteger(null)` throws `TypeError: Expected integer, got null`.
