// line of arrays
const languages = ["HTML", "CSS", "JavaScript", "Java", "Python", "C++", "C#", "PHP", "Ruby", "Rust"];

// empty array
const frameworks = [];

// add values to empty array
frameworks[0] = "React";
frameworks[1] = "Angular";
frameworks[2] = "Vue.js";
frameworks[3] = "Next.js";
frameworks[4] = "Tailwind";
frameworks[5] = "Bootstrap";

// new array
const modules = new Array("Web Development", "Data Science", "Machine Learning", "AI", "Cyber Security");

// iterate array using forEach loop
function forEach(array)
{
    if (array == null || array.length == 0)
    {
        console.log("Array not found.");
        return;
    }
    array.forEach(array => console.log(array));
}

// iterate array using for loop
function iterate(array)
{
    if (array == null || array.length == 0)
    {
        console.log("Array not found.");
    }
    else
    {
        // run through each element in the array
        for (let i = 0; i < array.length; i++)
        {
            console.log(array[i]);
        }
    }
}

// iterate array using do-while loop
function whileIterate(array)
{
    if (array == null || array.length == 0)
    {
        console.log("Array not found.");
    }
    else
    {
        let y = 0;
        do
        {
            console.log(array[y]);
            y++;
        }
        while (y < array.length);
    }
}

// add new values to array - using .length property
frameworks[frameworks.length] = "Node.js";
frameworks[frameworks.length] = "jQuery";

// add new values to array - using push() method
modules.push("Discrete Mathematics");
modules.push("Mobile App Development");

// remove first element from array - using shift() method
languages.shift(); // removes "HTML"

// remove last element from array - using pop() method
languages.pop(); // removes "Rust"

// remove element at specific index - using splice() method
