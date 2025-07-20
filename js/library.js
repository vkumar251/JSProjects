var isGlow = false;

class Library
{
    constructor()
    {
        this.books = []; // store books as array
    }
    displayBooks()
    {
        // loop through each book in the library and display properties
        this.books.forEach(book => 
        {
            console.log(`Title: ${book.title}, Author: ${book.author}, Year: ${book.year}, Availability: ${book.isAvailable}`);
        });
    }
    addBook(book)
    {
        this.books.push(book);
        /* console.log("Added book: " + book.title + " by " + book.author + " to the library."); */
    }
    checkOutBook(title)
    {
        // locate book in the library using find method and check availability
        const book = this.books.find(b => b.title === title && b.available);

        if (book) // book is found
        {
            book.checkOut();
            console.log(`Successfully checked out book: ${book.title} by ${book.author}`)
        }
        else // book not found
        {
            console.log(`Sorry, ${title} is current unavailable.`);
        }
    }
}

class Book
{
    constructor(title, author, year, isAvailable)
    {
        this.title = title;
        this.author = author;
        this.year = year;
        this.isAvailable = isAvailable;
    }
    checkIn()
    {
        this.isAvailable = true;
        console.log("Successfully returned book: " + this.title + " by " + this.author);
    }
    checkOut()
    {
        if (this.isAvailable === true)
        {
            this.isAvailable = false;
            console.log("Checking out book: " + this.title + " by " + this.author);
        }
        else
        {
            console.log(this.title + " is already checked out.");
        }
    }
}

// create new (Library) object
const library = new Library();

// create new (Book) objects
let book1 = new Book("To Kill a Mockingbird", "Harper Lee", 1960, true);
let book2 = new Book("1984", "George Orwell", 1949, false);
let book3 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925, true);
let book4 = new Book("The Catcher in the Rye", "J.D. Salinger", 1951, false);
let book5 = new Book("Pride and Prejudice", "Jane Austen", 1813, true);
let book6 = new Book("The Adventures of Tom Sawyer", "Mark Twain", 1876, true);

// store all books as an array
let books = [book1, book2, book3, book4, book5, book6];

// register all books to the library
var i = 0;
do
{
    library.addBook(books[i]);
    i++;
}
while (i < books.length);


// MISC:

// add glow to heading
function toggleGlow()
{
    if (isGlow === true)
    {
        let h1 = document.getElementById("main-heading");
        h1.style.textShadow = "5px 5px 5px #b9007c";
        isGlow = false;
    }
    else
    {
        let h1 = document.getElementById("main-heading");
        h1.style.textShadow = "none";
        isGlow = true;
    }
}

// execute when DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() 
{
    const changeBg = document.getElementsByClassName("s-class"); // select all elements with class "s-class"
    
    // change background color of the third element to lightblue
    /* changeBg[2].style.backgroundColor = "lightblue";  */


    // use for loop to target all elements with class "s-class" and change their background color
    /* for (let i = 0; i < changeBg.length; i++)
    {
        changeBg[i].style.backgroundColor = "lightblue";
    } */

    // use while loop to target all elements with class "s-class"
    /* var y = 0;
    while (y < changeBg.length)
    {
        changeBg[y].style.backgroundColor = "blue";
        y++;
    } */

    // use do-while loop to target all elements with class "s-class"
    var x = 0;
    do
    {
        changeBg[x].style.backgroundColor = "darkblue";
        x++;
    }
    while (x < changeBg.length);
});