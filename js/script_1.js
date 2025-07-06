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
function speedCamera()
{
    var speedLimit = 60;
    var vehicleSpeed = 50;
    var penaltyFare = 0;

    // vehicle surpasses the speed limit?
    if (vehicleSpeed > speedLimit) 
    {
        var message = document.getElementById("p1"); // get paragraph element with id "p1"

        var speedDiff = (vehicleSpeed - speedLimit); // calculate the difference in speed
        penaltyFare = Math.ceil(speedDiff / 5) * 50; // penalty fare £50 for every 5mph over limit

        message.textContent = "You were driving at " + vehicleSpeed + " mph, exceeding the speed limit of " + speedLimit + " mph. " +
        "Your penalty fare is " + penaltyFare + " GBP.";
        message.style.color = "red"; // change message color to red
    }
    else if (vehicleSpeed === speedLimit) // vehicle is at the speed limit
    {
        var message = document.getElementById("p1");
        message.textContent = "Warning: You are driving at the speed limit. Please slow down.";
        message.style.color = "#ff8800"; // amber
    }
    else // safe driving
    {
        var message = document.getElementById("p1");
        message.textContent = "Your driving is safe. Current speed: " + vehicleSpeed + " mph";
        message.style.color = "green";
    }
}
function carPark()
{
    var message = document.getElementById("p1");
    var hasPaid = true;
    if (hasPaid)
    {
        message.textContent = "Payment received. Enjoy your parking spot.";
        message.style.color = "green";
    }
    else
    {
        message.textContent = "Please pay the parking fee before exiting the car park.";
        message.style.color = "blue";
    }
}
function favouriteColour()
{
    let favColour = "blue";

    // switch statement - cycles around each case until it finds a match
    switch (favColour)
    {
        case "yellow":
            alert("Your favourite colour is yellow.");
            break;
        case "green":
            alert("Your favourite colour is green.");
            break;
        case "red":
            alert("Your favourite colour is red.");
            break;
        case "blue":
            alert("Your favourite colour is blue.");
            break;
        case "white":
            alert("Your favourite colour is white.");
            break;
        case "black":
            alert("Your favourite colour is black.");
            break;
        case "grey":
            alert("Your favourite colour is grey.");
            break;
        default:
            alert("No matching colour found.");
            break;
    }
}

window.onload = function() 
{
}