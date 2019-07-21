var heads1 = ['姓名', '年龄', '性别', '学号', '薪资', '城市', '操作'];
var datas1 = [
  { name: '欧阳霸天', age: 19, gender: '男', stuId: '1001', salary: '20000', city: '上海' },
  { name: '令狐霸天', age: 19, gender: '男', stuId: '1001', salary: '20000', city: '北京' },
  { name: '诸葛霸天', age: 19, gender: '男', stuId: '1001', salary: '20000', city: '南京' },
  { name: '欧阳炸炸', age: 19, gender: '男', stuId: '1001', salary: '20000', city: '南京' },
  { name: '欧阳炸炸', age: 19, gender: '男', stuId: '1001', salary: '20000', city: '南京' },
  { name: '欧阳炸炸1', age: 19, gender: '男', stuId: '1001', salary: '20000', city: '南京' },
  { name: '欧阳炸炸2', age: 19, gender: '男', stuId: '1001', salary: '20000', city: '南京' },
  { name: '欧阳炸炸3', age: 19, gender: '男', stuId: '1001', salary: '20000', city: '南京' },
  { name: '欧阳炸炸4', age: 19, gender: '男', stuId: '1001', salary: '20000', city: '南京' }

];



var tb_main = document.querySelector('.tb_main');

function allData(elements, heads1, datas1) {
  var table = document.createElement('table');
  elements.appendChild(table);
  var thead = document.createElement('thead');
  var tbody = document.createElement('tbody');
  table.appendChild(thead);
  table.appendChild(tbody);
  var thead_tr = document.createElement('tr');
  thead.appendChild(thead_tr);
  for (var i = 0; i < heads1.length; i++) {
    var th = document.createElement('th');
    thead_tr.appendChild(th);
    th.innerHTML = heads1[i];
  }
  for (var i = 0; i < datas1.length; i++) {
    var tbody_tr = document.createElement('tr');
    tbody.appendChild(tbody_tr);
    for (key in datas1[i]) {
      var td = document.createElement('td');
      tbody_tr.appendChild(td);
      td.innerHTML = datas1[i][key];
    }
    var deletetd = document.createElement('td');
    tbody_tr.appendChild(deletetd);
    deletetd.innerHTML = '<a href="javascript:">删除</a>';
  }


  //删除行
  var del = document.querySelectorAll('a');
  for (var i = 0; i < del.length; i++) {
    del[i].onclick = function() {
      var conf = confirm('您确定要删除此记录么？');
      if (conf) {
        this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
      }

    }
  }
}
allData(tb_main, heads1, datas1);