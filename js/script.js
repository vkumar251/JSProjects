/* window.onload - used for when we want to do something when page is loaded
full stop is a notation or operator. */

// "=" = assignment operator, by assigning the function to the window.onload property
window.onload = function() {}
// calculate
function calculate()
{
    var x = 5;
    var y = 10;
    var z = 2;
    var result = (x + y + z);
    console.log(result);
}
// conditional statement
function ifStatement()
{
    var number = 10;

    if (number >= 10) // number greater or equal to 10?
    {
        console.log("This number is greater than or equal to 10.");
    }
    else // number less than 10?
    {
        console.log("This number is less than 10.");
    }
}
function nameFunction()
{
    var fName = "firstName";
    var lName = "lastName";
    var fullName = fName + " " + lName;
    console.log(fullName);
} 

// saved functions
function misc()
{
    alert("Page loaded successfully!"); // alert box
    console.log("Web page loaded."); // log message in console (located in Inspect), commonly used for debugging
    document.getElementById(); // document = HTML document
}

function counter()
{
    var output = document.getElementById("p1");
    var counter = 1;
    do
    {
        if (counter <= 10)
        {
            output.textContent = counter; // output current number
            counter++; // add 1 to counter
        }
        else
        {
            break; // terminate loop if counter reaches or exceeds 10
        }
    } while (true);
}