import {loadPage} from './template_methods.js';
import * as functions_1 from './functions_1.js';
import * as functions_2 from './functions_2.js';

window.onload = function()
{
    // functions from functions_1.js
    window.output = functions_1.output;
    window.greet = functions_1.greet;
    window.calculateRectangleArea = functions_1.calculateRectangleArea;
    window.calculateRectanglePerim = functions_1.calculateRectanglePerim;
    window.calculateCircleCircumference = functions_1.calculateCircleCircumference;
    window.cat = functions_1.cat;

    // functions from functions_2.js
    window.add = functions_2.add;
    window.subtract = functions_2.subtract;
    window.multiply = functions_2.multiply;
    window.divide = functions_2.divide;
    window.checkAge = functions_2.checkAge;
    window.test = functions_2.test;

    // make global scope accessible from other scripts
    window.functions_1 = functions_1;
    window.functions_2 = functions_2;

    // load internal functions
    window.run = run;
    window.execute = execute;
    window.getRandom = getRandom;
    window.sendMessage = sendMessage;
    window.sendSpecialMessage = sendSpecialMessage;
    window.printMessage = printMessage;
    window.calculate = calculate;

    // call functions
    loadPage();
    run();
    sendMessage();
    execute();

    console.log(factorial(7));
    console.log(square(5));
    greetUser("Dave");
    add(5, 3);

    // document title
    document.querySelector("title").textContent = "Functions | JSProject";
    console.clear();
}

let x = 7;
let y = 2;

// Arithmetic expressions - performs mathematical operations
let sum = (x + y);
let difference = (x - y);

// Logical expressions - returns boolean value
let isGreater = (x > y);
let isEqual = (x === y);

// Function call expression - calls a function and returns the result
let max = Math.max(x, y);

function run()
{
    console.log("Sum Output:", sum); // 9
    console.log("Difference Output:", difference); // 5
    console.log("Is Greater Output:", isGreater); // true
    console.log("Is Equal Output:", isEqual); // false
    console.log("Max Output:", max); // 7

    // anonymous function
    setTimeout(function() 
    {
        console.log("Custom message received!");
    }, 2000); // run task after 2 seconds

    // arrow function
    setTimeout(() => 
    {
        console.log("Timer has finished!");
    }, 3000); // run task after 3 seconds
}
function execute()
{
    const main = document.querySelector("main");
    main.style.textAlign = "center";
    main.style.color = "navy";
    main.style.textShadow = "5px 5px 5px #b9007c";
    main.innerHTML = // display result of 2 + 5 into HTML
    `
    <h1>Functions Document</h1>
    <div>Add Output: ${add(2, 5)}</div>
    `;
}
let sendMessage = function() // anonymous function + function expression
{
    console.log("Message successfully received!");
}
let sendCustomMessage = function(message)
{
    console.log(message);
}
let factorial = function fact(n) // recursive function to calculate factorial
{
    if (n === 0)
    {
        return 1;
    }

    return n * fact(n - 1);
}
let square = (x) => (x * x); // arrow function
let greetUser = (name) => // arrow function with parameter
{
    let greeting = `Hello, ${name}!`;
    return greeting;
}
let add = (a, b) =>
{
    let result = (a + b);
    return result;
}
let getRandom = () =>
{
    let output = (Math.random() * 100); // generate random number between 0 and 100
    return output.toFixed(0); // round to nearest integer
}

// more functions
function printMessage()
{
    console.log("Message successfully received!");
}
printMessage();

function calculate(x, y)
{
    let result = (x + y);
    return result;
}
console.log(calculate(2.5, 3.2));

function sendSpecialMessage(type, message)
{
    const list = ["log", "warn", "error"];
    switch (type)
    {
        case list[0]: // log message
            console.log(message);
            break;
        case list[1]: // warning message
            console.warn(message);
            break;
        case list[2]: // error message
            console.error(message);
            break;
        default:
            console.log("Invalid type!");
    }
}

