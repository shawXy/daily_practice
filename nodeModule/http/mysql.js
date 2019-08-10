// 加载mysql模块
const mysql = require('mysql');

// 创建连接
const conn = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '12345678',
  database: 'stu',
  multipleStatements: true
});

// 链接数据库
conn.connect();

// 操作数据库

//===================================查询
// let sql = 'select * from heroes where age<?'; //?是占位符
// conn.query(sql, 17, (err, data) => {
//     if (err) throw err;
//     console.log(data);
//   })

// conn.query('select * from heroes where age < 17', (err, data) => {
//     if (err) throw err;
//     console.log(data);
//   })

// ======================================添加
// let sql = `insert into heroes set ? `;
// let value = {
//   name: 'test1',
//   nickname: 'angry1',
//   age: 12
// }
// conn.query(sql, value, (err, data) => {
//   if (err) throw err;
//   //   console.log(data)
//   if (data.affectedRows > 0) {
//     console.log('添加成功,id为：' + data.insertId);
//   } else {
//     console.log('添加失败！')
//   }
// })

// ==========================================删除
// let sql = 'delete from heroes where name=?';
// conn.query(sql, 'test1', (err, data) => {
//   if (err) throw err;
//   if (data.affectedRows > 0) {
//     console.log('删除成功！');
//   } else
//     console.log('删除失败！');
// })

// ==================================修改
let sql = 'update heroes set ? where name=?';
let value = {
  name: 'test',
  skill: '改变面貌'
}
conn.query(sql, [value, '修改的'], (err, result) => { //一共只有三个参数，所以第二个参数为数组
  if (err) throw err;
  if (result.affectedRows > 0) {
    console.log('修改成功');
  } else
    console.log('修改失败');
})


// 关闭连接
conn.end();