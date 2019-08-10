const fs = require('fs');
//判断路径是否存在
fs.access('/Users/baidu/Desktop/nodeModule', (error) => {
  if (error) {
    console.log('不存在！');
    return;
  };
  console.log('存在');
})

// ===========>向文件中追加内容(当目录中没有文件时，会创建一个并追加内容)
// fs.appendFile('/Users/baidu/Desktop/nodeModule/test2.js', 'console.log("the words are appended successfully!")', (err) => {

//   if (err) {
//     console.log('追加失败了');
//     return;
//   };

// })

// ==============>创建目录(当已经存在该文件时，创建失败)
// fs.mkdir('/Users/baidu/Desktop/nodeModule/newFile', error => {
//   if (error) {
//     console.log('创建失败了');
//     return;
//   }
// })

// ==============>读取目录列表
fs.readdir('/Users/baidu/Desktop/nodeModule', (error, data) => {
  if (error) {
    console.log('读取失败了');
    return;
  }
  console.log(data)
    /* 
    [ 'fs.js',
    'newFile',
    'path.js',
    'test1.js',
    'test2.js',
    'testnode.js' ]
     */
})

// =========>重命名文件/目录
fs.rename('/Users/baidu/Desktop/nodeModule/newFile', '/Users/baidu/Desktop/nodeModule/test.html', err => {
  if (err) {
    console.log('重命名失败！')
    return;
  }
})


// ===========>删除目录（目录不存在时，删除失败）
// fs.rmdir('/Users/baidu/Desktop/nodeModule/newFile', error => {
//   if (error) {
//     console.log('删除失败');
//     return;
//   }
// })


// ============>异步读取文件内容
// fs.readFile('/Users/baidu/Desktop/nodeModule/test2.js', 'utf-8', (err, data) => {
//   if (err) {
//     console.log('读取失败');
//     return;
//   }
//   console.log(data);
//   console.log(data.toString()); //加上utf-8的话可以不用tostring

// })


// =============>异步写入文件(会覆盖掉之前的内容)
// fs.writeFile('/Users/baidu/Desktop/nodeModule/test2.js', ' console.log("这一段是异步写入的，测试编码")', (err, data) => {
//   if (err) {
//     console.log('写入失败');
//     return;
//   }

// })