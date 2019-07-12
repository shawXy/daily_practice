// 获取输入框， 待完成事项以及已完成事项的ul
var textInput = document.querySelector('#todolist');
var un_ul = document.querySelector('.unfinished ul');
var al_ul = document.querySelector('.finished ul');
textInput.onkeyup = isEnter;
var unString = '';
var hasString = '';


function isEnter(e) {
  if (e.keyCode == 13) {
    if (textInput.value.length == 0) {
      alert("内容不能为空");
    } else {
      //console.log(textInput.value);
      /* var uli = document.createElement('li');
      un_ul.append(uli);
      var uinch = document.createElement('input');
      uinch.type = 'checkbox';
      uli.append(uinch);
      var u_p = document.createElement('p');
      uli.append(u_p);
      u_p.innerHTML = textInput.value;
      var u_a = document.createElement('a');
      uli.append(u_a);
      u_a.href = 'javascript:';
      u_a.innerText = "一"; */
      var content = document.querySelectorAll('.unfinished ul li p');
      for (var i = 0; i < content.length; i++) {
        if (textInput.value == content[i].innerText) {
          alert('内容已存在');
          textInput.value = '';
        }

      }
      if (textInput.value != '') {
        unString += '<li>' +
          '<input type="checkbox">' +
          '<p>' + textInput.value + '</p>' +
          '<a href="javascript:">一</a>' +
          '</li>';
      }

      un_ul.innerHTML = unString;

      changeCount();
      textInput.value = '';

    }


  }

}
un_ul.onclick = function(e) {
  if (e.target.nodeName == 'INPUT') {
    if (e.target.checked) {
      al_ul.append(e.target.parentNode);

    }
  }
  if (e.target.nodeName == 'A') {
    var makesure = confirm('确定要移除该日程么？');
    if (makesure) {
      e.target.parentNode.parentNode.removeChild(e.target.parentNode);
    }

  }
  changeCount();
}
al_ul.onclick = function(e) {
  if (e.target.nodeName == 'INPUT') {
    if (!e.target.checked) {
      un_ul.append(e.target.parentNode);

    }

  }
  if (e.target.nodeName == 'A') {
    var makesure = confirm('确定要移除该日程么？');
    if (makesure) {
      e.target.parentNode.parentNode.removeChild(e.target.parentNode);
    }

  }
  changeCount();
}

function changeCount() {
  var uli = document.querySelectorAll('.unfinished ul li');
  var uncount = document.querySelector('.uncount');
  uncount.innerHTML = uli.length;
  var ali = document.querySelectorAll('.finished ul li');
  var alcount = document.querySelector('.alcount');
  alcount.innerHTML = ali.length;
}























/* 

<script>
  // 声明一个空数组
  var todolist = [];

  function addTodolist(e) {
    // 声明一个对象储存用户数据
    var obj_list = {
      todo: "", //用于存储用户输入的数据
      done: false //初始化用户输入的数据属性，以便对用户待办事项进行分类
    };

    document.getElementById("add_list").value = document.getElementById("add_list").value.trim();
    if (document.getElementById("add_list").value.length === 0) {
      alert("不能为空");
      return;
    }

    obj_list.todo = document.getElementById("add_list").value;
    todolist.push(obj_list);

    // saveData(todolist);

    document.getElementById("add_list").value = ""; //初始化输入框
    load(); //将用户输入的数据添加至dom节点
    document.getElementById("add_list").focus();
  }
</script>
<script>
  function load() {
    var todo = document.getElementById("todolist"),
      done = document.getElementById("donelist"),
      todocount = document.getElementById("todocount"),
      donecount = document.getElementById("donecount"),
      todoString = "",
      doneString = "",
      todoCount = 0,
      doneCount = 0;
    document.getElementById("add_list").focus();

    // todolist = loadData();

    //todolist数组对象里若包含用户输入数据，则将其添加至dom节点；若为空对象，则初始化页面。
    if (todolist != null) {
      for (var i = 0; i < todolist.length; i++) {
        if (!todolist[i].done) {
          todoString += "<li>"
            //通过onchange事件，复选框值有改变则调用update函数，并改变输入数据“done”属性的布尔值，这样
            //下次load()后，这段数据会进入不同的分组，未完成的事项分入已完成事项组，已完成事项分入未完成事项组
            //点击事项调用edit函数
            //点击“-”，调用remove函数
            +
            "<input type='checkbox' onchange='update(" + i + ", \"done\", true)'>" +
            "<p id='p-" + i + "' onclick='edit(" + i + ")'>" + todolist[i].todo + "</p>" +
            "<a onclick='remove(" + i + ")'>-</a>" +
            "</li>"; //将每次用户输入的数据，通过节点<p>利用id标记，以便后续编辑功能定位
          todoCount++;
        } else {
          doneString += "<li>" +
            "<input type='checkbox' " +
            "onchange='update(" + i + ", \"done\", false)' checked>" +
            "<p id='p-" + i + "' onclick='edit(" + i + ")'>" + todolist[i].todo + "</p>" +
            "<a onclick='remove(" + i + ")'>-</a>" +
            "</li>";
          doneCount++;
        }
      }

      todo.innerHTML = todoString;
      done.innerHTML = doneString;
      todocount.innerHTML = todoCount;
      donecount.innerHTML = doneCount;
    } else {
      todo.innerHTML = "";
      done.innerHTML = "";
      todocount.innerHTML = 0;
      donecount.innerHTML = 0;
    }
  }
</script>
<script>
  function edit(i) {
    var p = document.getElementById('p-' + i),
      pContent = p.innerHTML,
      inputId;

    //通过upadate函数对todolist数组相应项进行更新，将用户输入的内容写入到todolist数组相应项的todo属性中
    function confirm() {
      if (inputId.value.length === 0) {
        p.innerHTML = pContent;
        alert("内容不能为空");
      } else {
        update(i, "todo", inputId.value); //修改事项内容后，更新数组里对应项"todo"属性的值，以便更新dom节点
      }
    }

    //结合keypress事件，按下enter键，调用confirm函数
    function enter(e) {
      if (e.keyCode == 13) {
        confirm();
      }
    }

    p.innerHTML = "<input type='text' id='input-" + i + "' value='" + pContent + "'>";
    inputId = document.getElementById('input-' + i);
    inputId.focus();
    inputId.setSelectionRange(0, inputId.value.length);
    inputId.onblur = confirm; //表单控件失去焦点，调用confirm函数，即对页面内容进行更新
    inputId.onkeypress = enter; //对按键事件进行监控
  }
</script>
<script>
  function update(i, field, value) {
    todolist[i][field] = value;
    // saveData(todolist);
    load();
  }
</script>
<script>
  function remove(i) {
    todolist.splice(i, 1);

    // saveData(todolist); //相同名称的缓存会覆盖，更新缓存

    load();
  }
</script>
<script>
  window.addEventListener("load", load); //页面加载完毕调用load函数
  document.getElementById("add_list").onkeypress = function (event) {
    if (event.keyCode === 13) {
      addTodolist();
    }
  };
</script>

</html>


*/