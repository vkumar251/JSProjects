let darkMode = false;

var displayHead;
var displayHeader;
var displayMain;
var displayFooter;

window.onload = function() 
{
    this.loadPage();
}
function toggleDarkMode()
{
    // select elements
    let header = document.querySelector("header");
    let main = document.querySelector("main");
    let footer = document.querySelector("footer");
    let p = document.querySelector("p");
    let h1 = document.querySelector("h1");
    let h2 = document.querySelector("h2");
    let nav = document.querySelectorAll("nav a");
    let section2 = document.querySelector("#section2");

    // select class element(s)
    let grey = document.querySelector(".grey");

    if (darkMode === false)
    {
        header.style.backgroundColor = "#0064ff";
        main.style.backgroundColor = "#303030";
        footer.style.backgroundColor = "#0064ff";
        footer.style.color = "black";
        p.style.color = "white";
        h1.style.color = "white";
        h2.style.color = "white";
        for (let i = 0; i < nav.length; i++)
        {
            nav[i].style.color = "black";
        }

        grey.style.backgroundColor = "#141414";
        section2.style.backgroundColor = "#a34100";
        section2.style.border = "2px solid white";
        section2.style.color = "white";
        
        darkMode = true;
    }
    else
    {
        header.style.backgroundColor = "#00173b";
        main.style.backgroundColor = "white";
        footer.style.backgroundColor = "#00173b";
        footer.style.color = "white";
        p.style.color = "black";
        h1.style.color = "black";
        h2.style.color = "black";
        for (let i = 0; i < nav.length; i++)
        {
            nav[i].style.color = "white";
        }

        grey.style.backgroundColor = "#bebebe";
        section2.style.backgroundColor = "#ffbf94";
        section2.style.border = "2px solid black";
        section2.style.color = "black";

        darkMode = false;
    }
}
function loadPage()
{
    this.generateHead();
    this.generateHeader();
    this.generateMain();
    this.generateFooter();

    document.head.innerHTML = displayHead;
    document.body.innerHTML = (displayHeader + displayMain + displayFooter);

    customiseSection();
}
function generateHead()
{
    displayHead =
    `
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dark Light Mode | JSProject</title>
    <link rel="stylesheet", href="css/class.css">
    <style>
        body {font-family: Arial, sans-serif; background: #dddddd;}
        div {margin: 2rem; padding: 1rem; border: 2px solid #333; background: #ffffff;}
        p {font-size: 20px;}
        section {padding: 1rem;}
        button {padding: 0.5rem 2rem; margin: 1rem; border: 2px solid black; cursor: pointer;}
        button:hover, button:focus {background: black; color: white;}
        header, footer {background-color: #00173b;}
        .center {text-align: center;}
        .grey {background-color: #bebebe;}
        .content {background-color: white;}
    </style>
    `
}
function generateHeader()
{
    displayHeader =
    `
    <header>
        <nav>
            <a href="#", onClick="">Action 1</a>
            <a href="#", onClick="">Action 2</a>
            <a href="#", onClick="">Action 3</a>
            <a href="#", onClick="">Action 4</a>
        </nav>
    </header>
    `
}
function generateMain()
{
    displayMain =
    `
    <main class="content">
    <section class="center grey">
      <h1>Dark & Light Mode Web Application</h1>
      <button onClick="toggleDarkMode()">Switch to Light Mode</button>
    </section>
    <section>
      <h2>Dark & Light Mode</h2>
      <p>This is a sample web application page for testing dark and light mode.</p>
    </section>
    <section id="section2">
      <h2>Section 2</h2>
      <p>This is the second section of the web application page with a unique ID.</p>
    </section>
  </main>
  `
}
function generateFooter()
{
    displayFooter =
    `
    <footer>
        <p>&copy; 2024 JSProject. All rights reserved.</p>
    </footer>
    `
}
function customiseSection()
{
    // use querySelector to select the section with ID "section2"
    let section2 = document.querySelector("#section2");
    section2.style.backgroundColor = "#ffbf94";
    section2.style.border = "2px solid black";
}