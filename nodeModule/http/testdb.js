const conn = require('./db');
let sql = 'select * from heroes';
conn.query(sql, null, (err, data) => {
  if (err) throw err;
  console.log(data)
})
conn.end();