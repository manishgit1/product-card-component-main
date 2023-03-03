 //console.log("hello world");

 /*console.log(window.document);
console.log(document.body.style.background = "orange");

window.setTimeout(function(){
   

 
   document.body.style.background = "aqua";


}, 5000);

window.setInterval(function(){


    document.body.innerHTML =`<h1>${new Date()}</h1>`;
    
},1000);


  const result = window.prompt("What is your name ?");

console.log(result);



*/

/*const title =document.getElementsByClassName("red");
title.forEach(function(element){
});

title[0].style.fontSize = "50px";

const firstList = document.querySelectorAll(".red");

  firstList.forEach(function(item){
 
    



}) */

//Events


const buttons = document.querySelector('button');

buttons.addEventListener("click", function(event){
   
    console.log(event);
    document.body.style.background = "purple";
    
   
   

});

buttons.addEventListener("", function(event){



