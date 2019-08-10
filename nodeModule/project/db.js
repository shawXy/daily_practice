// 连接mysql
module.exports = (sql, values, callback) => {
  const mysql = require('mysql');
  const conn = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '12345678',
    database: 'stu',
    multipleStatements: true
  })
  conn.connect();
  conn.query(sql, values, callback);
  conn.end();
}