let tasks = [];

window.onload = function()
{
    this.loadPage();
}
function loadPage()
{
    this.generateHead();
    this.generateHeader();
    this.generateMain();
    this.generateFooter();

    document.head.innerHTML = displayHead;
    document.body.innerHTML = (displayHeader + displayMain + displayFooter);
}
function addTask()
{
    const a = document.getElementById("task-input").value;
    const b = document.getElementById("output-list");
    
    if (a == "")
    {
        alert("Please enter a task.");
        return;
    }

    const c = document.createElement("li");
    tasks.push(a);
    c.textContent = a;

    const d = document.createElement("button");
    d.textContent = "Delete";
    d.className = "list-btn";
    d.addEventListener("click", function() 
    {
        removeTask(c);
    });
    c.appendChild(d);
    b.appendChild(c);
}
function removeTask(listItem)
{
    const x = Array.from(listItem.parentNode.children);
    x.indexOf(listItem);
    tasks.splice(x, 1);
    listItem.remove();
}
function generateHead()
{
    displayHead =
    `
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
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
function generateFooter()
{
    displayFooter =
    `
    <footer>
        <p>&copy; 2024 JSProject. All rights reserved.</p>
    </footer>
    `
}