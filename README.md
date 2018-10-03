# jstransformer-inky

[Inky](https://github.com/zurb/inky) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-inky/master.svg)](https://travis-ci.org/jstransformers/jstransformer-inky)
[![Coverage Status](https://img.shields.io/codecov/c/github/jstransformers/jstransformer-inky/master.svg)](https://codecov.io/gh/jstransformers/jstransformer-inky)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-inky/master.svg)](http://david-dm.org/jstransformers/jstransformer-inky)
[![Greenkeeper badge](https://badges.greenkeeper.io/jstransformers/jstransformer-inky.svg)](https://greenkeeper.io/)
[![NPM version](https://img.shields.io/npm/v/jstransformer-inky.svg)](https://www.npmjs.org/package/jstransformer-inky)

## Installation

    npm install jstransformer-inky

## API

```js
var inky = require('jstransformer')(require('jstransformer-inky'))

foo.render('<row><columns large="6"></columns></row>').body
//=> '<html><head></head><body><table class="row"><tbody><tr><th class="small-12 large-6 columns first last"><table><tr><th></th></tr></table></th></tr></tbody></table></body></html>'
```

## License

MIT
