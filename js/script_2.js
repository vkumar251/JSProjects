function openMenu()
{
    var selected = 1;

    if (selected == 1)
    {
        document.getElementById("sec1").style.display = "block";
    }
}
function openMenu()
{
    var selected = "section1";
    if (selected === "section1")
    {
        document.getElementById("sec1").style.display = "block";
    }
    else
    {
        console.log("Section not found.");
    }
}

// variable types
function variableList()
{
    var number; // undefined variable
    var number = 10; // integer
    var x = 20;
    var y = 30;
    var stringVar = "This is a string."; // string
    var booleanVar = false; // boolean

    let number;
    let number = 10;
    let x = 20;
    let y = 30;
    let stringVar = "This is a string.";
    let booleanVar = false;

    const number = 10;
    const x = 20;
    const y = 30;
    const stringVar = "This is a string.";
    const booleanVar = true;
}