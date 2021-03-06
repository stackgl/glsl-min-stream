![NPM](https://img.shields.io/npm/l/glsl-min-stream.svg) ![npm](https://img.shields.io/npm/v/glsl-min-stream.svg) ![npm](https://img.shields.io/npm/dm/glsl-min-stream.svg) [![Build Status](https://travis-ci.org/stackgl/glsl-min-stream.svg?branch=master)](https://travis-ci.org/stackgl/glsl-min-stream) [![Coverage Status](https://coveralls.io/repos/github/stackgl/glsl-min-stream/badge.svg?branch=master)](https://coveralls.io/github/stackgl/glsl-min-stream?branch=master)

# glsl-min-stream

Transform [glsl-parser](https://github.com/chrisdickinson/glsl-parser.git) AST nodes
on-the-fly by renaming variables into shorter forms.

```javascript
var tokenizer = require('glsl-tokenizer/stream')
  , parser = require('glsl-parser')
  , deparser = require('glsl-deparser')
  , minify = require('./index')

process.stdin
  .pipe(tokenizer())
  .pipe(parser())
  .pipe(minify())           // <-- the minifier
  .pipe(deparser(false))    // <-- "false" == no unnecessary whitespace, please.
  .pipe(process.stdout)

process.stdin.resume()
```

# API

### minifier = require('glsl-minifier')([safe_word_list], should_mutate_storages) -> minifier stream

Create a [through stream](https://github.com/dominictarr/stream-spec#through-sync-writable-and-readable-aka-filter) that rewrites incoming declared variables.

* `safe_word_list` defaults to `["main"]` so that the main function is not overridden.
* `should_mutate_storages`, a boolean defaulted to `false`, determines whether the minifier should attempt to rewrite variables declared as `varying`, `attribute`, or `uniform` (usually you do not want to do this, as the client program is expecting specific variable names).

# Testing

Run `npm test` to run tests

---

When adding a code change that differs the output, make sure to run tap with snapshots by running `npm run test -- --snapshot`. This will regenerate the tap-snapshot files. Make sure to commit those along with other code and test changes.

# License

MIT
