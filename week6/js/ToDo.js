//import utils from './utilities.js';
import ls from './ls.js';

document.querySelector('#addBtn').onclick = newTodo;

function loadTodos() {
    const todoList = ls.getTodoList();

    todoList.forEach(todo => {
        const el = createTodoElement(todo)
        addToList(el);
    })
}

function newTodo() {
    //console.log("we got here");  This works
    const todo = createTodo();
    const todoDiv = createTodoElement(todo);
    addToList(todoDiv);
    ls.saveTodo(todo);
}

function createTodo() {
    const input = document.querySelector('#todoInput');
    const newTodo = {id: Date.now(), content: input.value, complete: false} //will just change complete to true when click complete button. think about styling
    input.value = '';
    return newTodo;
}

function createTodoElement(todo) {
    //todo div
    console.log(todo);
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    //complete button
    const completeBtn = document.createElement('button');
    completeBtn.classList.add('complete-btn');
    completeBtn.innerText = "complete";

    //todo content
    const todoContent = document.createElement('div');
    todoContent.innerText = todo.content;
    todoContent.classList.add('todo-content');

    //delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('data-id', todo.id);
    deleteBtn.classList.add('todo-delete-btn');
    deleteBtn.innerText = "X";
    deleteBtn.onclick = deleteTodo;

    todoDiv.appendChild(completeBtn);
    todoDiv.appendChild(todoContent);
    todoDiv.appendChild(deleteBtn);

    return todoDiv;
}

function addToList(todoDiv) {
    //add to the document
    document.querySelector('#todos').appendChild(todoDiv);
}

//event handler
function deleteTodo(e) {
    const btn = e.currentTarget;
    ls.deleteTodo(btn.getAttribute('data-id'));  //check where ls is coming from
    document.querySelector('#todos').innerHTML = '';
    loadTodos();
}


//add a Todos class and make it the default export for the module
//import helper functions here

//add a variable to store our list of tasks to the Todos.js module
//todoList = null;


//create saveTodo(task, key) 


// function getTodos(key) {

// }

//complete Todos.listTodos()

//complete Todos.completeTodos()

//complete Todos.removeTodos()

//complete Todos.filterTodos()



