import {loadPage} from './template_methods.js';

let timer = 0;
let isHovered = false;

window.onload = function()
{
    loadPage();
    document.querySelector("title").textContent = "Events | JSProject";

    // load functions
    window.run = run;
    window.createSection = createSection;
    window.btnAlert = btnAlert;
    window.changeBg = changeBg;
    window.hoverBg = hoverBg;
    window.taskTimer = taskTimer;
    window.calculateMean = calculateMean;

    run();
}
function run()
{
    createSection();
}
function createSection()
{
    let section = document.createElement("section");
    let main = document.querySelector("main");

    section.innerHTML =
    `
    <h1>Event Listeners</h1>
    <div class="container", style="display: flex; gap: 5rem;">
        <div class="box", id="box-1">
            <h2>Event Listener 1</h2>
            <button id="btn-1">Click Me</button>
        </div>
        <div class="box", id="box-2">
            <h2>Event Listener 2</h2>
            <button id="btn-2">Click Me</button>
        </div>
        <div class="box", id="box-3">
            <h2>Event Listener 3</h2>
            <button id="btn-3">Hover Me</button>
        </div>
    </div>
    `;

    main.appendChild(section);

    // button event listeners
    const nyanBtn = document.querySelector("#btn-1");
    nyanBtn.addEventListener("click", taskTimer);

    const eventBtn = document.querySelector("#btn-2");
    eventBtn.addEventListener("click", btnAlert); // execute btnAlert function when clicked

    const bgColor = document.querySelector("#btn-3");
    bgColor.addEventListener("mouseover", changeBg); // execute changeBg function when hovered

    // div event listeners
    const divColor = document.querySelector("#box-1");
    divColor.addEventListener("mouseover", function() // anonymous function to change div background color
    {
        // execute method changeDivBg when hovered
        /* changeDivBg("#box-1", "lightgreen"); */
    });
    const divColor2 = document.querySelector("#box-2");
    divColor2.addEventListener("mouseover", function()
    {
        changeDivBg("#box-2", "lightyellow");
    });
    const divColor3 = document.querySelector("#box-3");
    divColor3.addEventListener("mouseover", function()
    {
        changeDivBg("#box-3", "lightpink");
    });
}
function btnAlert()
{
    alert("Button 2 clicked");
}
function changeBg()
{
    const x = document.querySelector("main");
    x.style.backgroundColor = "lightblue";
}
function changeDivBg(element, color)
{
    const x = document.querySelector(element);
    const y = x.style.backgroundColor = color;
}
function hoverBg(element, color)
{
    const x = document.querySelector(element);

    if (isHovered === false)
    {
        x.style.backgroundColor = color;
        isHovered = true;
    }
    else
    {
        x.style.backgroundColor = "white";
        isHovered = false;
    }
}
function taskTimer()
{
    const z = document.querySelector("#box-1"); // target element id, box-1
    const nyan = setInterval(() =>
    {
        switch (timer)
        {
            case 0:
                z.style.backgroundColor = "red";
                timer++;
                break;
            case 1:
                z.style.backgroundColor = "orange";
                timer++;
                break;
            case 2:
                z.style.backgroundColor = "yellow";
                timer++;
                break;
            case 3:
                z.style.backgroundColor = "green";
                timer++;
                break;
            case 4:
                z.style.backgroundColor = "blue";
                timer++;
                break;
            case 5:
                z.style.backgroundColor = "indigo";
                timer++;
                break;
            case 6:
                z.style.backgroundColor = "purple";
                timer++;
                break;
            default:
                z.style.backgroundColor = "white"; // reset back to white
                clearInterval(nyan); // terminate timer
                timer = 0; // reset back to 0 for next cycle
                break;
        }
    }, 350); // change color every 350 milliseconds
}

let decimals = [1.2, 3.5, 7.5, 10.2, 12.6];
function calculateMean(decimals) // data science project
{
    var sum = 0;

    for (var i = 0; i < decimals.length; i++)
    {
        sum += decimals[i];
    }

    return (sum / decimals.length);
}

var mean = calculateMean(decimals);
var roundedMean = Math.round(mean * 100) / 100;
var result = "Mean: " + roundedMean;
console.log(result);
