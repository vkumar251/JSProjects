// Arrays
const colours = ["Red", "Blue", "Green", "Yellow", "Orange", "Purple", "Pink", "Brown", "Black", "White"];
const subjects = ["Computer Science", "Discrete Mathematics", "Psychology", "Medicine", "Law"];
const fruits = ["Apple", "Banana", "Orange", "Kiwi", "Mango"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function loadArray(event)
{
    event.preventDefault();
    let arrayName = document.getElementById("array-type").value; // register input from id, "array-type"
    let output = document.getElementById("array-output"); // output element to id, "array-output"

    if (arrayName.toLowerCase() === "colours") // .toLowerCase() prevents case-sensitivity
    {
        output.textContent = "Message received, the output is " + arrayName;
        const new_p = document.createElement("p"); // create new element
        const p_output = document.getElementById("arraylist-form2") // direct creating new element to arraylist-form2
        const length = colours.length;

        // set attributes to new element, p
        new_p.setAttribute("style", "color: green; font-style: italic; font-weight: bold;");
        new_p.setAttribute("id", "pMessage1");
        // send message
        new_p.textContent = "Array " + arrayName + " successfully, loaded. Enter an index from 0 to " + (length - 1) + ":";
        p_output.appendChild(new_p);

        const new_label = document.createElement("label"); // create label element
        const new_br = document.createElement("br"); // create new line element

        // set attributes to new element, label
        new_label.setAttribute("for", "array-index");
        new_label.textContent = "Array index number:";
        // apply changes
        p_output.appendChild(new_label);
        p_output.appendChild(new_br);

        const new_input = document.createElement("input"); // create input element
        const new_br2 = document.createElement("br");

        // set attributes to new element, input
        new_input.setAttribute("type", "number");
        new_input.setAttribute("id", "array-index");
        new_input.setAttribute("required", "");
        // apply changes
        p_output.appendChild(new_input);
        p_output.appendChild(new_br2);

        const new_btn = document.createElement("button"); // create button element

        // set attributes to new element, button
        new_btn.setAttribute("type", "submit");
        new_btn.setAttribute("onclick", "displayArray()");
        new_btn.textContent = "Display";
        // apply changes
        p_output.appendChild(new_btn);

        function displayArray()
        {
            var final_result = document.createElement("p");
            var final_array_index = parseInt(document.getElementById("array-index").value);
            final_result.textContent = "Element at array " + final_array_index + " is: " + colours[final_array_index];

            output.appendChild(final_result);
        }
    }
    else if (arrayName.toLowerCase() === "subjects")
    {
        output.textContent = "Message received, the output is " + arrayName;
    }
    else if (arrayName.toLowerCase() === "fruits")
    {
        output.textContent = "Message received, the output is " + arrayName;
    }
    else if (arrayName.toLowerCase() === "numbers")
    {
        output.textContent = "Message received, the output is " + arrayName;
    }
    else
    {
        output.textContent = "Invalid array name. Please select either 'colours', 'subjects', 'fruits', or 'numbers'.";
    }
}