var offTop = $('#box2').offset().top;
$(window).scroll(function() {

  var scroTop = $(window).scrollTop();
  if (scroTop > offTop) {
    $('.top').show();
    $('#box2').addClass('active');
  } else {
    $('.top').hide();
    $('#box2').removeClass('active');
  }
})
$('#_top').click(function() {
  $('html,body').animate({ scrollTop: 0 }, 200);
})