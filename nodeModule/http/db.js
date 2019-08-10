// 封装成函数

/* module.exports = (sql, value, callback) => {
  //加载mysql模块
  const mysql = require('mysql');
  //创建连接
  const conn = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '12345678',
    database: 'stu',
    multipleStatements: true
  });

  //连接数据库
  conn.connect();
  //操作数据
  conn.query(sql, value, callback);

  // 关闭连接
  conn.end();
} */

// 直接封装
//加载mysql模块
const mysql = require('mysql');
//创建连接
const conn = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '12345678',
  database: 'stu',
  multipleStatements: true
});

//连接数据库
conn.connect();
//操作数据


// 关闭连接
// conn.end();

module.exports = conn;