
class User
{
    constructor(name, age, email)
    {
        this.name = name;
        this.age = age;
        this.email = email;
    }
}
class Book
{
    constructor (title, author, year, genre)
    {
        this.title = title;
        this.author = author;
        this.year = year;
        this.genre = genre;
    }
}

const book1 = new Book("Fictional Book", "John Joe", 2019, "Fantasy");
const book2 = new Book("Non-Fictional Book", "Jane Smith", 2020, "Biology");

// `` = backtick for assigning HTML content
// ${} = used for inserting JS into the backtick
let headerHTML = `<header></header>`;
let footerHTML =`<footer></footer>`;
let displayBooks =
`
<main>
    <h1>Book Details:</h1>
    <h2>Book 1:</h2>
    <h3>Title: ${book1.title}</h3>
    <h3>Author: ${book1.author}</h3>
    <h3>Year: ${book1.year}</h3>
    <h3>Genre: ${book1.genre}</h3>
    <h2>Book 2:</h2>
    <h3>Title: ${book2.title}</h3>
    <h3>Author: ${book2.author}</h3>
    <h3>Year: ${book2.year}</h3>
    <h3>Genre: ${book2.genre}</h3>
    <div>
        <button onclick="changeColor()">Change Message</button>
        <p id="p1">Default Message</p>
    </div>
</main>
`
// Adding HTML content to the page
document.body.innerHTML = headerHTML;
document.body.innerHTML += displayBooks;
document.body.innerHTML += footerHTML;


function changeColor()
{
    let test = document.getElementById("p1");
    test.innerHTML = `Message changed to: ${book1.title}`;
    test.style.color = "red";
    
}
window.changeColor = changeColor; // load function when the page opens




const user1 = new User("John Doe", 30, "johndoe@example.com");
const user2 = new User("Jane Smith", 28, "janesmith@example.com");

console.log(user1);

const mainHTML =
`
<main>
    <h1>Hello ${user1.name}</h1>
    <h1>Your age is ${user1.age}</h1>
    <h1>Your email address is ${user1.email}</h1>
</main>
`;
const mainHTML2 = "<main><h1>Hello " + user2.name + "</h1></main>";

// += is used to concatenate strings
/* document.body.innerHTML = headerHTML;
document.body.innerHTML += mainHTML;
document.body.innerHTML += footerHTML; */

