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
urlpath('//xuexb.com/', '//static/a.js')                        // '//xuexb.com/static/a.js'

urlpath('http://xuexb.com/', '//', '//static//', '/a.js')       // 'http://xuexb.com/static/a.js'
urlpath('http://xuexb.com/////static///a.js')                   // 'http://xuexb.com/static/a.js'
```

请注意和 [url.resolve](https://nodejs.org/api/url.html#url_url_resolve_from_to) 的区别:

```
url.resolve('http://example.com/', '/one')                      // 'http://example.com/one'
url.resolve('http://example.com/one', '/two')                   // 'http://example.com/two'


urlpath('http://example.com/', '/one')                          // 'http://example.com/one'
urlpath('http://example.com/one', '/one')                       // 'http://example.com/one/one'
```