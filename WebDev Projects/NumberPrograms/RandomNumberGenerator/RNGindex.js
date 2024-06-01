// const min = 50;
// const max = 100;
// let randomNum = Math.floor(Math.random() * (max - min)) + min;    // To generate numbers between 50-100


const myButton = document.getElementById("myButton");
const myLabel1 = document.getElementById("myLabel1");
const myLabel2 = document.getElementById("myLabel2");
const myLabel3 = document.getElementById("myLabel3");
const myTotal = document.getElementById("myTotal");
const min = 1;
const max = 6;
let randomNum1;
let randomNum2;
let randomNum3;

myButton.onclick = function(){
    randomNum1 = Math.floor(Math.random() * max) + min;              // floor ensures each possible value range equally as likely. Math.round can introduce bias
    randomNum2 = Math.floor(Math.random() * max) + min;
    randomNum3 = Math.floor(Math.random() * max) + min;
    myLabel1.textContent = randomNum1;
    myLabel2.textContent = randomNum2;
    myLabel3.textContent = randomNum3;
    myTotal.textContent = "Total: " + (randomNum1 + randomNum2 + randomNum3);
}