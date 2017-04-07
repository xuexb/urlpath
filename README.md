# urlpath

url路径解析, 为了解决在拼接链接中多个`/`连接问题, 感谢 [@52cik](http://github.com/52cik)

[![code style fecs](https://img.shields.io/badge/code%20style-fecs-brightgreen.svg)](https://github.com/ecomfe/fecs)
[![NPM Version](https://img.shields.io/npm/v/urlpath.svg)](https://www.npmjs.com/package/urlpath)
[![NPM Downloads](https://img.shields.io/npm/dm/urlpath.svg)](https://www.npmjs.com/package/urlpath)
[![Linux Build](https://img.shields.io/travis/xuexb/urlpath/master.svg?label=linux)](https://travis-ci.org/xuexb/urlpath)
[![Test Coverage](https://img.shields.io/coveralls/xuexb/urlpath/master.svg)](https://coveralls.io/r/xuexb/urlpath?branch=master)

---

### 例子

```js
// => //xuexb.com/static/a.js
urlpath('//xuexb.com/', '//static/a.js')

// => http://xuexb.com/static/a.js
urlpath('http://xuexb.com/', '//', '//static//', '/a.js')
urlpath('http://xuexb.com/////static///a.js')
```