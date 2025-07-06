// Array of subjects
const subjects = 
[
    "Computer Science", 
    "Discrete Mathematics", 
    "Psychology", 
    "Medicine", 
    "Law"
];
// Function (without loop)
function listSubjects1()
{
    let text = "";
    text = text + subjects[0] + "<br>";
    text = text + subjects[1] + "<br>";
    text = text + subjects[2] + "<br>";
    text = text + subjects[3] + "<br>";
    text = text + subjects[4] + "<br>";

    document.getElementById("subjects-list").innerHTML = text;
}
// Function (with for loop)
function listSubjects2()
{
    let text = "";
    let length = subjects.length;

    for (let x = 0; x < length; x++)
    {
        text = text + subjects[x] + "<br>";
    }
    document.getElementById("subjects-list").innerHTML = text;
}
// Function (with while loop)
function listSubjects3()
{
    let text = "";
    let length = subjects.length;
    let x = 0;

    while (x < length)
    {
        text = text + subjects[x] + "<br>";
        x++;
    }
    document.getElementById("subjects-list").innerHTML = text;
}
// Function (with do-while loop)
function listSubjects4()
{
    let text = "";
    let length = subjects.length;
    let x = 0;

    do
    {
        text = text + subjects[x] + "<br>";
        x++;
    } 
    while (x < length);

    document.getElementById("subjects-list").innerHTML = text;
}
