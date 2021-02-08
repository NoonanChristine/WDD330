function saveTodo(todo) {
    const toDoList = getTodoList();  //calling funtion below getTodoList()

    toDoList.push(todo); //adding items to the to do list
    localStorage.setItem('toDoList', JSON.stringify(toDoList));
}

function deleteTodo(id) {
    const toDoList = getTodoList();  
    const updatedTodos = toDoList.filter(todo => todo.id != id)  //return the list except the one you pass with the id that you got from the button. the id with the date
    localStorage.setItem('toDoList', JSON.stringify(updatedTodos));
}

//read todo list out of local storage
//when get out of local storage it's a string
function getTodoList() {
    const todoListString = localStorage.getItem('toDoList');
    let todoList = [];

    if (todoListString) {
        todoList = JSON.parse(todoListString);  //turns it back into an object/array
    }

    return todoList;
}

export default {
    saveTodo, //return an object that has a property saveTodo. Will have key value of saveTodo function
    getTodoList,
    deleteTodo
}


//create the local storage helper functions here