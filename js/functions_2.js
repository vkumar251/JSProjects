import {loadPage} from './template_methods.js';
import * as functions from './functions_1.js';

window.onload = function()
{
    // load external functions
    window.output = functions.output;
    window.greet = functions.greet;
    window.calculateRectangleArea = functions.calculateRectangleArea;
    window.calculateRectanglePerim = functions.calculateRectanglePerim;
    window.calculateCircleCircumference = functions.calculateCircleCircumference;
    window.cat = functions.cat;

    // make function objects globally accessible
    window.functions = functions;

    // load internal functions
    window.run = run;
    window.add = add;
    window.subtract = subtract;
    window.multiply = multiply;
    window.divide = divide;
    window.checkAge = checkAge;

    loadPage();
    document.querySelector("title").textContent = "Functions | JSProject";
    run();
}
function run()
{
    functions.output("Functions loaded successfully!");
}
export function add(a, b)
{
    let sum = (a + b);
    return sum;
/*     let isGreater = (a > b);
    let result = console.log("Sum: " + sum + ", Greater: " + isGreater);
    return result; */
}
export function subtract(a, b)
{
    let sum = (a - b);
    return sum;
}
export function multiply(a, b)
{
    let sum = (a * b);
    return sum;
}
export function divide(a, b)
{
    let sum = (a / b);
    return sum;
}

export function checkAge()
{
    let age = 25;
    let isAdult;

    if (age >= 18)
    {
        isAdult = true;
    }
    else
    {
        isAdult = false;
    }
    console.log(isAdult);
}
export function test()
{
    return "Function returned";
}

function generateRandomNumber()
{
    let x = Math.random() * 100;
    return x.toFixed(0);
}

// Output: random number between 0 - 100
console.log(generateRandomNumber());
function run()
{
    let result = true;

    if (result === true)
    {
        console.log("Condition is true");
        return;
    }

    console.log("Condition is false");
}

// Output: Condition is true
run();

function findFirstPositive(numbers)
{
    for (let i = 0; i < numbers.length; i++)
    {
        if (numbers[i] > 0)
        {
            return numbers[i];
        }
    }
    return null;
}

console.log(findFirstPositive([-3, -2, -1, 0, 1, 2, 3]));
console.log(findFirstPositive([-1, -2, -3]));

const car =
{
    model: "Toyota",
    year: 2021,
    size: "Large",
    get model() 
    {
        return this.model;
    },
    set model(value)
    {
        this.model = value;
    }
}

console.log(car.model); // Output: Toyota
function outerFunction()
{
    const secret = "This is a secret message.";

    function innerFunction()
    {
        console.log(secret);
    }

    return innerFunction;
}

const closure = outerFunction();
outerFunction()();
closure();

// Callback function:

// functionName takes in another function as the parameter
function greetUser(name, functionName)
{
    const greetMessage = `Hello, ${name}!`;
    functionName(greetMessage);
}
function displayGreeting(message)
{
    console.log(message);
}

greetUser("John Doe", displayGreeting);