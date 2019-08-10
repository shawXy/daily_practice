//实现文件上传功能的模块
// 加载模块
const multer = require('multer');
//简单配置
const uploads = multer({
    dest: __dirname + '/uploads'
  })
  //复杂配置
  /* const uploads = multer({
    storage: multer.diskStorage({
      destination: function(req, file, callback) {
        callback(err, __dirname + '/uploads');
      },
      filename: function(req, file, callback) {
        callback(err, file.fieldname + '-' + Date.now())
      }
    })
  }) */



const express = require('express');
const app = express();

const bodypaser = require('body-parser');

// 单文件上传
/* app.post('/add', uploads.single('hero'), (req, res) => { //这里的hero值得是文件上传的表单的name值
  console.log(req.body);
  console.log(req.file);
  res.send('文件上传成功')
}) */

// 多文件上传
// app.post('add', uploads.array('hero', 2), (req, res) => { //这里的hero指的是表单名，2指的是上传数量不能超过2个
//   console.log(req.body);
//   console.log(req.files);
//   res.send('文件上传成功')
// })

// 多个文件域上传
let ups = uploads.fields([
  { name: 'hero1', maxCount: 3 },
  { name: 'hero2', maxCount: 5 }
])
app.post('/add', ups, (req, res) => {
  console.log(req.body);
  console.log(req.files);
  res.send('文件上传成功')
})