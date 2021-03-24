import { getData } from './fetchData.js';


//when user clicks the bug they get all of the bugs available
// document.querySelector(type).addEventListener("click", ()=>{
//     getData("bugs"); //passing in the type - fish
// })

// //when user clicks the fish they get all of the fish available
// document.querySelector(type).addEventListener("click", ()=>{
//     getData("fish"); //passing in the type - fish
// })


var queryString = location.search.substring(1); //substring 1 is to get rid of ? mark. based on the characters. ? is at index 0
console.log();


console.log(queryString);
//queryString = "type=bugs"

var queryArr = queryString.split("=");
console.log(queryArr);

if(queryArr.length > 1) {
    var value = queryArr[1]; //this will give us the value such as "bugs"
    getData(value);
}







