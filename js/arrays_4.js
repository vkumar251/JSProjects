// numeric array
let integers = [1, 2, 3, 4, 5];

// string array
let vegs = ["Carrots", "Potatoes", "Cucumbers"];

// mixed array
let mixed = [25, "element2", true];
let mixed2 = [1, "text", true, null, {name: "John Doe"}, [1, 2, 3]];

// object array
let cars = 
[
    {model: "Toyota", size: "xl", year: 2021},
    {model: "Volvo", size: "m", year: 2020},
    {model: "Ford", size: "l", year: 2019},
];

// matrix array (array containing more arrays)
let matrix =
[
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

// jagged array with sub-arrays of different lengths
let jagged =
[
    ["a", "b", "c"], // 3 elements
    ["d", "e"], // 2 elements
    ["f", "g", "h", "i"], // 4 elements
];

// empty array (not initialised, but can be filled in later)
let emptyArray = [];

const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
weekdays[weekdays.length] = "Saturday";
weekdays[weekdays.length] = "Sunday";

weekdays[4] = "Modified";

const colours = ["red", "blue", "green", "yellow"];

let months = ["January", "February", "March", "April"];

months.forEach((element) => 
{
    console.log(element);
});

let mapped = [1, 2, 3, 4, 5];
mapped.map((element) => 
{
    console.log(element * 2);
});

let animals = ["goose", "tiger", "fox", "owl"];
console.log(animals);

const x = animals.map((element) => 
{
    return animals[0];
});

console.log(x);

let horoscopes = ["Aquarius", "Taurus", "Gemini", "Cancer"];
console.log(horoscopes);
horoscopes.splice(1, 2);
console.log(horoscopes);

let horoscope = ["Aquarius", "Taurus", "Gemini", "Cancer", "Scorpio", "Virgo"];
console.log(horoscopes);
horoscopes.slice(2, 4);
console.log(horoscopes); 

horoscopes.splice(0, 2, "Capricorn", "Aries", "Libra"); */

let fruit = ["apple", "banana", "orange", "grape", "kiwi"];
const a = fruits.filter((fruits) => fruits.length > 5);

console.log(a); 

const ages = [32, 33, 16, 40, 14, 16, 24];
const adult = ages.filter(age => age >= 18);
const child = ages.filter(age => age < 18);

console.log(child);
console.log(adult);

const fruits = grocery.filter(item => item.type === "fruit");
const vegetables = grocery.filter(item => item.type === "vegetable");
const carbohydrates = grocery.filter(item => item.type === "carbohydrate");
const dairy = grocery.filter(item => item.type === "dairy");
const protein = grocery.filter(item => item.type === "protein");
const fats = grocery.filter(item => item.type === "fat"); 

console.log("Fruits:", fruits.map(item => item.name));
console.log("Vegetables:", vegetables.map(item => item.name));
console.log("Carbohydrates:", carbohydrates.map(item => item.name));
console.log("Dairy:", dairy.map(item => item.name));
console.log("Protein:", protein.map(item => item.name));
console.log("Fats:", fats.map(item => item.name));

const groceries = 
[
    {name: "apple", type: "fruit", calories: 50},
    {name: "pasta", type: "carbohydrate", calories: 300},
    {name: "chicken", type: "protein", calories: 150},
    {name: "cheese", type: "dairy", calories: 400},
    {name: "cucumber", type: "vegetable", calories: 75},
    {name: "bread", type: "carbohydrate", calories: 100},
    {name: "oil", type: "fat", calories: 300},
    {name: "milk", type: "dairy", calories: 200},
];

const healthy = groceries.filter(item => item.itemories < 200);
const unhealthy = groceries.filter(item => item.calories >= 200);

var lCalories = healthy.map(item => item.name);
var hCalories = unhealthy.map(item => item.name);

console.log("Low Calorie Groceries:", lCalories);
console.log("High Calorie Groceries:", hCalories);

const subjects = 
[
    {name: "Maths", scientific: false},
    {name: "History", scientific: false},
    {name: "Chemistry", scientific: true},
    {name: "Geography", scientific: false},
    {name: "Physics", scientific: true},
    {name: "Biology", scientific: true},
    {name: "Art", scientific: false},
    {name: "Music", scientific: false},
];
function isScientific(subject)
{
    return subject.scientific === true;
}
console.log(subjects.find(isScientific));


const horoscopes = ["Capricorn", "Aquarius", "Scorpio", "Aries", "Cancer", "Gemini"];
const output = horoscopes.indexOf("Scorpio");
console.log("Value 'Scorpio' found at index:", output);

const horoscopes2 = ["Capricorn", "Aquarius", "Scorpio", "Capricorn", "Aquarius", "Scorpio"];
const output2 = horoscopes2.indexOf("Capricorn", 2);
console.log("Value 'Capricorn' found at index:", output2);
