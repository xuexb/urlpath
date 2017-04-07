# urlpath

url路径解析, 为了解决在拼接链接中多个`/`连接问题, 感谢 [@52cik](http://github.com/52cik)

### 例子

```js
// => //xuexb.com/static/a.js
urlpath('//xuexb.com/', '//static/a.js')

// => http://xuexb.com/static/a.js
urlpath('http://xuexb.com/', '//', '//static//', '/a.js')
urlpath('http://xuexb.com/////static///a.js')
```