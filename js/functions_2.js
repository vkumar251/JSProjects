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