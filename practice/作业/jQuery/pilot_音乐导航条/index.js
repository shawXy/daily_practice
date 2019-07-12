/* $('.nav').on('click', 'li', function() {
  var index = $(this).index();
  var idx = index + 1;
  //$('audio')[index].src = 'mp3/' + idx + '.mp3';
  $('audio')[index].load();
  $('audio')[index].play();
  $(this).find('span').animate({ top: 0 }, 200).end()
    .find('span').animate({ top: 60 }, 200).end()
    .siblings().find('span').animate({ top: 60 }, 200);


}) */
/* $(document).on('keydown', function(e) {
  var index = e.keyCode - 49;
  //console.log(index)
  var idx = index + 1;
  if (idx <= 7) {
    //$('audio')[index].src = 'mp3/' + idx + '.mp3';
    $('audio')[index].load();
    $('audio')[index].play();
    $('.nav li').eq(index).find('span').animate({ top: 0 }, 200).end()
      .find('span').animate({ top: 60 }, 200).end()
      .siblings().find('span').animate({ top: 60 }, 200);
  }


}) */
$('.nav').on('mousedown', 'li', function() {
  var index = $(this).index();
  var idx = index + 1;
  //$('audio')[index].src = 'mp3/' + idx + '.mp3';
  $('audio')[index].load();
  $('audio')[index].play();
  $(this).find('span').stop().animate({ top: 0 }, 100);

})
$('.nav').on('mouseup', 'li', function() {
  $(this).find('span').stop().animate({ top: 60 }, 100);
})

$(document).on('keydown', function(e) {
  var index = e.keyCode - 49;
  //console.log(index)
  var idx = index + 1;
  if (idx <= 7) {
    $('span').eq(index).trigger('mousedown');
  }


})
$(document).on('keyup', function(e) {
  var index = e.keyCode - 49;
  //console.log(index)
  var idx = index + 1;
  if (idx <= 7) {
    $('span').eq(index).trigger('mouseup');
  }


})