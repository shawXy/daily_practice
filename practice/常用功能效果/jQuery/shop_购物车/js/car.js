//全选反选功能
$('#all').click(function() {
  $('tbody input[type="checkbox"]').prop('checked', $(this).prop('checked'));
  getSum();
})

function allChecked() {
  var len = $('tbody input[type="checkbox"]').length;
  var chlen = $('tbody input[type="checkbox"]:checked').length;
  if (len == chlen) {
    $('#all').prop('checked', true);
  } else {
    $('#all').prop('checked', false);
  }
  getSum();
}
$('tbody input[type="checkbox"]').click(function() {
  allChecked();

})
delGoods();
// 总价=小计的和
// 计算总价和商品总数
function getSum() {
  // 获取被选中的复选框
  var goods = $('tbody input[type="checkbox"]:checked');
  var totalNum = 0;
  var totalPrice = 0;
  goods.each(function() {
    totalPrice += Number($(this).parent().parent().find('.xiaoji').text());
    totalNum += Number($(this).parent().parent().find('input[type="text"]').val());
  })
  $('#totalCount').text(totalNum);
  $('#totalPrice').text(totalPrice + '￥');
}

//商品数量的加减计算add reduce
var num;
$('tbody input[type="text"]').each(function() {
  num = Number($(this).val());
  if (num == 1) {
    $(this).prev().addClass('disabled');
    $(this).prev().attr('disabled', true);
  } else {
    $(this).prev().removeClass('disabled');
    $(this).prev().attr('disabled', false);
  }
  allChecked();
})
$('.add').click(function() {
  var reduce = $(this).prev().prev();
  var thisTd = $(this).parent().parent();
  num = Number($(this).prev().val());
  num++;
  $(this).prev().val(num);
  var countPrice = num * Number(thisTd.prev().children().text());
  thisTd.next().children().text(countPrice);
  thisTd.parent().find('input[type="checkbox"]').prop('checked', true);
  getSum();
  if (num != 1) {
    reduce.removeClass('disabled');
    reduce.attr('disabled', false);
  } else {
    reduce.addClass('disabled');
    reduce.attr('disabled', true);
  }
  allChecked();
})
$('.reduce').click(function() {
  //alert(11)
  //console.log(num)
  num = Number($(this).next().val());
  num--;
  if (num == 1) {
    $(this).addClass('disabled');
    $(this).attr('disabled', true);
  } else {
    $(this).removeClass('disabled');
    $(this).attr('disabled', false);
  }
  $(this).next().val(num);
  var thisTd = $(this).parent().parent();
  var countPrice = num * Number(thisTd.prev().children().text());
  thisTd.next().children().text(countPrice);
  thisTd.parent().find('input[type="checkbox"]').prop('checked', true);
  getSum();
})

//删除列表中的商品
$('.del').click(function() {
  var sure = confirm('确定要删除么？');
  if (sure) {
    $(this).parent().parent().remove();
    getSum();
  }

})

//删除所选项
function delGoods() {

  $('.del-all').click(function() {
    var goods = $('tbody input[type="checkbox"]:checked');
    if (goods.length == 0) {
      alert('请选择商品！');
    } else {
      var sure = confirm('确定要删除所选商品么？该操作不可撤销！');
      if (sure) {

        goods.each(function() {
          $(this).parent().parent().remove();
          $('#all').prop('checked', false);
          getSum();
        })
      }
    }

  })
}

//清空购物车
$('.clear').click(function() {
  var sure = confirm('确定要清空购物车吗？该操作不可撤销！');
  if (sure) {
    //$('tbody tr').remove();
    $('tbody').empty();
    $('#totalCount').text(0);
    $('#totalPrice').text(0 + '￥');
    $('#all').prop('checked', false);
  }
})