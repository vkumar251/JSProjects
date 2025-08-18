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

    // make global scope accessible from other scripts
    window.functions_1 = functions_1;
    window.functions_2 = functions_2;

    // load internal functions
    window.run = run;
    window.execute = execute;
    window.getRandom = getRandom;

    document.querySelector("title").textContent = "Functions | JSProject";

    // call functions
    loadPage();
    run();
    sendMessage();

    console.log(factorial(7));
    console.log(square(5));
    greetUser("Dave");
    add(5, 3);
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
    console.log(greeting);
}
let add = (a, b) =>
{
    let result = (a + b);
    console.log("Addition Result:", result);
}
let getRandom = () =>
{
    let output = (Math.random() * 100); // generate random number between 0 and 100
    return output.toFixed(0); // round to nearest integer
}