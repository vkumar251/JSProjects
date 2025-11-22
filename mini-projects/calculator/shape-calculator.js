// SQUARE
function calcSquarePerim() // perimeter
{
    // get values from input field
    const a = parseFloat(document.getElementById("sq-length").value);

    // calculate perimeter
    const b = (a + a) * 2;

    // validate answer
    if (isNaN(b))
    {
        alert("Please enter a valid number.");
        return;
    }

    // display result
    document.getElementById("sq-result").innerText = "Perimeter: " + b;
}
function calcSquareArea() // area
{
    // get values from input field
    const a = parseFloat(document.getElementById("sq-length").value);

    // calculate area
    const b = (a * a);

    // validate answer
    if (isNaN(b))
    {
        alert("Please enter a valid number.");
        return;
    }

    // display result
    document.getElementById("sq-result").innerText = "Area: " + b;
}

// RECTANGLE
function calcRectanglePerim() // perimeter
{
    // get values from input fields
    const x = parseFloat(document.getElementById("rec-height").value);
    const y = parseFloat(document.getElementById("rec-width").value);

    // calculate perimeter
    const z = (x + x) + (y + y);

    // validate answer
    if (isNaN(z))
    {
        alert("Please enter valid numbers.");
        return;
    }

    // display result
    document.getElementById("rec-result").innerText = "Perimeter: " + z;
}
function calcRectangleArea() // area
{
    // get values from input fields
    const x = parseFloat(document.getElementById("rec-height").value);
    const y = parseFloat(document.getElementById("rec-width").value);

    // calculate area
    const z = (x * y);

    // validate answer
    if (isNaN(z))
    {
        alert("Please enter valid numbers.");
        return;
    }

    // display result
    document.getElementById("rec-result").innerText = "Area: " + z;
}

// CIRCLE
function calcCircleCircum() // circumference
{
    // get values from input field
    const a = parseFloat(document.getElementById("cir-diameter").value);

    // calculate circumference
    const b = (a * Math.PI).toFixed(2); // round to 2 decimal places

    // validate answer
    if (isNaN(b))
    {
        alert("Please enter a valid number.");
        return;
    }

    // display result
    document.getElementById("cir-result").innerText = "Circumference: " + b;
}
function calcCircleArea() // area
{
    // get values from input field
    const x = parseFloat(document.getElementById("cir-diameter").value);

    // calculate area
    const y = (x / 2); // convert diameter to radius
    const z = (y * y) * Math.PI.toFixed(2); // round to 2 decimal places

    // validate answer
    if (isNaN(z))
    {
        alert("Please enter a valid number.");
        return;
    }

    // display result
    document.getElementById("cir-result").innerText = "Area: " + z;
}