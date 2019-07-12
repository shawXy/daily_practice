var lou_offTop = $('.jia').offset().top;
$(window).scroll(function() {
  var lou_scroTop = $(window).scrollTop();
  if (lou_scroTop >= lou_offTop) {
    $('.subnav').show();
  } else {
    $('.subnav').hide();
  }

  $('.jd').each(function() {
    var index = $(this).index();
    if (lou_scroTop >= $(this).offset().top) {
      $('.subnav li').eq(index).addClass('current').siblings().removeClass('current');
    }
  })

});

$('.subnav li').click(function() {
  var index = $(this).index();
  $('html,body').animate({ scrollTop: $('.jd').eq(index).offset().top }, 200)
})
$('.back').click(function() {
  $('html,body').animate({ scrollTop: 0 }, 200);
})