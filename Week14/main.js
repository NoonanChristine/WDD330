import { getData } from './fetchData.js';

document.querySelector("#bug").addEventListener("click", ()=>{
    getData("bugs");
})

document.querySelector("#fish").addEventListener("click", ()=>{
    getData("fish");
})






