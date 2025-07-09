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
function indexArray()
{
    let arrayInput = prompt("Enter name of Array to de-index:");
    if (arrayInput === "colours")
    {
        const indexInput = prompt("Enter an array index number.");

        // validate input - input must not be less than 0 and must not exceed max array length
        if (indexInput < 0 || indexInput > colours.length)
        {
            // display error message
            alert("Invalid index number. Please enter a number between 0 and " + (colours.length - 1) + ".");
            // 1 is deducted from colours.length as array indexing starts from 0
        }
        else
        {
            alert("The element at index " + indexInput + " is: " + colours[indexInput]);
            console.log("Output successful.");
        }
    }
    else if (arrayInput === "subjects")
    {
        const indexInput = prompt("Enter an array index number.");

        if (indexInput < 0 || indexInput > subjects.length)
        {
            alert("Invalid index number. Please enter a number between 0 and " + (subjects.length - 1) + ".");
            return; // terminate function
        }

        alert("The element at index " + indexInput + " is: " + subjects[indexInput]);
        console.log("Output successful.");
    }
    else if (arrayInput === "fruits")
    {
        const indexInput = prompt("Enter an array index number.");

        if (indexInput < 0 || indexInput > fruits.length)
        {
            alert("Invalid index number. Please enter a number between 0 and " + (fruits.length - 1) + ".");
        }
        else
        {
            alert("The element at index " + indexInput + " is: " + fruits[indexInput]);
            console.log("Output successful.");
        }
    }
    else if (arrayInput === "numbers")
    {
        const indexInput = prompt("Enter an array index number.");

        if (indexInput < 0 || indexInput > numbers.length)
        {
            alert("Invalid index number. Please enter a number between 0 and " + (numbers.length - 1) + ".");
            return;
        }

        alert("The element at index " + indexInput + " is: " + numbers[indexInput]);
        console.log("Output successful.");
    }
    else
    {
        alert("Invalid array name. Please enter 'colours', 'subjects', 'fruits', or 'numbers'.");
    }
}
function registerInput()
{
    let input = document.getElementById("searchInput").value;
    console.log("Input received: " + input);
}
function input()
{
    let userInput = prompt("Enter an input:"); // prompt box

    alert("The input entered is " + userInput + ".");
}