// 时间格式化
function getCurrentDate() {
  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();
  month = month < 10 ? '0' + month : month;
  day = day < 10 ? '0' + day : day;
  hour = hour < 10 ? '0' + hour : hour;
  minute = minute < 10 ? '0' + minute : minute;
  second = second < 10 ? '0' + second : second;
  var time = year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
  // console.log(time)
  return time;
}


var btn = document.getElementById('send');
var ul = document.querySelector('.contentList ul');
var textarea = document.querySelector('textarea');
var userCount = document.querySelector('.useCount');
textarea.oninput = function() {
    userCount.innerHTML = this.value.length;
  }
  //点击发布按钮发布内容
btn.onclick = function() {
  // 获取文本域里的内容
  var content = textarea.value;
  // alert(content)
  // 判断内容是否为空
  if (content == '' || content == undefined) {
    alert('内容不能为空！');
  } else {
    // 头像+username+发布于：+time+内容
    // 创建留言的li集合,并添加到内容列表
    var newLi = document.createElement('li');
    ul.insertBefore(newLi, ul.firstElementChild);

    //创建放账号信息等内容的div，并添加到li里
    var userDiv = document.createElement('div');
    newLi.appendChild(userDiv);
    userDiv.className = 'info';
    //创建头像，用户名，发布时间等内容，并放到userDiv里
    var img = document.createElement('img');
    userDiv.appendChild(img);
    img.src = "./images/03.jpg"
    var span = document.createElement('span');
    userDiv.appendChild(span);
    span.innerHTML = '百里守约';
    var issue = document.createElement('p');
    userDiv.appendChild(issue);
    issue.innerHTML = '发布于：' + getCurrentDate();
    // 创建留言内容div，并添加到li里
    var contentDiv = document.createElement('div');
    newLi.appendChild(contentDiv);
    contentDiv.className = 'content';
    contentDiv.innerHTML = content;

  }
  //清空textare内容，清空字数统计
  textarea.value = '';
  userCount.innerHTML = '0';

}