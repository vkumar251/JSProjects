function addNumbers()
{
    // retrieve values from input fields
    const x = parseFloat(document.getElementById("addNum1").value);
    const y = parseFloat(document.getElementById("addNum2").value);

    // calculate two values
    const z = add(x, y);

    // validate answer
    if (isNaN(z))
    {
        alert("Please enter valid numbers.");
        return;
    }

    // display result
    document.getElementById("add-result").innerText = "Result: " + z;
}
function subtractNumbers()
{
    // retrieve values from input fields
    const x = parseFloat(document.getElementById("subNum1").value);
    const y = parseFloat(document.getElementById("subNum2").value);

    // calculate two values
    const z = subtract(x, y);

    // validate answer
    if (isNaN(z))
    {
        alert("Please enter valid numbers.");
        return;
    }

    // display result
    document.getElementById("sub-result").innerText = "Result: " + z;
}
function multiplyNumbers()
{
    // retrieve values from input fields
    const x = parseFloat(document.getElementById("mulNum1").value);
    const y = parseFloat(document.getElementById("mulNum2").value);

    // calculate two values
    const z = multiply(x, y);

    // validate answer
    if (isNaN(z))
    {
        alert("Please enter valid numbers.");
        return;
    }

    // display result
    document.getElementById("mul-result").innerText = "Result: " + z;
}
function divideNumbers()
{
    // retrieve values from input fields
    const x = parseFloat(document.getElementById("divNum1").value);
    const y = parseFloat(document.getElementById("divNum2").value);

    // validate input
    if (y === 0)
    {
        alert("Cannot divide by zero.");
        return;
    }

    // calculate two values
    const z = divide(x, y);

    // validate answer
    if (isNaN(z))
    {
        alert("Please enter valid numbers.");
        return;
    }

    // display result
    document.getElementById("div-result").innerText = "Result: " + z;
}


// Basic Calculator
function add(firstNumber, secondNumber)
{
    const result = (firstNumber + secondNumber);
    return result;
}
function subtract(firstNumber, secondNumber)
{
    const result = (firstNumber - secondNumber);
    return result;
}
function multiply(firstNumber, secondNumber)
{
    const result = (firstNumber * secondNumber);
    return result;
}
function divide(firstNumber, secondNumber)
{
    const result = (firstNumber / secondNumber);
    return result;
}