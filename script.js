var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

function filterTodo(e) {
  const todos = todoList.childNodes;
  todos.forEach(function(todo) {
      switch(e.target.value) {
          case "all": 
              todo.style.display = "flex";
              break;
          case "completed": 
              if(todo.classList.contains("completed")) {
                  todo.style.display = "flex";
              } else {
                  todo.style.display = "none";
              }
              break;
          case "incomplete":
              if(!todo.classList.contains("completed")) {
                  todo.style.display = "flex";
              } else {
                  todo.style.display = "none";
              }
              break;
      }
  });
}

function saveLocalTodos(todo) {
  let todos;
  if(localStorage.getItem("todos") === null) {
      todos = [];
  } else {
      todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function getLocalTodos() {
  let todos;
  if(localStorage.getItem("todos") === null) {
      todos = [];
  } else {
      todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.forEach(function(todo) {
      const todoDiv = document.createElement("div");
      todoDiv.classList.add("todo");
      const newTodo = document.createElement("li");
      newTodo.innerText = todo;
      newTodo.classList.add("todo-item");
      todoDiv.appendChild(newTodo);
      const completedButton = document.createElement("button");
      completedButton.innerHTML = '<i class="fas fa-check-circle"></li>';
      completedButton.classList.add("complete-btn");
      todoDiv.appendChild(completedButton);
      const trashButton = document.createElement("button");
      trashButton.innerHTML = '<i class="fas fa-trash"></li>';
      trashButton.classList.add("trash-btn");
      todoDiv.appendChild(trashButton);
      todoList.appendChild(todoDiv);
  });
}

function removeLocalTodos(todo) {
  let todos;
  if(localStorage.getItem("todos") === null) {
      todos = [];
  } else {
      todos = JSON.parse(localStorage.getItem("todos"));
  }

  const todoIndex = todo.children[0].innerText;
  todos.splice(todos.indexOf(todoIndex), 1);
  localStorage.setItem("todos", JSON.stringify(todos));
}