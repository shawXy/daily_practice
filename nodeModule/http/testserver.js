// 1、加载http模块
const http = require('http');
const fs = require('fs');

//创建服务器，实例server对象
const server = http.createServer();

//监听请求，设置清气处理函数
server.on('request', (req, res) => {
    //   res.setHeader('Content-Type', 'text/html;charset=utf-8');
    //   res.write('<h1>这是我给你的响应哦</h1>');
    //   res.end();

    // 响应html，必须读取html，将读取的结果响应给浏览器
    //   fs.readFile('../test.html', (err, data) => {
    //     if (err) {
    //       return error;
    //     } else {
    //       res.end(data);
    //     }
    //   })


    //如果是html文件可以读取返回，但是css等文件不能这样处理,要根据相对的url来处理
    console.log(req.url);
    //   console.log(req.method);
    /* if (req.url === '/index.html') {
    fs.readFile('./manager/index.html', (err, data) => {
      if (err) throw err;
      res.end(data);
    })
  } else if (req.url === '/images/logo.png') {
    fs.readFile('./manager/images/logo.png', (err, data) => {
      if (err) throw err;
      res.end(data);
    })
  }
 */
    // fs.readFile('./manager' + decodeURIComponent(req.url), (err, data) => { //当包含中文字符时，需要进行解码，否则找不到资源
    //   if (err) throw err;
    //   res.end(data);
    // })


    // 当浏览器向服务器提交参数时，服务器需要接收参数，这个时候需要使用post方法
    // 处理post请求
    /*  1. 给req注册data事件， 当有数据提交过来就会触发， 事件的作用是接收数据， 接收大量数据的时候， 是分块接收的
        2. 给req注册end事件， 当数据全部接收完毕， 会触发 */

    // let str = ''; //定义空字符串，用来接收请求数据
    // req.on('data', (chunk) => {
    //   str += chunk;
    //   console.log(str);
    // })
    // req.on('end', () => {
    //   console.log(str);
    // })



    // 处理404,先判断是否存在请求的资源路径
    fs.access('./manager' + decodeURIComponent(req.url), (err) => {
      if (err) {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html;charset=utf-8');
        res.end('404 not found！');
      } else {
        fs.readFile('./manager' + decodeURIComponent(req.url), (err, data) => {
          if (err) throw err;
          res.end(data);
        })
      }

    })



  })
  // 当服务器接收到浏览器的请求后，如果没有做出响应，浏览器会等待
  //绑定端口号，开启服务
server.listen(3000, () => {
  console.log('the server is running...');
})