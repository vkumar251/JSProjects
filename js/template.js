import {loadPage} from './template_methods.js';

window.onload = function()
{
    loadPage();
    document.querySelector("title").textContent = "Name | JSProject";

    // load functions
    window.run = run;
}
function run()
{
    // sample function
}