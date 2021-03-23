
var counter = 0;
function myFunction(event) { 
    if (counter % 2 == 0){
      let x = event.target;
      let rowid = x.id;
      document.getElementById(rowid).innerHTML = "X";
    }else{
      let x = event.target;
      let rowid = x.id;
      document.getElementById(rowid).innerHTML = "O";
    }
    return counter += 1;
  }

  function reset(){
      for(let i = 1; i <= 9; i++){
       document.getElementById("cell" + i).innerHTML = "";
      }
  }