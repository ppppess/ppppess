
[pppp]: http://purecss.io/

# Hackable

The server part of the [PPPP][pppp] ecosystem.
Just run it on your own server, and you can operate all services

Note: You can [customize which Pure modules you need][customize].

## install:

* Make sure you have everything you need:
```shell
$ ./install.sh
```


* build the server
```shell
$ npm install
$ grunt build
```

* test the server
```shell
$ grunt tests
```


essai

ess2

# min.js

A super tiny JavaScript library to execute simple DOM querying and hooking event listeners. Aims to return the raw DOM node for you to manipulate directly, using HTML5 (et al) tech like `element.classList` or `element.innerHTML`, etc.

[![Flattr this](http://api.flattr.com/button/flattr-badge-large.png)](http://flattr.com/thing/1268688/remymin-js-on-GitHub)

[![Build Status](https://travis-ci.org/remy/min.js.png?branch=master)](https://travis-ci.org/remy/min.js)

## Query elements

```js
var links = $('p:first-child a');
```

If there is more than one link, the return value is `NodeList`, if there's only a single match, you have an `Element` object. So you need to have an idea of what to expect if you want to modify the DOM.

## Events

### Bind events

```js
$('p:first-child a').on('click', function (event) {
  event.preventDefault();
  // do something else
});
```

Note: the `on` and `trigger` methods are on both `Node` objects and `NodeList` objects, which also means this affects the `document` node, so `document.on(type, callback)` will also work.

### Custom events

```js
$('a').on('foo', function () {
  // foo was fired
});

$('a:first-child').trigger('foo');
```

### Arbitrary events / pubsub

```js
$.on('foo', function () {
  // foo was fired, but doesn't require a selector
});
```

### Turning off events?

Current min.js has no support for turning off events (beyond `.removeEventListener` -- but even then you don't have the reference function to work with). Currently there's no plans to implement this (as I find I don't disable events very often at all) -- but I'm not closed to the idea. There's an [issue open](https://github.com/remy/min.js/pull/8), but it adds quite a bit more logic to a very small file. If there's enough :thumbsup: on the issue, I'll add it in. Equally, if you think min.js should stay simple, please :thumbsdown: -- this is useful too.

## Looping

```js
$('p').forEach(function (el, index) {
  console.log(el.innerHTML);
});
```

Note: jQuery-like libraries tend to make the context `this` the element. Since we're borrowing `forEach` from the array object, `this` does not refer to the element.

## Chaining events

```js
$('a').on('foo', bar).on('click', doclick).trigger('foobar');
```

Also when a single element is matched, you have access to it:

```js
$('a').href = '/some-place.html';
```

## Silent failing

Like jQuery, this tiny library silently fails when it doesn't match any elements. As you might expect.

# More info

* Special thanks and inspired by [Andrew Lunny](http://github.com/alunny)'s [slide](http://youtu.be/ssR7SKJfcG4?t=20m14s).
* I've started using this library in conjunction with some [microlibraries](https://github.com/remy/libraries) that I've written for data binding and XHR.
* License: MIT / http://rem.mit-license.org





Pure
====
[![Gitter](https://badges.gitter.im/Join Chat.svg)](https://gitter.im/yahoo/pure?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

[![Pure](https://cloud.githubusercontent.com/assets/449779/5291099/1b554cca-7b03-11e4-9157-53a12d91b34a.png)][Pure]

A set of small, responsive CSS modules that you can use in every web project.
[http://purecss.io/][Pure]

[![Build Status](http://img.shields.io/travis/yahoo/pure.svg?style=flat)][Build Status]

**Use From the CDN:**

```html
<link rel="stylesheet" href="http://yui.yahooapis.com/pure/0.6.0/pure-min.css">
```

Note: You can [customize which Pure modules you need][customize].

**Install with Bower:**

```shell
$ bower install --save pure
```

**Install with NPM:**

```shell
$ npm install purecss
```

[Pure]: http://purecss.io/
[Bower]: http://bower.io/
[Build Status]: https://travis-ci.org/yahoo/pure
[customize]: http://purecss.io/customize/


Features
--------

Pure is meant to be a starting point for every website or web app. We take care
of all the CSS work that every site needs, without making it look cookie-cutter:

* A responsive grid that can be customized to your needs.

* A solid base built on [Normalize.css][] to fix cross-browser compatibility
  issues.

* Consistently styled buttons that work with `<a>` and `<button>` elements.

* Styles for vertical and horizontal menus, including support for dropdown
  menus.

* Useful form alignments that look great on all screen sizes.

* Various common table styles.

* An extremely minimalist look that is super-easy to customize.

* Responsive by default, with a non-responsive option.

* Extremely small file size: **4.5KB minified + gzip**.


[Normalize.css]: http://necolas.github.io/normalize.css/


Get Started
-----------

To get started using Pure, go to the [Pure CSS website][Pure]. The website has
extensive documentation and examples to help you start using Pure.

You can include the Pure CSS file in your project by fetching it from Yahoo's
CDN:

```html
<link rel="stylesheet" href="http://yui.yahooapis.com/pure/0.6.0/pure-min.css">
```

You can also install Pure using [Bower][], using the following command:

```shell
$ bower install --save pure
```

Or you can install Pure using NPM:

```shell
$ npm install purecss
```

Build From Source
-----------------

Optionally, you can build Pure from its source on Github. To do this, you'll
need to have Node.js and npm installed. We use [Grunt][] to build Pure.

```shell
$ git clone git@github.com:yahoo/pure.git
$ cd pure
$ npm install
$ grunt
```

### Build Files

Now, all Pure CSS files should be built into the `pure/build/` directory. All
files that are in this build directory are also available on the CDN. The naming
conventions of the files in the `build/` directory follow these rules:

* `[module]-core.css`: The minimal set of styles, ususally structural, that
  provide the base on which the rest of the module's styles build.

* `[module]-nr.css`: Rollup of `[module]-core.css` + `[module].css` +
  `[module]-[feature].css` from the `src/[module]/` dir. This is the
  non-responsive version of a module.

* `[module].css`: Rollup of `[module]-nr.css` + `[module]-r.css` from the
  `build/` dir. This is the responsive version of a module.

* `*-min.css`: A minified file version of the files of the same name.

* `pure.css`: A rollup of all `[module].css` files in the `build/` dir. This is
  a responsive roll-up of everything, non-minified.

* `pure-min.css`: Minified version of `pure.css` that should be used in
  production.

* `pure-nr.css`: A Rollup of all modules without @media queries. This is a
  non-responsive roll-up of everything, non-minified.

* `pure-nr-min.css`: Minified version of `pure-nr.css` that should be used in
  production.

* `grids-responsive.css`: Unminified version of Pure's grid stylesheet which 
  includes @media queries.

* `grids-responsive-min.css`: Minified version of `grids-responsive.css` that
  should be used in production.


[Grunt]: http://gruntjs.com/


Browser Support and Testing
---------------------------

Pure is tested and works in:

* IE 8+
* Latest Stable: Firefox, Chrome, Safari
* iOS 6-8
* Android 4.x


Docs and Website
----------------

[Pure's website][Pure] is also open source, so please open any issues or pull
requests for the docs and website over at the [`pure-site`][pure-site]
repository.


[pure-site]: https://github.com/yahoo/pure-site


Contributing
------------

See the [CONTRIBUTING file][] for information on how to contribute to Pure.


[CONTRIBUTING file]: https://github.com/yahoo/pure/blob/master/CONTRIBUTING.md


License
-------

This software is free to use under the Yahoo! Inc. BSD license.
See the [LICENSE file][] for license text and copyright information.


[LICENSE file]: https://github.com/yahoo/pure/blob/master/LICENSE.md




