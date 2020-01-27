## Magic Address

See a [live demo](https://henriquesilverio.github.io/magic-address) here.

Autofill address form fields based in a given [CEP](https://en.wikipedia.org/wiki/C%C3%B3digo_de_Endere%C3%A7amento_Postal) number, using the [Postmon](http://postmon.com.br) API.

## Installation

Install **MagicAddress** in your project with:

`npm i -S magic-address`

Or manually grab a copy of `magic-address.js` or `magic-address.min.js` in `dist` folder.

## Usage

ES6 environment:

```javascript
import MagicAddress from "magic-address";

MagicAddress.start();
```

CommonJS environment:

```javascript
var MagicAddress = require("magic-address");

MagicAddress.start();
```

Or in old school global reference for non ES6 / CommonJS environments:

```javascript
MagicAddress.start();
```

You can pass options to `.start()` method as well:

```javascript
MagicAddress.start({
  selectors: {
    inputCEP: ".custom-cep-selector",
    inputAddress: ".custom-address-selector",
    inputNumber: ".custom-number-selector",
    inputNeighborhood: ".custom-neighborhood-selector",
    inputCity: ".custom-city-selector",
    inputState: ".custom-state-selector"
  }
});
```

## Changelog

### 2.0.0 - 01/27/2019

- Drop `Promise` and `Object.assign` polyfills, provide your own if you need it.
- Switch build system from Webpack to [Rollup](https://rollupjs.org/guide/en).

### 1.1.0 - 14/02/2018

- Old stuff like Grunt, Browserify, JSHint, JSCS were replaced in favor of Webpack, JSLint and NPM Scripts.
- Added a `LICENSE.txt` file, to follow proper licensing guidelines.
- Removed unnecessary `demo` directory in project root.

### 1.0.4 - 10/06/2016

- Add live demo.
- Update es6-promise polyfill.
- Use https to call the CEP API.

### 1.0.3 - 09/13/2016

- Adjust the module export method. No more `.default` when importing the module.

### 1.0.2 - 09/13/2016

- Add keywords in `package.json`.

### 1.0.0 - 09/13/2016

- Initial release
