let array = [];

function addElement()
{
    const x = document.getElementById("elementInput").value; // register input from id, elementInput

    if (x == null || x == "") // check input field is not empty
    {
        alert("Please enter a value.");
        return;
    }

    array.push(x);
    updateList();
}
function removeFirstElement()
{
    array.shift();
    updateList();
}
function removeLastElement()
{
    array.pop();
    updateList();
}
function updateList()
{
    const arrayList = document.querySelector("#array-list"); // target ol with id array-list
    arrayList.innerHTML = ``; // reset current list items

    for (let i = 0; i < array.length; i++)
    {
        const li = document.createElement("li"); // create new list item
        li.textContent = array[i]; // set text content of list item
        arrayList.appendChild(li); // append list item to ol
    }
}