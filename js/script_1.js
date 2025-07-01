/* 
FUNCTION:
Syntax - function functionName()
function is an action that stores blocks of code
function allow code reusability instead of re-entering the same code
() = parentheses
*/

function changeText()
{
    // variables are containers that store data
    var paragraph = document.getElementById("p1"); // get paragraph element with id "p1"
    paragraph.textContent = "New message."; // change paragraph text
}



/* window.onload = function() 
{
    alert("This is a message.");
}; */