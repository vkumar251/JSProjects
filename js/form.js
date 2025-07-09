function addNumbers(event)
{
    event.preventDefault(); // block default action from sending form data to server
    const firstNumber = parseFloat(document.getElementById("firstNumber").value); // parse input value to float
    const secondNumber = parseFloat(document.getElementById("secondNumber").value);
    const result = (firstNumber + secondNumber); // calculate sum
    var output = document.getElementById("result");

    // NaN = Not a Number
    if (isNaN(firstNumber) || isNaN(secondNumber))
    {
        output.textContent = "Error: Please enter valid numbers.";
        output.style.color = "red";
    }
    else
    {
        output.textContent = "Result: " + result;
        output.style.color = "green";
    }
}