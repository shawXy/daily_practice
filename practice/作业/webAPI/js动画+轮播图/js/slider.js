var banner = document.querySelector('.banner');
var leftBtn = document.querySelector('.leftBtn');
var rightBtn = document.querySelector('.rightBtn');
var lis = document.querySelectorAll('.pointer li');
var img_ul = document.querySelector('.img_ul');

/* 实现轮播图的思路步骤：
1、点击左按钮，图片向左滚动切换
2、点击右按钮，图片向右切换
3、点击小点点，图片也会切换
4、实现图片轮播的无缝衔接
    多添加一张与第一张一样的图片，当遇到下标为4那张图片时，直接将其改为下标0
5、图片实现自动轮播
6、鼠标进入盒子，图片停止，离开盒子，图片继续轮播
*/
var bannerWidth = banner.offsetWidth; //容器的宽度
var index = 0; //设置图片的下标，默认第一张是0
rightBtn.onclick = function() {
    //点击一次，index下标加一
    //   清除除当前以外的小点点样式， index在自加之前是上一个图片的下标
    lis[index].className = '';
    // 当index为0时， 设置移出容器的宽度为0， 初始化宽度；
    if (index == 0) {
      img_ul.style.left = 0 + 'px';
    }
    index++;
    //限制index不超出
    /* if (index > 3) {
      index = 3;
    } */

    //移出容器的宽度是 =移出的宽度（每移出一次就是一张图片的宽度也就是容器的宽度）*移出图片的个数（index）
    //当下标为0时，移出容器的宽度0，下标为1也就是第二张图片时，移出的宽度是一张图片的宽度（1*容器宽）
    //下标为0时，按坐标轴正方向，容器的左边为0，移出的宽度为负值
    var moveWidth = -index * bannerWidth;
    //调用动画移动的封装函数
    eleMove(img_ul, moveWidth, 100);
    //当遇到下标为4了，改为0，然后从0 开始重新
    if (index == 4) {
      index = 0;
    }
    //   小点点添加样式,下标与index一样
    lis[index].className = 'active';

  }
  //向左滚动
leftBtn.onclick = function() {
    //点击一次，index下标减一
    //   清除除当前以外的小点点样式， index在自减之前是上一个图片的下标
    lis[index].className = '';
    index--;
    //限制index不超出
    if (index < 0) {
      index = 3;
      //此时在容器的是最后一张图片，下标为4，前面有四张图片的位置；
      img_ul.style.left = -4 * bannerWidth + 'px';
    }
    //移出容器的宽度是 =移出的宽度（每移出一次就是一张图片的宽度也就是容器的宽度）*移出图片的个数（index）
    //当下标为0时，移出容器的宽度0，下标为1也就是第二张图片时，移出的宽度是一张图片的宽度（1*容器宽）
    //下标为0时，按坐标轴正方向，容器的左边为0，移出的宽度为负值
    var moveWidth = -index * bannerWidth;
    //调用动画移动的封装函数
    eleMove(img_ul, moveWidth, 100);
    //   小点点添加样式,下标与index一样
    lis[index].className = 'active';

  }
  // 点击小点点，图片也会切换,给每个小点添加下标属性跟index对应
for (var i = 0; i < lis.length; i++) {
  lis[i].idx = i;
}
var pointer = document.querySelector('.pointer');
pointer.onclick = function(e) {
  if (e.target.nodeName == 'LI') {
    lis[index].className = '';
    index = e.target.idx;
    var moveWidth = -index * bannerWidth;
    //调用动画移动的封装函数
    eleMove(img_ul, moveWidth, 100);
    //   小点点添加样式,下标与index一样
    lis[index].className = 'active';
  }
}

//自动轮播
// 相当于，每隔一段时间就点击一次右按钮
var setTime = window.setInterval(function() {
  rightBtn.onclick();
}, 3000);
//鼠标进入进出
// 鼠标移出时，开启定时器
banner.onmouseout = function() {
    setTime = window.setInterval(function() {
      rightBtn.onclick();
    }, 3000);

  }
  // 鼠标进入时，计时器清除
banner.onmouseover = function() {

  window.clearInterval(setTime);
}