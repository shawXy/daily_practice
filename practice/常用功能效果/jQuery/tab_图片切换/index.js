var index;
$('#left li').on('mouseover', function() {
  index = $(this).index();
  $('#center li').eq(index).show().siblings().hide();
})
$('#right li').mouseover(function() {
  index = $(this).index() + 9;
  //$('#center li').eq(index).show().siblings().hide();
  $('#center li').eq(index).css('display', 'block');
  $('#center li').eq(index).siblings().css('display', 'none');
})