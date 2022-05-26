# uni-random

A simple javascript libary for generating random string

## Installation

To install uni-random, use [npm](http://github.com/npm/npm):

```
npm install uni-random
```

## Usage

```javascript
var uniRandom = require("uni-random");

uniRandom();
// >> "z3odKHvQpFoZZ0w"

uniRandom({
  length: 20,
  charset: 'alphanumeric',
  captitalization: null
});
// >> "CaIDjM0ZbH5smjiKFk9W"

uniRandom({
  charset: 'github',
});
// >> "tgghubuhhbibbgi"

```

## API

- `uniRandom(options)`
  - `options`
    - `length` - the length of the random string. (default: 15) [OPTIONAL]
    - `charset` - define the character set for the string. (default: 'alphanumeric') [OPTIONAL]
      - `alphanumeric` - [0-9 a-z A-Z]
      - `alphabetic` - [a-z A-Z]
      - `numeric` - [0-9]
      - `hex` - [0-9 a-f]
      - `binary` - [01]
      - `octal` - [0-7]
      - `custom` - any given characters
    - `capitalization` - define whether the output should be lowercase / uppercase only. (default: null) [OPTIONAL]
      - `lowercase`
      - `uppercase`

## LICENSE

uni-random is licensed under the MIT license.
