// 处理查询字符串（请求参数）
const querystring = require('querystring');
console.log(querystring.parse('name=李四&age=18&gender=男'));
//[Object: null prototype] { name: '李四', age: '18', gender: '男' }

//中文会被编码
console.log(querystring.stringify({ name: '李四', age: '18', gender: '男' }))
  //name=%E6%9D%8E%E5%9B%9B&age=18&gender=%E7%94%B7