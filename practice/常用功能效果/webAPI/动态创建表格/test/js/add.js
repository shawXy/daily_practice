var btn = document.querySelector('input[type="button"]');
var username = document.querySelector('.username');
var mail = document.querySelector('.mail');
var phone = document.querySelector('.phone');
var addr = document.querySelector('.addr');
var tbody = document.querySelector('.content table tbody');


btn.addEventListener('click', function() {
  //console.log(username.value)
  if (username.value == '' || mail.value == '' || phone.value == '' || addr.value == '') {
    alert('请将数据填入完全！')
  } else {
    var tr = document.createElement('tr');
    tbody.appendChild(tr);
    var str = '';

    str = str + '<td>' + username.value + '</td>' +
      '<td>' + mail.value + '</td>' +
      '<td>' + phone.value + '</td>' +
      '<td>' + addr.value + '</td>';
    tr.innerHTML = str;

    username.value = '';
    mail.value = '';
    phone.value = '';
    addr.value = '';
  }

});