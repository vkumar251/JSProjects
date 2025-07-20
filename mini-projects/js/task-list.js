let tasks = [];

let displayHead;
let displayHeader;
let displayMain;
let displayFooter;

// load contents on page load
window.onLoad = function()
{
    this.loadPage();
}
// generate HTML elements for the page
function loadPage()
{
    this.generateHead();
    this.generateHeader();
    this.generateMain();
    this.generateFooter();

    document.head.innerHTML = displayHead;
    document.body.innerHTML = displayHeader;
    document.body.innerHTML += displayMain;
    document.body.innerHTML += displayFooter;
}
function addTask()
{
    const x = document.getElementById("task-input").value; // register input from id, taskInput
    const y = document.getElementById("output-list");

    if (x !== "") // check input field is not empty
    {
        tasks.push(x); // add input to array
        console.log("Task " + x + " added successfully. Enter listTasks() for more details.");

        const z = document.createElement("li");
        z.textContent = x; // add input to list item

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.className = "list-btn";
        removeBtn.addEventListener("click", function()
        {
            // remove task from DOM and array, and log success message
            removeTask(z);
            console.log("Task " + x + " removed successfully.");
        });
        
        z.appendChild(removeBtn); // append button to list item
        y.appendChild(z); // append new task to list
    }
    else
    {
        alert("Error: No task name entered.");
    }
}
function removeTask(listItem)
{
    const index = Array.from(listItem.parentNode.children); // get all children of parent node (list)
    index.indexOf(listItem); // get index of list item in array
    tasks.splice(index, 1); // remove 1 task from array
    listItem.remove(); // remove list item and button from DOM
}
// print array information (for developer use)
function listTasks()
{
    console.log("Task Array Size: " + tasks.length);
    console.log("Tasks: " + tasks);
}
// customise <head> element
function generateHead()
{
    displayHead =
    `
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Task List | JSProject</title>
    <link rel="stylesheet", href="css/class.css">
    <style>
        body {font-family: Arial, sans-serif; background: #dddddd;}
        div {margin: 2rem; padding: 1rem; border: 2px solid #333; background: #ffffff;}
        p {font-size: 20px;}
        button {padding: 0.3rem 2rem; border: 2px solid black; cursor: pointer;}
        label {padding: 0.5rem; margin: 1rem;}
        input {padding: 0.3rem; margin: 1rem; border: 2px solid black; width: 50%;}
        ul {margin-left: 2rem;}
        ul li {margin: 1rem;}
        .list-btn {padding: 0.2rem 1rem;}
    </style>
    `
}
// customise <header> element
function generateHeader()
{
    displayHeader =
    `
    <header>
        <nav>
            <a href="#", onClick="">Action 1</a>
            <a href="#", onClick="">Action 2</a>
            <a href="#", onClick="">Action 3</a>
            <a href="#", onClick="">Action 4</a>
        </nav>
    </header>
    `
}
// customise <main> element
function generateMain()
{
    displayMain =
    `
    <main class="content">
        <h1>Task List</h1>
        <div id="div1">
            <h2>Input:</h2>
            <input type="text" id="task-input" placeholder="Enter a task">
            <button onClick="addTask()">Add Task</button>
        </div>
        <div>
            <h2>Output:</h2>
            <ul id="output-list">
            </ul>
        </div>
    </main>
    `
}
// customise <footer> element
function generateFooter()
{
    displayFooter =
    `
    <footer>
        <p>&copy; 2024 JSProject. All rights reserved.</p>
    </footer>
    `
}