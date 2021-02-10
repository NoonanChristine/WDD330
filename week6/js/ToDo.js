import utils from './utilities.js';
import ls from './ls.js';

document.querySelector('#addBtn').onclick = newTodo;
document.querySelector('#allFilter').onclick = applyFilter;
document.querySelector('#activeFilter').onclick = applyFilter;
document.querySelector('#completedFilter').onclick = applyFilter;

window.addEventListener("load", (e) =>{
    loadTodos();
});

function loadTodos() {
    const todoList = ls.getTodoList();  //load to do's from local storage
    document.querySelector('#todos').innerHTML = '';
    todoList.forEach(todo => {  //iterate over the list
        const el = createTodoElement(todo)  //call CreateTodoElement function for each item in the list
        addToList(el); //add it to the list
    })
}

//create a new to-do
//the functions do the actual creations of the parts of making the new to-do
function newTodo() {
    const todo = createTodo();
    const todoDiv = createTodoElement(todo);
    //addToList(todoDiv);
    ls.saveTodo(todo);
    loadTodos();
}

function createTodo() {
    const input = document.querySelector('#todoInput');
    const newTodo = {id: Date.now(), content: input.value, complete: false} //changes complete to true when complete button clicked
    input.value = '';
    return newTodo;
}

function createTodoElement(todo) {
    //creating html for the to do list
    //todo div
    console.log(todo);
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    //complete button
    const completeBtn = document.createElement('button');
    completeBtn.classList.add('complete-btn');
    completeBtn.innerText = "complete";
    completeBtn.onclick = completeTodo;

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
    ls.deleteTodo(btn.getAttribute('data-id'));  
    document.querySelector('#todos').innerHTML = '';
    loadTodos();
}


function completeTodo(e) {
    const btn = e.currentTarget;  //if get parent. and the child has the id number
        console.log("got here");
        ls.completeTodo(btn.getAttribute('data-id'));
        e.target.parentNode.querySelector(".todo-content").classList.toggle('checked');
        //if(e.target.tagName === 'data-id') {
            console.log(e.target.parentNode);
       // }
    }


function applyFilter(e) {
    //clear the list
    document.querySelector('#todos').innerHTML = '';
    
    //declare variables
    let filteredTodos = [];
    const allTodos = ls.getTodoList();

    //check which filter to apply
    if (e.currentTarget.id == 'activeFilter') {
        filteredTodos = utils.activeFilter(allTodos)
    } else if (e.currentTarget.id == 'allFilter') {
        filteredTodos = allTodos;
    } else if (e.currentTarget.id == 'completedFilter') {
        filteredTodos = utils.completedFilter(allTodos)
    }

    //draw the list
    filteredTodos.forEach(todo => {
        const el = createTodoElement(todo)
        addToList(el)
    })
}
