const fs = require('fs');
const express = require('express');
const querystring = require('querystring');
const app = express();
app.listen(3000, () => console.log('the server is running...'))

// 自定义中间件处理post请求体的内容
// 如果是post请求则接收数据，然后next；如果不是post请求，则直接next
/* app.use((req, res, next) => {
  if (req.method == 'POST') {
    let str = '';
    // 接收数据
    req.on('data', (chunk) => {
      str += chunk;
    })
    req.on('end', () => {
      //将字符串转化成对象并存储,赋值
      req.body = querystring.parse(str);
      next();
    })
  } else {
    next();
  }
}) */
app.use(express.static('manager'));

// 使用body-parser中间件处理post提交数据
const bodypaser = require('body-parser');
app.use(bodypaser.urlencoded({ extended: false }))



// 定义接口，获得浏览器提交的数据
app.post('/logincheck', (req, res) => {
  console.log(req.body); //{ name: 'lisi', age: '18', gender: '男' }
})
app.post('/reg', (req, res) => {
    console.log(req.body); //{ name: 'lucy', age: '12', gender: '女' }
  })
  // app.get('/login.html', (req, res) => {
  //   res.sendFile(__dirname + '/manager' + decodeURIComponent(req.url))
  // })