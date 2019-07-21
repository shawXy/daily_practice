$(function() {

    // 左侧全选反选操作
    $('#all').click(function() {
      $('input[name="boxs"]').prop('checked', $(this).prop('checked'));
    })

    $('input[name="boxs"]').on('click', function() {
      var len = $('input[name="boxs"]').length;
      var ch_len = $('input[name="boxs"]:checked').length;
      $('#all').prop('checked', len == ch_len);
    })


    //点击添加按钮
    $('.m-table tbody a').on('click', function() {
      //console.log($(this).parent().parent().index());
      var pid = $(this).parent().parent().index();
      var parentTr = $(this).parent().parent().children('td');
      parentTr.eq(0).children().prop('checked', 'checked');
      var text = parentTr.eq(1).text();
      //console.log(text);
      if ($(this).text() == "已添加") {
        // alert('存在已添加数据！');
        return false;
      } else {
        var str = '';
        str += '<tr>' +
          '<td><input type="checkbox" name="boxs2"></td>' +
          '<td>' + text + '</td>' +
          '<td><a href="javascript:" pid="' + pid + '">x</a></td>' +
          '</tr>';
        $('.items tbody').append(str);
        $(this).text('已添加');
        $(this).addClass('already');
      }
      /* $('.items tbody').empty(); */
    })

    //批量添加
    $('.mt input[type="button"]').click(function() {
      var str = '';
      $('input[name="boxs"]:checked').each(function() {

        var td_a = $(this).parent().parent().find('a');
        td_a.trigger('click');

      })
      changeNum();

      //$('input[name="boxs"]').prop('checked', false);
    })



    //右侧全选反选
    $('#all2').click(function() {
      $('input[name="boxs2"]').prop('checked', $(this).prop('checked'));
    })

    $('input[name="boxs2"]').on('click', function() {
        var len = $('input[name="boxs2"]').length;
        var ch_len = $('input[name="boxs2"]:checked').length;
        $('#all2').prop('checked', len == ch_len);
      })
      //清空左侧列表
    $('.removeall').click(function() {
      $('.items tbody').empty();
      $('input[name="boxs"]').each(function() {
        var td_a = $(this).parent().parent().find('a');
        td_a.text('添加');
        td_a.removeClass('already');
      })
      $('#all2').prop('checked', false);
      $('#all').prop('checked', false);
      $('input[name="boxs"]').prop('checked', false);
      changeNum();
    })



  })
  //待提交数量更新
function changeNum() {
  var tr_len = $('.items tbody tr').length;
  //console.log(tr_len);
  $('.mrt p span').html(tr_len);
}

//点击x按钮
$('.items tbody').on('click', 'a', function() {
  // alert(111);
  $(this).parent().parent().remove();
  var index = Number($(this).attr('pid'));
  console.log(index);
  $('.m-table tbody tr').eq(index).find('a').text('添加').removeClass('already');
  $('.m-table tbody tr').eq(index).find('input').prop('checked', false);
  changeNum();
});


//批量删除
$('.remove').on('click', function() {
  $('input[name="boxs2"]:checked').each(function() {
    //var index = Number($(this).attr('pid'));
    $(this).parent().parent().find('a').trigger('click');
  })
})