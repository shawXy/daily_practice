// 加载各个模块
const express = require('express');
const fs = require('fs');
const bodypaser = require('body-parser');
const multer = require('multer');
const db = require('./db');

// 创建服务器,绑定端口号，开启服务
const app = express();
app.listen(3000, () => console.log('The server is running...'))

//处理中间件，加载静态资源
app.use(express.static('manager'));

// 处理post方法所需的中间件body-parser
app.use(bodypaser.urlencoded({ extended: false })); //不使用默认的编码
// 加载session模块
const session = require('express-session')
app.use(session({
    secret: 'shawXy123',
    cookie: { maxAge: 6000 },
    resave: false,
    saveUninitialized: false
  }))
  // 处理请求

//获取所有英雄
app.get('/getHeroes', (req, res) => {
  //   console.log(!req.session.isLogin)
  if (!req.session.isLogin) {
    // console.log(1111)
    // res.send('<script> location.href="/login.html";</script>');
    return;
  }
  let page = req.query.page || 1;
  //   console.log(req)
  let pageNum = 5;
  let sql = `select * from heroes limit ${(page-1)*pageNum},${pageNum};
            select count(*) totals from heroes`;
  db(sql, null, (err, result) => {
    if (err) throw err;
    // console.log(result)
    res.send({
      data: result[0],
      pageTotal: Math.ceil(result[1][0].totals / pageNum)
    });
  })

})

// 处理上传文件的中间件，存储上传的文件
const upload = multer({
  dest: __dirname + '/manager/uploads'
})

//新增英雄
app.post('/addHero', upload.single('heroIcon'), (req, res) => {
  let sql = `insert into heroes set ?`;
  let values = {
      name: req.body.heroName,
      nickname: req.body.heroNickName,
      skill: req.body.skillName,
      file: req.file.filename
    }
    //   console.log(req.body);
    //   console.log(req.file);
  db(sql, values, (err, result) => {
    if (err)
      res.send({
        code: 201,
        message: "添加失败"
      })
    else
      res.send({
        code: 200,
        message: "添加成功"
      })
  })
})

//根绝id查询一个英雄
app.get('/getHeroById', (req, res) => {
  let id = req.query.id;
  //   console.log(id)
  if (id == undefined || id == '' || isNaN(id)) {
    res.send('请求参数出错！')
    return;
  }
  let sql = `select * from heroes where id=?`;
  db(sql, id, (err, result) => {
    if (err) throw err;
    res.send(result[0])
  })
})


// 编辑英雄
app.post('/editHero', upload.single('heroIcon'), (req, res) => {
  //   console.log(req)
  let sql = `update heroes set ? where id=?`;
  let values = {
    name: req.body.heroName,
    nickname: req.body.heroNickName,
    skill: req.body.skillName,
  }
  let id = req.body.id;
  if (req.file != undefined) {
    values.file = req.file.filename;
  }
  //   console.log(req.body);
  //   console.log(req.file);
  db(sql, [values, id], (err, result) => {
    if (err)
      res.send({
        code: 201,
        message: "编辑失败"
      })
    else
      res.send({
        code: 200,
        message: "编辑成功"
      })
  })
})

//删除英雄
app.get('/delHero', (req, res) => {
  if (req.query.id == undefined || req.query.id == '' || isNaN(req.query.id)) {
    res.send('请求参数出错！')
    return;
  }
  let sql = 'delete from heroes where id =?';
  db(sql, req.query.id, (err, result) => {
    if (err)
      res.send({
        code: 201,
        message: '删除失败！'
      })
    else
      res.send({
        code: 200,
        message: '删除成功！'
      })
  })
})


// 根据姓名查询英雄
app.get('/getHeroByName', (req, res) => {
  let page = req.query.page || 1;
  let heroName = req.query.name;
  let pageNum = 5;
  //   console.log(heroName)
  let sql = `select * from heroes where name like '%${heroName}%' limit ${(page-1)*pageNum},${pageNum};
            select count(*) totals from heroes where name like '%${heroName}%'`;
  db(sql, null, (err, result) => {
    if (err) throw err;
    console.log(result)
    res.send({
      data: result[0],
      pageTotal: Math.ceil(result[1][0].totals / pageNum)
    });
  })


})


// 处理用户注册信息
app.post('/register', (req, res) => {
  //   console.log(req.body)
  let sql = 'insert into users set ?';
  db(sql, req.body, (err, result) => {
    if (err) {
      res.send({
        code: 201,
        msg: '注册失败！请检查注册信息是否正确！'
      })
    } else {
      res.send({
        code: 200,
        msg: '注册成功！'
      })
    }
  })
})



// 加载验证码的插件
const capt = require('svg-captcha');

// 定义生成验证码的接口
app.get('/captcha', (req, res) => {
  // var captcha = svgCaptcha.createMathExpr({
  var captcha = capt.create({
    color: false,
    background: '#87ceef'
  });

  // 将验证码记录到session中。其他接口就可以使用它了
  req.session.captcha = captcha.text;
  // 输出验证码字符的结果：
  //   console.log(captcha.text);

  res.type('svg');
  res.status(200).send(captcha.data);
})



//登录
app.post('/login', (req, res) => {
  //   console.log(req.body)
  //   console.log(req.body.vcode.toUpperCase() + '====' + req.session.captcha.toUpperCase())
  if (req.body.vcode.toUpperCase() !== req.session.captcha.toUpperCase()) {
    res.send({
      code: 202,
      msg: '验证码错误！'
    })
    return;
  }

  let sql = 'select * from users where username = ? and password = ?';
  db(sql, [req.body.username, req.body.password], (err, result) => {
    if (err) throw err;
    // console.log(result)
    if (result.length > 0) {
      req.session.isLogin = true;
      res.send({
        code: 200,
        msg: '登陆成功'
      })
    } else {
      res.send({
        code: 201,
        msg: '登录失败'
      })
    }
  })
})