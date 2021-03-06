<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Waterfall

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Execute functions in series, passing the results of one function as arguments to the next function.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/utils-async-series-waterfall
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var waterfall = require( '@stdlib/utils-async-series-waterfall' );
```

#### waterfall( fcns, clbk\[, thisArg] )

Executes `functions` in series, passing the results of one `function` as arguments to the next `function`.

```javascript
function foo( next ) {
    next( null, 'beep' );
}

function bar( str, next ) {
    console.log( str );
    // => 'beep'

    next();
}

function done( error ) {
    if ( error ) {
        throw error;
    }
}

var fcns = [ foo, bar ];

waterfall( fcns, done );
```

To set the `this` context for **all** `functions` in the provided function array, provide a `thisArg`.

<!-- eslint-disable no-use-before-define -->

```javascript
function foo( next ) {
    this.idx = 0;
    next( null, 'beep' );
}

function bar( str, next ) {
    this.idx += 1;
    console.log( str );
    // => 'beep'

    next();
}

function done( error ) {
    if ( error ) {
        throw error;
    }
    console.log( ctx.idx );
    // => 1
}

var ctx = {};
var fcns = [ foo, bar ];

waterfall( fcns, done, ctx );
```

#### waterfall.factory( fcns, done\[, thisArg] )

Returns a reusable waterfall `function`.

```javascript
function foo( next ) {
    next( null, 'beep' );
}

function bar( str, next ) {
    console.log( str );
    // => 'beep'

    next();
}

function done( error ) {
    if ( error ) {
        throw error;
    }
}

var fcns = [ foo, bar ];

var run = waterfall.factory( fcns, done );

run();
run();
run();
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The last argument applied to each waterfall `function` is a callback. The callback should be invoked upon a series `function` completion. The first argument is reserved as an `error` argument (which can be `null`). Any results which should be passed to the next `function` in the series should be provided beginning with the second argument.
-   If any `function` calls the provided callback with a truthy `error` argument, the waterfall suspends execution and immediately calls the `done` callback for subsequent `error` handling.
-   This implementation does **not** guarantee that execution is asynchronous. To do so, wrap the `done` callback in a `function` which either executes at the end of the current stack (e.g., `nextTick`) or during a subsequent turn of the event loop (e.g., `setImmediate`, `setTimeout`).

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var replace = require( '@stdlib/string-replace' );
var waterfall = require( '@stdlib/utils-async-series-waterfall' );

function foo( next ) {
    next( null, 'beep' );
}

function bar( str, next ) {
    console.log( str );
    next( null, replace( str, 'e', 'o' ) );
}

function fun( str, next ) {
    console.log( str );
    next();
}

function done( error ) {
    if ( error ) {
        throw error;
    }
    console.log( 'done' );
}

var fcns = [ foo, bar, fun ];

waterfall( fcns, done );
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-async-series-waterfall.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-async-series-waterfall

[test-image]: https://github.com/stdlib-js/utils-async-series-waterfall/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/utils-async-series-waterfall/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-async-series-waterfall/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-async-series-waterfall?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-async-series-waterfall.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils-async-series-waterfall/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/utils-async-series-waterfall/tree/deno
[umd-url]: https://github.com/stdlib-js/utils-async-series-waterfall/tree/umd
[esm-url]: https://github.com/stdlib-js/utils-async-series-waterfall/tree/esm
[branches-url]: https://github.com/stdlib-js/utils-async-series-waterfall/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-async-series-waterfall/main/LICENSE

</section>

<!-- /.links -->
