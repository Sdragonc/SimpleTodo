var todo = document.getElementsByClassName('jobtodo')
var btn = document.getElementsByName("button");

btn[0].addEventListener("click", function(){
  var list = document.createElement("li");
  var check = document.createElement("button")
  var todolist = document.getElementsByClassName("todolist");
  list.innerText = todo[0].value;
  check.innerText = "완료";
  todolist[0].appendChild(list);
  list.appendChild(check);
  todo[0].value = "";
  check.addEventListener("click", function(){
    var donelist = document.getElementsByClassName('donelist');
    var deleter = document.createElement("button");
    deleter.innerText = "제거"
    todolist[0].removeChild(list);
    list.removeChild(check);
    donelist[0].appendChild(list);
    list.appendChild(deleter);
    deleter.addEventListener("click", function(){
      donelist[0].removeChild(list);
      list.removeChild(deleter);
    })
  })

})
