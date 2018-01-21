# [loggn](https://github.com/jxshco/loggn)

Logging, done a bit simpler.

## Contributing

Pull requests for new snippets, bug fixes, and suggestions are welcome!

## Usage
#### loggn
```js
import loggn from 'loggn'
loggn('Hello World') // Hello World
loggn('Hello World', 'error') // Hello World
```

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


## License

[MIT](https://github.com/jxshco/loggn/blob/master/LICENSE)
