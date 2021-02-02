function saveTodo(todo) {
    const toDoList = getTodoList();

    toDoList.push(todo);
    localStorage.setItem('toDoList', JSON.stringify(toDoList));
}

function deleteTodo(id) {
    const toDoList = getTodoList();  //need to make this one usable

    const updatedTodos = todoList.filter(todo => todo.id != id)  //return the list except the one you pass with the id that you got from the button. the id with the date
    localStorage.setItem('toDoList', JSON.stringify(updatedTodos));
}

function getTodoList() {
    const todoListString = localStorage.getItem('toDoList');
    let todoList = [];

    if (todoListString) {
        todoList = JSON.parse(todoListString);
    }

    return todoList;
}

export default {
    saveTodo,
    getTodoList,
    deleteTodo
}


//create the local storage helper functions here