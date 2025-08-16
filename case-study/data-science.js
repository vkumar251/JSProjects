/*
SCENARIO:
You are working on a Data Science project.
- There have been five water samples taken from a river in different locations.
- Each of these water samples has been tested for a particular toxin in the river.
- After this test, the results have been produced showing the levels of these toxins in a set of five decimal numbers
  that indicate the levels of these toxins in each area.
- As part of this assignment, you are expected to take these five decimal numbers and perform various calculations.
- The first calculation is to calculate the mean/average of these five numbers.

SAMPLES: 4.2, 5.1, 3.8, 4.7, 5.3
MEAN(average) = total sum / count
*/

import {loadPage} from './template_methods.js';

let numbers = [4.2, 5.1, 3.8, 4.7, 5.3];

window.onload = function()
{
    loadPage();
    document.querySelector("title").textContent = "Data Science | JSProject";

    // load functions
    window.run = run;
    window.calculateMean = calculateMean;
    calculateMean(numbers);
    run();
}
function run()
{
    let x = document.querySelector("body");
    x.innerHTML = `<h1>This is a console file - open console to view output.</h1>`;
}
function calculateMean(numbers)
{
    let sum = 0; // initialise sum to 0
    for (let i = 0; i < numbers.length; i++) // iterate over each number in the array
    {
        sum += numbers[i]; // calculate total sum
    }
    console.log("Total sum: ", sum); // display total sum

    const mean = (sum / numbers.length); // calculate mean
    console.log("Mean: ", mean); // display mean
}