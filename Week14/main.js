import { getData } from './fetchData.js';

//need to figure out these two from the notes

//when user clicks the bug they get all of the bugs available
let choice = document.querySelector("#bugs");
console.log(choice);
choice.addEventListener("click", ()=>{
    let choiceName = choice.value;
    console.log(choiceName);
    getData(type); //passing in the type - fish
})


//when user clicks the fish they get all of the fish available
document.querySelector("fish").addEventListener("click", ()=>{
    getData("fish"); //passing in the type - fish
})






