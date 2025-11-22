import {loadPage} from './template_methods.js';

window.onload = function()
{
    loadPage();
    document.querySelector("title").textContent = "Name | JSProject";

    // load functions
    window.run = run;
    run();
}
function run()
{
    let main = document.querySelector("main");

    // create button named event-button
    main.innerHTML = 
    `
    <button class="event-button">Click Me</button>
    <button class="event-buttons" style="color: red;">Click Me</button>
    <button class="event-buttons">Click Me</button>
    `;

    // apply event listener to element named event-button
    const button = document.querySelector(".event-button");
    const button_all = document.querySelectorAll(".event-buttons");

    // function event listener
    button.addEventListener("dblclick", function() 
    {
        alert("Button 1 clicked");
    });

    // add event listener to all elements with the class, event-button
    for (let i = 0; i < button_all.length; i++)
    {
        // arrow event listener
        button_all[i].addEventListener("click", (event) => 
        {
            alert("Buttons clicked");
        });
    }
}


