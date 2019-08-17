const express = require('express');

const app = express();
app.listen(3000, () => console.log('The server is running...'));
/* 
不使用express: 1、使用setHeader()
              2、使用writeHead()
使用express:   3、res.set()  */
app.get('/test', (req, res) => {
  let expires = new Date(Date.now() + 60000).toUTCString();

  res.set({
    'set-cookie': ['age=20;expires=' + expires, 'name=liz', 'gender=female']
  });
  res.send('设置成功')
})

app.get('/test1', (req, res) => {
  console.log(req.headers.cookie)
  res.send('获取成功')
})
app.get('/test2', (req, res) => {
  console.log(req.headers.cookie)
  res.send('获取成功')
})