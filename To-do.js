// select the form, input, and list elements
const form = document.querySelector('#todo-form');
const input = document.querySelector('#todo-input');
const list = document.querySelector('#todo-list');

// create an array to store the to-do items
let todos = [];

// listen for form submission
form.addEventListener('submit', function(event) {
  event.preventDefault(); // prevent page refresh
  
  // get the value of the input field and trim any whitespace
  const todoText = input.value.trim();
  
  if (todoText !== '') { // make sure the input is not empty
    // create a new todo object with a random ID and the input text
    const todo = {
      id: Date.now(),
      text: todoText
    };
    
    // add the todo object to the todos array
    todos.push(todo);
    
    // clear the input field
    input.value = '';
    
    // update the todo list on the page
    updateTodoList();
  }
});

// listen for click events on the todo items
list.addEventListener('click', function(event) {
  if (event.target.classList.contains('todo-item')) {
    // find the clicked todo item by its ID
    const todoId = parseInt(event.target.dataset.id);
    const todoIndex = todos.findIndex(todo => todo.id === todoId);
    
    if (todoIndex >= 0) { // make sure the todo item exists
      // remove the todo item from the todos array
      todos.splice(todoIndex, 1);
      
      // update the todo list on the page
      updateTodoList();
    }
  }
});

// function to update the todo list on the page
function updateTodoList() {
  // clear the todo list on the page
  list.innerHTML = '';
  
  // loop through the todos array and create a new list item for each one
  todos.forEach(function(todo) {
    const listItem = document.createElement('li');
    listItem.classList.add('todo-item');
    listItem.dataset.id = todo.id;
    listItem.textContent = todo.text;
    list.appendChild(listItem);
  });
}
