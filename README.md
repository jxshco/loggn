<h1 align="center">
  loggn
</h1>

<p align="center">
  <a href="https://travis-ci.org/jxshco/loggn"><img src="https://travis-ci.org/jxshco/loggn.svg?branch=master" alt="travis"></a>
  <a href="https://www.npmjs.com/package/loggn"><img src="https://img.shields.io/npm/v/loggn.svg" alt="npm version"></a>
  <a href="https://www.npmjs.com/package/loggn"><img src="https://img.shields.io/npm/dt/loggn.svg" alt="npm downloads"></a>
  <a href="https://standardjs.com"><img src="https://img.shields.io/badge/code_style-standard-brightgreen.svg" alt="Standard - JavaScript Style Guide"></a>
</p>

<p align="center">Logging, done a bit simpler.</p>

## Why?

Why write ```console.log('hello world')``` when you can write ```log('hello world')```

## Table of Contents

- Quick start
  - [Install](#install)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Licence](#usage)

## Install

Add loggn to your project using npm or yarn.

Install (NPM):
```bash
$ npm install loggn --save
```

Install (Yarn):
```bash
$ yarn add loggn
```

## Usage
#### loggn
The default export from loggn is a function that takes 2 arguments. The first argument is what you want to log. The second argument is the log type (log, warn, error etc)
```js
import loggn from 'loggn'
loggn('Hello World') // Hello World
loggn('Hello World', 'error') // Hello World
```

##### You can also import the log types individually as follows.

#### log, error, info, warn
```js
import { log, error, info, warn } from 'loggn'
log(123) // 123
log('Hello World') // Hello World
error('This went wrong') // This went wrong
```

#### assert
```js
import { assert } from 'loggn'
assert(1) // undefined
assert(typeof '123' === 'object') // Assertion failed: console.assert
```

#### clear
```js
import { clear } from 'loggn'
clear() // Console was cleared
```

#### count
```js
import { count } from 'loggn'
count() // 0
count() // 1
count() // 2
```

#### group
```js
import {group, groupCollapsed, groupEnd} from 'loggn'
```

#### profile
```js
import {profile, profileEnd} from 'loggn'
```

#### table
```js
import {table} from 'loggn'
```

#### time
```js
import {time, timeEnd} from 'loggn'
```

#### trace
```js
import {trace} from 'loggn'
```

## Contributing

Pull requests for new features, bug fixes, and suggestions are welcome!

## License

[MIT](https://github.com/jxshco/loggn/blob/master/LICENSE)
