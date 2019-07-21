var width = $('.banner').width();
var index = 0;
$('.banner').on('swipeLeft', function() {
  //alert('左滑！');
  $('.content').css('left', -index * width);
  index++;
  $('ul li').eq(index).addClass('active').siblings().removeClass();
  var moveval = -index * width;
  //$('.content').css('left', moveval);
  $('.content').animate({ left: moveval }, 200);
  if (index == 4) {
    index = 0
    $('ul li').eq(index).addClass('active').siblings().removeClass();
  }

})

$('.banner').on('swipeRight', function() {
  //alert('右滑！');
  if (index == 0) {
    index = 4;
    $('.content').css('left', -index * width);
  }
  index--;
  //console.log('****' + index)
  $('ul li').eq(index).addClass('active').siblings().removeClass();
  var moveval = -index * width;
  $('.content').animate({ left: moveval }, 200);

})