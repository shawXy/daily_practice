/* 

动画移动的函数封装 

*/

//定义全局变量的定时器标识
var timer;

//封装函数，需要运动的元素，运动的距离，运动的速度（每个延迟时间段运动的长度）
function eleMove(element, targetIns, everyIns) {
  var leftWidth = element.offsetLeft;
  timer = setInterval(function() {
    //   当运动到目标位置之后，停止定时器，防止时间累加，并不会再运行下面的代码
    if (targetIns == leftWidth) {
      clearInterval(timer);
      // return关键字结束函数本次的执行
      return;
    }

    // 判断是不是移动的最后一步
    if (Math.abs(targetIns - leftWidth) < everyIns) {
      leftWidth = targetIns;
    } else {
      // 不是最后一步的话，向左移动(targetIns=0)-everyIns,
      //                 向右移动(target>=leftWidth)+everyIns
      if (targetIns - leftWidth < 0) {
        leftWidth = leftWidth - everyIns;
      } else {
        leftWidth = leftWidth + everyIns;
      }
    }
    // 最后给元素坐标赋值
    element.style.left = leftWidth + 'px';
  }, 100);
}