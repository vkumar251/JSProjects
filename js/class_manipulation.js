var toggle = false;
let bg = document.getElementsByClassName("content");

window.onload = addElement;

function addElement()
{
    const newS = document.createElement("div"); // create new div element
    const newC = document.createTextNode("This is a newly created division."); // add text
    newS.appendChild(newC); // append text to new div element

    const currentS = document.querySelector("#div1"); // select main element
    currentS.parentNode.insertBefore(newS, currentS); // insert new div before main element
}
function changeBg()
{
    let x = prompt("Enter a new background color:");
    let y = document.querySelector("main");

    if (x !== null)
    {
        // add style attribute to main element
        y.setAttribute("style", "background-color: " + x + ";");
    }
    else
    {
        // display error message if invalid input
        alert("Invalid input. Color must be a name or a hexadecimal color code.");
    }
}
function changeColor()
{
    let x = prompt("Enter a new text color:");
    let y = document.querySelector("main");

    if (x !== null)
    {
        // add style attribute to main element
        y.setAttribute("style", "color: " + x + ";");
    }
    else
    {
        // display error message if invalid input
        alert("Invalid input. Color must be a name or a hexadecimal color code.");
    }
}
function resizeText()
{
    let x = prompt("Enter a new font size (in pixels):");
    let y = document.querySelectorAll("p");

    if (x !== null)
    {
        var z = 0;
        do
        {
            // apply attributes to all <p> elements
            y[z].setAttribute("style", "font-size: " + x + "px;");
            z++;
        }
        while (z < y.length);
    }
    else
    {
        // display error message if invalid input
        alert("Invalid input. Font size must be a positive integer.");
    }
}
function hideDiv()
{
    let x = prompt("Enter div number to hide:");
    let y = document.querySelectorAll("div");

    if (x !== null)
    {
        // hide selected div, deducting 1 from x as array indexing starts from 0
        y[(x - 1)].setAttribute("style", "display: none;");
    }
    else
    {
        // display error message if invalid input
        alert("Invalid input. Div number must be a positive integer.");
    }
}

let test;
function taskTimer()
{
    // task timer to toggle background color every 5 seconds
    test = setInterval(() => 
    {
        if (toggle === true)
        {
            bg[0].style.backgroundColor = "#ffb8f9";
            console.log("Toggled on");
            toggle = false;
        }
        else
        {
            bg[0].style.backgroundColor = "#ffd8fc";
            console.log("Toggled off");
            toggle = true;
        }
    }, 5000);
}
function endTimer()
{
    clearInterval(test); // clear interval when button is clicked
}







