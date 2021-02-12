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

function completeTodo(id) {
    const toDoList = getTodoList();
    const newToDoList = toDoList.map((item)=>{
        if (item.id == id) {
            item.complete = !item.complete;
        } 
        console.log(id);
        console.log(item.id);
        return item;
    })
    console.log(newToDoList);   
    //return newToDoList; //need to put into updatedTodoList function so the 'true' value is returned
    localStorage.setItem('toDoList', JSON.stringify(newToDoList));
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
    deleteTodo,
    completeTodo
}


//create the local storage helper functions here