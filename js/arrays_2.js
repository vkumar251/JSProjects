// Arrays
const colours = ["Red", "Blue", "Green", "Yellow", "Orange", "Purple", "Pink", "Brown", "Black", "White"];
const subjects = ["Computer Science", "Discrete Mathematics", "Psychology", "Medicine", "Law"];
const fruits = ["Apple", "Banana", "Orange", "Kiwi", "Mango"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function listColours()
{
    let text = ""; // setup empty string to store the list items
    let length = colours.length;
    text = text + "<h2>Colours:</h2>"; // heading

    for (x = 0; x < length; x++) // loop through each array index
    {
        text = text + colours[x] + "<br>";
    }
    document.getElementById("colours-list").innerHTML = text; // locate element with id "colours-list" and update
}
function listSubjects()
{
    let text = "";
    let length = subjects.length;
    text = text + "<h2>Subjects:</h2>";

    var y = 0;
    do
    {
        text = text + subjects[y] + "<br>";
        y++;
    }
    while (y < length);
    document.getElementById("subjects-list").innerHTML = text;
}
function listFruits()
{
    let text = "";
    let length = fruits.length;
    text = text + "<h2>Fruits:</h2>";

    var z = 0;
    while (z < length)
    {
        text = text + fruits[z] + "<br>";
        z++;
    }
    document.getElementById("fruits-list").innerHTML = text;
}
function listNumbers()
{
    let text = "";
    let length = numbers.length;
    text = text + "<h2>Numbers:</h2>";
    
    for (i = 0; i < length; i++)
    {
        text = text + numbers[i] + "<br>";
    }
    document.getElementById("numbers-list").innerHTML = text;
}
function listNumber5()
{
    let text = "";
    let length = numbers.length;
    const output = document.getElementById("numbers-list-5");

    text = text + "<h2>Number five:</h2>";
    text = text + "This is the fifth number of the array. <br>";
    text = text + numbers[4] + "<br>";
    
    output.innerHTML = text;
    output.style.color = "green";
}