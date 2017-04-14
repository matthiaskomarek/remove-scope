# Remove the @scope part from given string 
[![Build Status](https://travis-ci.org/matthiaskomarek/remove-scope.svg?branch=master)](https://travis-ci.org/matthiaskomarek/remove-scope)

#### How it works
```
npm install remove-scope --save
```

```
const removeScope = require('remove-scope').removeScope

removeScope('@package/test-name');
// => 'test-name'

```
