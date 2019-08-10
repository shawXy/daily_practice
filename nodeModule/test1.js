console.log('this is the first file!');
console.log('--------------------------load the second file');
require('./test2.js');
console.log('--------------------------test __filename and __dirname')
console.log('this is __dirname:' + __dirname);
console.log('this is __filename:' + __filename);