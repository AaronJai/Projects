/* INTRODUCTION

// These dont appear on the webpage, have to see in inspect element -> console
// console.log(`Hello`);
// console.log(`HELP HELP HELP AAAAAAAAAA`);


// window.alert(`This an alert`);
// window.alert(`This another alert`);

// document.getElementById("myH1").textContent = `Hello, JavaScript time`;
// document.getElementById("myP").textContent = `lorem??`;

//--------------------------------------------------------------------------------------------
/* VARIABLES
    1. declaration  let x;
    2. assignment   x = 100;

    const PI = 3.14159;  // like final keyword - capitalising normal for primitive types.
*/

// let x;
// x = 1;

// // let cost = false;

let firstName = `Aaron`;
// let age = 21;
// let isStudent = true;


// // console.log(x);
// // console.log(y);

// // console.log(`${firstName} is ${age} years old`);
// // console.log(`Frozen coke ${1} dollar: ${cost}`);

// // console.log(typeof x);
// // console.log(typeof firstName);

// document.getElementById("p1").textContent = `My name is ${firstName} and I am ${age}`;

// document.getElementById("p3").textContent = `Enrolled: ${isStudent}`;

//--------------------------------------------------------------------------------------------
/* HOW TO ACCEPT USER INPUT
    1. Easy way = window prompt,
    2. professional way = HTML textbox
*/

// let username;
// username = window.prompt("What's your username?");
// console.log(username);

// document.getElementById("mySubmit").onclick = function(){
//     username = document.getElementById("myText").value;
//     document.getElementById("myH1").textContent = `Hello, ${username}`;
    // console.log(username);
// }

//--------------------------------------------------------------------------------------------
/* TYPE CONVERSION
    (important e.g., when accepting user input its given as strings.) - Number(), String(), Boolean()
*/
// age = window.prompt("How old are you?");
// age = Number(age);  // without this 2it will only append '1' to the string.
// age += 1;  

// console.log(age, typeof age);

//--------------------------------------------------------------------------------------------
//  CONSTANTS, AND APPLYING PROMPT

const PI = 3.14159;
let radius;
let circumference;

// PI = 420.69; // causes TypeError and stops from running

document.getElementById("mySubmit").onclick = function(){
    radius = document.getElementById("myText").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("myH3").textContent = circumference +"cm";
}

//--------------------------------------------------------------------------------------------
//  MATH - built-in object that provides a colleciton of properties and methods.

/*
    Math.PI, Math.E     // obvious
    Math.round()        // to closest number
    Math.floor()        // rounds down
    Math.ceil()         // rounds up
    Math.trunc()        // 'truncate' - eliminates any decimal - basically rounder
    Math.pow(x, y)      // x to the power of y
    Math.sqrt()         // Square root
    Math.log            // natural logarithm
    Math.sin            // for trigonometry, also has cos and tan.
    Math.abs            // absolute value
    Math.sign           // -1 for negative num, 1 for positive, 0 for 0.
*/

//--------------------------------------------------------------------------------------------
    // IF STATEMENTS
    // remember statement precedence important

// const myText = document.getElementById("myText");
// const mySubmit = document.getElementById("mySubmit");
// const result = document.getElementById("myH3");
// let age;
// // let hasLicense = true;

// mySubmit.onclick = function() {

//     age = myText.value;
//     age = Number(age);

//     if (age >= 100) {
//         result.textContent = "Damn you old"
//     }
//     else if (age == 0) {
//         result.textContent = "You a fetus or something"
//     }
//     else if (age >= 18) {
//         result.textContent = "You can enter this site"
//     }
//     else {
//         result.textContent = "Who are you"
//     }
// }


//--------------------------------------------------------------------------------------------
    // Checked property
const myCheckBox = document.getElementById("myCheckBox");
const VisaButton = document.getElementById("VisaButton");
const MasterCardButton = document.getElementById("MasterCardButton");
const PayPalButton = document.getElementById("PayPalButton");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function() {
    if (myCheckBox.checked) {           // evaluates to true or false
        subResult.textContent = "You are subscribed!";
    }
    else {
        subResult.textContent = "You are NOT subscribed!";
    }

    if (VisaButton.checked) {
        paymentResult.textContent = "You are paying with Visa."
    }
    else if (MasterCardButton.checked) {
        paymentResult.textContent = "You are paying with MasterCard."
    }
    else if (PayPalButton.checked) {
        paymentResult.textContent = "You are paying with PayPal."
    }
    else {
        paymentResult.textContent = "You must select a payment type."
    }
}

//--------------------------------------------------------------------------------------------
    /* Ternary operator
        like in java
        (conditon) ? (if true) : (if false);
    */

//--------------------------------------------------------------------------------------------
    // SWITCH STATEMENTS

let day = 1;

switch (day) {
    case 1:
        console.log("It's Monday");
        break;
    case 2:
        console.log("It's Tuesday");
        break;
    default:
        console.log("wtf is that");
}

let testScore = 80;
let letterGrade;

switch (true) {
    case testScore >= 80:
        letterGrade = "HD";
        console.log(`Congrats you got: ${letterGrade}`); // backticks support the embedded expression
        break;
    default:
        console.log("You dumb")
}

//--------------------------------------------------------------------------------------------
    // STRING METHODS

// let userName = "ajai tan"

// console.log(userName.charAt(0));                    // outputs 'A' 
// console.log(userName.indexOf("j"));                 // outputs 1
// console.log(userName.lastIndexOfindexOf("a"));      // outputs 2
// console.log(userName.length);                       // outputs 4
// userName.trim();                                    // remove trailing and tailing white space
// userName.toLowerCase();
// userName.toUpperCase();
// userName.repeat(3);
// userName.startsWith("a");                           // stores as boolean, same as .endsWith() and .includes()
// userName.replaceAll('x', 'y');                      // replace 'x's with 'y's
// userName.padStart(10, "0")                          // should have 10 characters, if not, pad with 0's, same concept with .padEnd()
// userName.split("x")                                 // split into subtstring where you meet 'x'

// userName.slice(x, y);                                        // x inclusive, y exclusive. -ve goes from reverse
// let firstName = userName.slice(0, fullname.indexOf(" "));    // allows for more dynamic name change
// let lastName = userName.slice(fullname.indexOf(" ") + 1);


//--------------------------------------------------------------------------------------------
    /* METHOD CHAINING
        - Calling one method after another in one continuous line of code
    */

// let username = window.prompt("Enter your username: ");

// WITHOUT:

// username = username.trim();
// let letter = username.charAt(0);
// letter = letter.toUpperCase();

// let extraChars = username.slice(1);
// extraChars = extraChars.toLowerCase();

// username = letter + extraChars;
// console.log(username);

// WITH:
// username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
// console.log(username);

//--------------------------------------------------------------------------------------------
    /*  STRICT INEQUALITY OPERATOR
    You have assignment operator =
    and comparison operator ==
    but also strict equality operator === (compare if values AND dataype is equal)
    - theres also strict INequality operator !==
    */

//--------------------------------------------------------------------------------------------
    /*  LOOPS
    while, do-while, for loops, -- all same format as java
    */

//--------------------------------------------------------------------------------------------
    // ARRAYS       

// let fruits = ["apple", "orange", "banana"]
        // access through fruits[0], etc.
// fruits[0] = "coconut";
// fruits[3] = "coconut";
// .push();                     adds to end      
// .pop()                       removes last element. 
// .unshift()                   adds something to front, 
// .shift()                     removes from end
// .length()                    to get array length
// .indexOf("apple")            gets index of element
// .sort()                      alphabetical order
// .sort().reverse()            reverse alphabetical order

    // NORMAL LOOP
// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

    // SHORT HAND LOOP
// for (let fruit of fruits) {
//     console.log(fruits[i]);
// }

    // REVERSE LOOP
// for (let i = fruits.length - 1; i >= 0; i--) {
//     console.log(fruits[i]);
// }



//--------------------------------------------------------------------------------------------
    /* SPREAD OPERATOR
        ... allows an iterable such as an array or string to be expanded into separate elements
        (unpacks the element)
    */

// let numbers = [1, 2, 3, 4, 5];
// let maxmimum1 = Math.max(numbers);                  // output NaN, we can't place array into method
// let maxmimum2 = Math.max(...numbers);               // output 5

// let username = "Aaron Tan";
// let letters1 =  [...username];                      // (9) ['A', 'a', 'r', 'o', 'n', ' ', 'T', 'a', 'n']
// let letters2 = [...username].join("-")              // A-a-r-o-n- -T-a-n
// console.log(letters2);

// let fruits = ["apple", "orange", "banana"];
// let vegetables = ["carrots", "celery", "potato"]

// let foods1 = [...fruits];                           // no change
// let foods2 = [...fruits, ...vegetables, "eggs"]     // Joins all together
// console.log(foods2);                        

//--------------------------------------------------------------------------------------------
    /* REST PARAMETERS  ---- opposite of spread

    (...rest) allows a function to work with a variable number of arguments
    by bundling them into an array.
    
    spread = expands an array into separate elements
    rest = bundles separate elements into an array
    */

// function openFridge(...foods) {
//     console.log(...foods);                         // pizza ChickenNCheese Sushi  -- resting then spreading
//     console.log(foods);                            // (3) ['pizza', 'ChickenNCheese', 'Sushi']
// }    

// function getFood(...foods) {
//     return foods;
// }

// const food1 = "pizza";
// const food2 = "ChickenNCheese";
// const food3 = "Sushi";
// openFridge(food1, food2, food3);                    

// const foods = getFood(food1, food2, food3);
// console.log(foods);                                // (3) ['pizza', 'ChickenNCheese', 'Sushi']

// function sum(...numbers) {                         // same concept for e.g., finding average
//     let result = 0;
//     for (let number of numbers) {
//         result += number;
//     }
//     return result;
// }

// const total = sum(1, 2, 3, 4, 5);

// function combineStrings(...strings) {
//     return strings.join(" ");
// }

// const fullName = combineStrings("Mr", "Spongebob");

//--------------------------------------------------------------------------------------------
/*  CALLBACK
    a function passed as an argument to another function.
    used to handle asynchronous operations:
    1. reading a file,
    2. network requests,
    3. interacting with databases.
    "when done, call this next".
*/

// function hello(callback) {
//     console.log("Hello");
//     callback();

// }

// function goodbye() {
//     console.log("GoodBye");
// }

// hello(goodbye);                 // calls goodbye after hello.
// ////////////////////////////////////
// function sum(callback, x, y) {
//     let result = x + y;
//     callback(result);
// }

// function displayConsole(result) {
//     console.log(result);
// }

// sum(displayConsole, 1, 2);      // does x+y then displays.

//--------------------------------------------------------------------------------------------
/*  forEach()
    method used to iterate over elements of an array and apply a specified function (callback)
    to each element.
    array.forEach(callback)
*/

// let numbers = [1, 2, 3, 4, 5];

// numbers.forEach(double);
// numbers.forEach(display);

// function display(element) {
//     console.log(element);
// }

// function double(element, index, array) {
//     array[index] = element * 2
// }

//--------------------------------------------------------------------------------------------
/*  .map()
    accepts a callback and applies that function to each element of an array.
    Similar to forEach, but RETURNS A NEW ARRAY
*/

// const numbers = [1, 2, 3, 4, 5];
// const squares = numbers.map(square);
// console.log(squares);

// function square(element) {
//     return Math.pow(element, 2);
// }

// const dates = ["2024-1-10", "2025-2-20", "2026-3-30"];
// const formattedDates = dates.map(formatDates);
// console.log(formattedDates)

// function formatDates(element) {
//     const parts = element.split("-");
//     return `${parts[2]}/${parts[1]}/${parts[0]}`;
// }

//--------------------------------------------------------------------------------------------
/*  .filter()
    creates new array by filtering out elements
*/

// let numbers = [1, 2, 3, 4, 5, 6, 7];
// let evenNums = numbers.filter(isEven);
// console.log(evenNums);

// function isEven(element) {
//     return element % 2 === 0;
// }

//--------------------------------------------------------------------------------------------
/* .reduce()
    reduce elements of an array to a single value
*/

// const prices = [5, 30, 10, 25, 15, 20];

// const total = prices.reduce(sum);
// console.log(`$${total.toFixed(2)}`);

// function sum(previous, next) {
//     return previous + next;
// }

// const grades = [75, 50, 90, 80, 65, 95];

// const maximum =  grades.reduce(getMax);
// console.log(maximum);

// function getMax(accumulator, element) {
//     return Math.max(accumulator, element);
// }

//--------------------------------------------------------------------------------------------

/*  FUNCTION DECLARATION
    defining a reusable block of code that performs a specific task
*/

// function hello() {
//     console.log('Hello');
// }

/* FUNCTION EXPRESSION
    defining functions as values or variables
    useful when using a function only once, so dont define one itself.
*/

// const hello = function() {
//     console.log('Hello');
// }
// hello();

// setTimeout(function() {
//     console.log("hello")
// }, 3000);

//--------------------------------------------------------------------------------------------
/*  ARROW FUNCTIONS
    concise ways to write function expressions,
    useful for simple functions only being used once.
    (parameters) => some code
*/

// const hello = () => console.log("Hello");
// hello();
const hello = (name, age) => {console.log(`Hello ${name}`)          // {} brackets if >1 parameter
                              console.log(`You are ${age} years old`)};
hello("Bro", 21);

const numbers = [1, 2, 3, 4, 5];

const squares = numbers.map((element) => Math.pow(element, 2));
console.log(squares);


//--------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------
