import {loadPage} from './template_methods.js';
// Functions are reusable blocks of code to perform a task (like a machine)
// Methods are functions that are linked to object properties (e.g. car colour)

window.onload = function()
{
    loadPage();
    document.querySelector("title").textContent = "Functions | JSProject";

    // load functions
    window.output = output;
    window.greet = greet;
    window.calculateRectangleArea = calculateRectangleArea;
    window.calculateRectanglePerim = calculateRectanglePerim;
    window.calculateCircleCircumference = calculateCircleCircumference;

    // load objects
    window.cat = cat;

    this.output("Application loaded!");
}
export function output(message)
{
    switch (message)
    {
        case "error":
            console.error("Error: This is a critical error!");
            break;
        case "warning":
            console.warn("Warning: This is a warning!");
            break;
        default:
            console.log(message);
            break;
    }
}
// Basic function to greet a person
export function greet(name)
{
    console.log("Hello, " + name + "!");
}
// Object containing properties and method
export const cat =
{
    name: "Ziggy",
    breed: "Siamese",
    age: 8,
    isTamed: true,
    displayInfo: function() // anonymous function + method
    {
        console.log("Name: " + this.name);
        console.log("Breed: " + this.breed);
        console.log("Age: " + this.age);
        console.log("Is Tamed: " + this.isTamed);
    },
    setTamed: function(value) // create cat.setTamed(true/false)
    {
        this.isTamed = value;
    },
    greet: function() // create cat.greet() 
    {
        console.log("Meow");
    },
}
// rectangle area
export function calculateRectangleArea(width, height)
{
    return (width * height);
}
// rectangle perimeter
export function calculateRectanglePerim(width, height)
{
    return (width + height) * 2;
}
// circle circumference
export function calculateCircleCircumference(radius)
{
    let diameter = (radius * 2);
    let circumference = (diameter * Math.PI);
    return circumference.toFixed(2); // round to 2 decimal places
}

