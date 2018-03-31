Some EsLint rules that I use for my own projects. So I don't have to write them every time.

Unless you want to code like me, nothing to see here, move along.

```sh
npm install --save-dev jimhigson-my-eslint-rules
```

```js

// copy-pastie-me:

const defaultsDeep = require( 'lodash.defaultsdeep' );

module.exports = defaultsDeep( {
  // project specific rules
}, require( 'jimhigson-my-eslint-rules' ) )

```


