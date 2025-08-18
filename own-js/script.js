let todoList = [{ name: "make dinner", date: "02-02-1002" }];

renderTodoList();
//RENDER html;

function renderTodoList() {
  let todoListHTML = "";

  todoList.forEach((todoObject, index) => {
    let { name, date } = todoObject;
    let html = `
    <div class="text-light">${name}</div>
    <div class="text-light">${date}</div>
    <button class="btn btn-danger js-delete-todo-btn">Delete</button>
    `;
    todoListHTML += html;
  });

  //JUST IN CASE YOU NEED TO USE FOR LOOP OVER FOREACH...

  // for (i = 0; i < todoList.length; i++) {
  //   let todoObject = todoList[i];
  //   let { name, date } = todoObject;
  //   let html = `
  //   <div class="text-light">${name}</div>
  //   <div class="text-light">${date}</div>
  //   <button class="btn btn-danger" onclick="todoList.splice(${i}, 1); renderTodoList();">Delete</button>
  //   `;
  //   todoListHTML += html;
  // }
  console.log(todoListHTML);

  document.querySelector(".none").innerHTML = todoListHTML;

  document.querySelectorAll('.js-delete-todo-btn').forEach((deleteButton, index) => {
    deleteButton.addEventListener('click' , () => {
      todoList.splice(index, 1); 
      renderTodoList();
    });
  });
}

let addTodoBtn = document.querySelector('.js-add-todo');
addTodoBtn.addEventListener('click' , () => {
  addTodo();
});

// let addTodoButton = document.querySelector('.js-add-todo');
// addTodoButton.addEventListener('keydown' , (event) => {
//   if(event.key === 'Enter'){
//     addTodo();
//   }
// });


//Function addTODO

function addTodo() {
  let nameInputElement = document.querySelector("#js-name-input");
  let name = nameInputElement.value;

  let dateInputElement = document.querySelector("#js-date-input");
  let date = dateInputElement.value;

  todoList.push({ name: name, date: date });
  console.log(todoList);

  nameInputElement.value = "";
  dateInputElement.value = "";

  renderTodoList();
}
