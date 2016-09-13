## Magic Address

Autofill address form fields based in a given [CEP](https://en.wikipedia.org/wiki/C%C3%B3digo_de_Endere%C3%A7amento_Postal) number, using the [Postmon](http://postmon.com.br) API.

## Installation

Install **MagicAddress** in your project with: `npm i -D magic-address` or manually grab a copy of `magic-address.js` or `magic-address.min.js` in `dist` folder.

## Usage

ES6 environment:

```javascript
import { default as MagicAddress } from 'address';

MagicAddress.start();
```

Or in old school global reference for non ES6 environments:

```javascript
var MagicAddress = MagicAddress.default;

MagicAddress.start();
```

You can pass options to `.start()` method as well:

```javascript
MagicAddress.start({
  'selectors' : {
    'inputCEP'          : '.custom-cep-selector',
    'inputAddress'      : '.custom-address-selector',
    'inputNumber'       : '.custom-number-selector',
    'inputNeighborhood' : '.custom-neighborhood-selector',
    'inputCity'         : '.custom-city-selector',
    'inputState'        : '.custom-state-selector'
  }
});
```
