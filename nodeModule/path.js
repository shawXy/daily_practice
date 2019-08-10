console.log('--------------------test path');
const path = require('path');
// path.basename('路径')返回的时路径最后面部分
console.log('path.basename(): ===> ' + path.basename('/Users/baidu/Desktop/test/test1.js'));
//=====>test1.js

// path.dirname('路径') 返回目录名
console.log('path.dirname(): ===> ' + path.dirname('/Users/baidu/Desktop/test/testnode.js'))
  //======>/Users/baidu/Desktop/test

//path.extname('路径')返回文件的扩展名（包含 . ）
console.log('path.extname(): ===> ' + path.extname('/Users/baidu/Desktop/test/testnode.js'))
  //=======>.js

//path.format(pathObject) 将一个对象格式化为一个路径字符串
let obj = {
  name: '李四',
  gender: '男',
  age: 18,
  sing() {
    console.log('hahahhaahah')
  }
}

let obj1 = {
  root: '/',
  name: 'format',
  ext: '.txt',
  base: 'format.txt',
  dir: '/Users/baidu'
}
console.log('path.format(): ===> ' + path.format(obj)) //===========>李四
console.log('path.format(): ===> ' + path.format(obj1)) //===========>/Users/baidu/format.txt

//path.join([...paths]])拼接路径
console.log('path.join(): ===> ' + path.join('/Users/baidu', 'Desktop', 'test/testnode.js'))
  //=======>/Users/baidu/Desktop/test/testnode.js
console.log('获得绝对路径: ===> ' + path.join(__dirname, 'test', 'testnode.js'))
  //=======>/Users/baidu/Desktop/test/test/testnode.js

// path.parse(path)吧路径字符串解析成对象的格式
console.log(path.parse('/Users/baidu/Desktop/test/testnode.js'))
  /* ==============>
  { root: '/',
  dir: '/Users/baidu/Desktop/test',
  base: 'testnode.js',
  ext: '.js',
  name: 'testnode' 
  } */


//path.resolve([...paths]])基于当前工作目录拼接路径
console.log('path.resolve(): ===> ' + path.resolve('Desktop', 'test/testnode.js'))
  //======>/Users/baidu/Desktop/test/Desktop/test/testnode.js