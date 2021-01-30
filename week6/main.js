//import Todos here (I think from the ToDos.js)
//create an instance of Todos class here


function addTodo() {
    const newItem = document.createElement("item");
    const itemName = document.getElementById("insertTask").nodeValue;
    const textNode = document.createTextNode(itemName);
    newItem.appendChild(textNode);
    if (itemName === '') {
        alert("Please enter a to-do");
    } else {
        document.getElementById("taskList").appendChild(newItem);
    }
    document.getElementById("insertTask").value="";

    const span = document.createElement("SPAN");
    const txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    newItem.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            const div = this.parentElement;
            div.style.display = "none";
        }
    }
}