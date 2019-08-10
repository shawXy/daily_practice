const myurl = require('url');

// ===============>遗留的API
console.log(myurl.parse('/Users/baidu/Desktop/test/test.html?id=1&name=lz&age=18'));
/* Url {
    protocol: null,
    slashes: null,
    auth: null,
    host: null,
    port: null,
    hostname: null,
    hash: null,
    search: '?id=1&name=lz&age=18',
    query: 'id=1&name=lz&age=18',
    pathname: '/Users/baidu/Desktop/test/test.html',
    path: '/Users/baidu/Desktop/test/test.html?id=1&name=lz&age=18',
    href: '/Users/baidu/Desktop/test/test.html?id=1&name=lz&age=18' } */



// ===============>新的API:必须是完整的url
let murl = new URL('http://www.aaa.com/test.html?id=1&name=lz&age=18');
// 或者
let murl2 = new URL('/test.html?id=1&name=lz&age=18', 'http://www.aaa.com');
console.log(murl);
console.log(murl2)

/* URL {
    href: 'http://www.aaa.com/test.html?id=1&name=lz&age=18',
    origin: 'http://www.aaa.com',
    protocol: 'http:',
    username: '',
    password: '',
    host: 'www.aaa.com',
    hostname: 'www.aaa.com',
    port: '',
    pathname: '/test.html',
    search: '?id=1&name=lz&age=18',
    searchParams:
     URLSearchParams { 'id' => '1', 'name' => 'lz', 'age' => '18' },
    hash: '' } */
console.log(murl.searchParams.get('name')) //获取参数值