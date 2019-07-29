/*
  食物构造函数：Food
*/

function Food() {
  this.x = 0;
  this.y = 0;
  this.div = $('<div class="food"></div>').appendTo('.map');
}
//为食物添加随机位置的方法
Food.prototype.randomLocation = function() {
    //一个格子20，有多少个格子，食物横向纵向出现的最大范围就是多少
    var maxX = $('.map').width() / 20;
    var maxY = $('.map').height() / 20;
    // 生成随机位置，即随机生成的食物在多少格子上；
    var xNum = parseInt(Math.random() * maxX);
    var yNum = parseInt(Math.random() * maxY);
  }
  /* 
    
    // 方法1：随机食物的位置
    Food.prototype.randomLocation = function () { 
      // 1. 计算地图范围：横向最大的格子数→maxXCount, 实现方式：地图的宽度/20
      var maxXCount = $('.map').width() / 20;
      // 2. 计算地图范围：纵向最大的格子数→maxYCount, 实现方式：地图的高度/20
      var maxYCount = $('.map').height() / 20;
      // 3. 随机出横向的一个格子数，xNum
      var xNum = parseInt(Math.random() * maxXCount);
      // 4. 随机出纵向的一个格子数，yNum
      var yNum = parseInt(Math.random() * maxYCount);
      // 5. 根据随机出的格子数xNum，计算食物的横向位置，赋值给食物的x属性
      this.x = xNum * 20;
      // 6. 根据随机出的格子数yNum，计算食物的纵向位置，赋值给食物的y属性
      this.y = yNum * 20;
      // 7. 把计算好的横向位置设置给食物对应div的样式属性left
      // 8. 把计算好的纵向位置设置给食物对应div的样式属性top
      this.div.css({
        left: this.x,
        top: this.y
      });
    
    };
     */