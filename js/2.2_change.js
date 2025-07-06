// Arrays
let colours = ["Red", "Green", "Blue", "Yellow", "Purple", "Orange", "Pink", "Black", "White", "Gray"];
let animals = ["Dog", "Cat", "Bird", "Elephant", "Lion", "Tiger", "Giraffe", "Panda"];
let fruits = ["Apple", "Banana", "Orange", "Mango", "Pineapple", "Strawberry", "Cherry", "Grape", "Pear"];

function changeH1()
{
    var heading = document.getElementById("h1");
    heading.textContent = "This heading has been changed.";
}
function changeP()
{
    var paragraph = document.getElementById("p1");
    paragraph.textContent = "This paragraph has been changed.";
}
function displayColours()
{
    var paragraph = document.getElementById("p1-2");
    paragraph.textContent = colours[0];
}
window.onLoad = function()
{
}