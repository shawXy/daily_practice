var div = document.querySelector('.inner');
var turnRight = document.querySelector('.turnright');
var turnLeft = document.querySelector('.turnleft');
var setTime;
//点击之前清除旧的计时器，防止叠加
clearInterval(setTime);
// 点击向左运动按钮， 使盒子向左运动
turnRight.onclick = function() {
  var ofleft = div.offsetLeft;
  //添加定时器，让盒子在点击的时候自己动起来
  setTime = setInterval(function() {

    //当盒子运动到某一位置后，停止运动
    if (ofleft == 1200) {
      clearInterval(setTime);
      //防止在停止之后点击向左运动会继续运动
      return;
    }
    //如果是移动60这种，相加不会等于1000，则不会停止，需要做处理
    if (1200 - ofleft < 60) {
      ofleft = 1200;
    } else {
      ofleft = ofleft + 60;
    }
    div.style.left = ofleft + 'px';
  }, 100);
}
turnLeft.onclick = function() {
  var ofleft = div.offsetLeft;
  //添加定时器，让盒子在点击的时候自己动起来
  setTime = setInterval(function() {

    //当盒子运动到某一位置后，停止运动
    if (ofleft == 0) {
      clearInterval(setTime);
      //防止在停止之后点击向左运动会继续运动
      return;
    }
    //如果是移动60这种，相加不会等于1000，则不会停止，需要做处理
    if (Math.abs(0 - ofleft) < 60) {
      ofleft = 0;
    } else {
      ofleft = ofleft - 60;
    }
    div.style.left = ofleft + 'px';
  }, 100);
}