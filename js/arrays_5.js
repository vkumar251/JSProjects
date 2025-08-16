const books = ["Lord of the Rings", "Harry Potter", "To Kill a Mockingbird", "1984"];

console.log(books);

// change index values
books[2] = "The Catcher in the Rye";
books[3] = 1984;

// add new value to array
books[books.length] = "The Adventures of Tom Sawyer";

// add value specifically to index 10
books[10] = "Animal Farm";

// add and override value at index 5
books[5] = "War and Peace";

// ARRAY METHODS:
// add a value to end of array
books.push("The Great Gatsby");

// add multiple values to end of array
books.push("Pride and Prejudice", "Jane Austen");

// remove last value (Jane Austen)
books.pop(); 

console.log(books);

// insert "Brave New World" at index 2
books.splice(2, 0, "Brave New World"); 

// replace "To Kill a Mockingbird" with "The Old Man and the Sea" at index 3
books.splice(3, 1, "The Old Man and the Sea", "1985"); 

// locate which index "The Great Gatsby" is at
console.log(books.indexOf("The Great Gatsby"));