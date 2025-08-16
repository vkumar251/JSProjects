import {loadPage} from './template_methods.js';

window.onload = function()
{
    loadPage();
    document.querySelector("title").textContent = "Events | JSProject";

    // load functions
    window.run = run;
    window.loadHTML = loadHTML;
    window.operators = operators;
    window.checkOps = checkOps;
    
    run();
    checkOps();
}
function run()
{
    loadHTML();
}
function loadHTML()
{
    const main = document.querySelector("main"); // target element main
    const divs = [];
    
    for (let i = 0; i < 2; i++)
    {
        divs[i] = document.createElement("div"); // create divs
        divs[i].id = `div-${(i+1)}`; // assign ids to divs

        // configure divs
        divs[i].style.width = "80%";
        divs[i].textContent = `Div ${(i+1)}`;
    }

    // create h1
    const h1 = document.createElement("h1");
    h1.textContent = "Event Propagation";

    // add elements to main element
    main.appendChild(h1);
    main.appendChild(divs[0]);

    // nest divs inside each other
    document.querySelector("#div-1").appendChild(divs[1]);

    // create button
    const btn = document.createElement("button");
    btn.textContent = "Click me";
    divs[1].appendChild(btn);
}
function operators()
{
    let passcode = 8;
    let attempt = 5;

    if (attempt == passcode)
    {
        console.log("Access granted!");
    }
    else
    {
        console.log("Access denied!");
    }
}
function checkOps()
{
    let x = 1;
    let y = 2;

    // logical AND operator
    if ((x == 1) && (y == 2))
    {
        console.log("Both conditions are true.");
    }
    else
    {
        console.log("At least one condition is false.");
    }

    let a = 1;
    let b = 2;

    // logical OR operator
    if ((a == 3) || (b == 3))
    {
        console.log("At least one condition is true.");
    }
    else
    {
        console.log("Both conditions are false.");
    }
}