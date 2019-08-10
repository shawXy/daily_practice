//加载模块
const express = require('express');

// 创建服务
const app = express();

// 绑定端口，开启服务
app.listen(3000, () => console.log('the server is running...'));

//监听浏览器并处理请求
/* app.get('get请求的地址', 处理函数);
app.post('post请求的地址', 处理函数); */

/* app.get('/index.html', (req, res) => {
  // 注意send不能直接响应数字，需要加引号，否则会将数字当做响应状态码处理/
  //   res.send('你好啊，我是通过send响应给你的哦');


  //读取文件
  // res.sendFile(文件的绝对路径)
  res.sendFile(__dirname + '/manager/index.html')
}) */

// 处理静态资源
// 通过如下代码就可以将 manager 目录下的图片、CSS 文件、JavaScript、html文件 对外开放访问了
// app.use(express.static('manager'));

// 自定义中间件，使得加载index.html文件时遇到css，png图片等文件时可以正常读取
const fs = require('fs');
/* app.use((req, res, next) => {
  if (req.url.startsWith('/lib') || req.url.startsWith('/images')) {
    res.sendFile(__dirname + '/manager' + decodeURIComponent(req.url));
  } else {
    next(); // 调用next函数，表示当前的中间件处理完毕，代码向后执行即可
  }

}) */

//表示所有get请求
// app.get('/*', (req, res) => {
//   res.sendFile(__dirname + '/manager' + decodeURIComponent(req.url));
// })


//get和post处理请求数据
// app.get('/getusers',(req,res) => { 
//   // get接收参数怎么去接收？ 
//   // http://127.0.0.1:5654?id=1 
//   let result = url.parse(req.url,true) 
//   console.log(result.query.search) 
// })


//   app.post('/postusers', (req, res) => {
//      console.log(req.body) 
//      let sql = 'SELECT * FROM `manager`' 
//   // con.query(sql, (err, data) => { 
//     // if (err) throw err 
//     // console.log(data) 
//     // }) 
//   })