import {loadPage} from './template_methods.js';

window.onload = function()
{
    loadPage();
    document.querySelector("title").textContent = "DOM Styling | JSProject";

    // load functions
    window.run = run;
    window.createDiv = createDiv;
    window.createSection = createSection;
    window.styleSection = styleSection;
    window.createList = createList;
    window.removeList = removeList;
    
    this.run();
}
function run()
{
    createSection();
    createSection();
    createDiv();
    createList("div");
}
function createDiv()
{
    let div = document.createElement("div");
    let main = document.querySelector("main"); // target main element to insert div
    div.innerHTML = `This is a new div.<br><button onClick="styleSection()">Click me</button>`;
    main.appendChild(div);
}
function createSection()
{
    let section = document.createElement("section");
    let main = document.querySelector("main");

    section.innerHTML = 
    `
    <section>
        <div>
            <h2>Section 2</h2>
            <p>This is section 2.</p>
        </div>
    </section>
    `;
    main.appendChild(section);
}
function styleSection()
{
    let x = document.querySelectorAll("section");
    let y = 0;
    do
    {
        x[y].style.backgroundColor = "pink";
        y++;
    }
    while (y < x.length);
}
function createList(element) // create ul element
{
    const x = document.createElement("ul");
    const y = document.querySelector(element);
    x.innerHTML = `List`;
    y.appendChild(x);
}
function removeList() // remove ul element
{
    const x = document.querySelector("ul");
    x.remove();
}