// Arrays

let groceries = ["bread", "milk", "eggs", "vegetables"];
let skincare = ["cosmetics", "moisturiser", "fragrance"];
let numbers = [1, 2, 3, 4, 5];
let subjects = 
[
    "Computer Science", 
    "Discrete Mathematics", 
    "Psychology", 
    "Medicine", 
    "Law"
];

window.onload = function() 
{
    displaySubjects();
}

function displaySubjects()
{
    let subjectList = document.getElementById("subjectList");
    subjectList.innerHTML = "";

    subjects.forEach(function(title, index)
    {
        let subjectInfo = document.createElement("p");
        subjectInfo.textContent = `${index + 1}. ${title}`;
        subjectList.appendChild(subjectInfo);
    });
}
function addSubject(event)
{
    event.preventDefault();

    let titleInput = document.getElementById("subjectInput");
    let title = titleInput.value;

    subjects.push(title);
    titleInput.value = "";

    displaySubjects();
}
function searchSubject()
{
    let searchInput = document.getElementById("searchInput");
    let searchResult = document.getElementById("searchResult");
    let foundSubject = subjects.filter(function (title)
    {
        return title.toLowerCase().includes(searchInput);
    });

    foundSubject.forEach(function (title, index)
    {
        let subjectInfo = document.createElement("p");
        subjectInfo.textContent = `${title}`;
        searchResult.appendChild(subjectInfo);
    });
}

/*
Arrays are used to store a collection of values in a single variable.
In JS, arrays are denoted by square brackets [].
*/