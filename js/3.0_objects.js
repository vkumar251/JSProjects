// OBJECTS:
// are list of properties inside the braces of a variable


// create basic object
const car = new Object();
// apply properties to (car) object
car.color = "Blue";
car.model = "Volvo";
car.year = 2021;
car.maxSpeed = 200;

// display car information
function displayCarInfo()
{
    // innerHTML = takes in HTML tags; textContent = takes in plain text
    var output = document.getElementById("car-output");
    
    let outputCarType = "Car Type: " + car.model + "<br>";
    let outputCarColor = "Car Colour: " + car.color + "<br>";
    let outputCarYear = "Car Year: " + car.year + "<br>";
    let outputCarSpeed = "Car Speed: " + car.maxSpeed + " mph";

    output.innerHTML = "<strong>Car Details:</strong><br> " + outputCarType + outputCarColor + outputCarYear + outputCarSpeed;
}

// create object inside braces
const person =
{
    name: "John Doe",
    dob: "15-05-1990",
    age: 30,
    nationality: "British",
    address: "123 Main Street, London, UK",
    hobbies: ["Reading", "Gardening", "Cooking"], // array
}
function displayPersonInfo()
{
    var output = document.getElementById("person-output");
    var outputPersonName = "Name: " + person.name + "<br>";
    var outputPersonDOB = "Date of Birth: " + person.dob + "<br>";
    var outputPersonAge = "Age: " + person.age + "<br>";
    var outputPersonNat = "Nationality: " + person.nationality + "<br>";
    var outputPersonAddress = "Address: " + person.address + "<br>";
    var outputPersonHobbies = "Hobbies: " + person.hobbies + "<br>"; // person.hobbies[0] = display first array value only

    output.innerHTML = "<strong>Person Details:</strong><br> " + outputPersonName + outputPersonDOB + outputPersonAge + 
    outputPersonNat + outputPersonAddress + outputPersonHobbies;
}
// create constructor function
function Brand(name, description, version, year, field)
{
    this.name = name;
    this.description = description;
    this.version = version;
    this.year = year;
    this.field = field;
}
function displayBrandInfo()
{
    // create new Object from the constructor function
    const myBrand = new Brand("VKPortfolio", "A portfolio website.", "v1.2", "2022", "Computer Science"); // object 1
    const myBrand2 = new Brand("VKPortfolio-2", "A second portfolio website.", "v2.0", "2023", "Web Development"); // object 2 (not in use)

    var output = document.getElementById("brand-output");
    var outputBrandName = "Brand Name: " + myBrand.name + "<br>";
    var outputBrandDescription = "Brand Description: " + myBrand.description + "<br>";
    var outputBrandVer = "Brand Version: " + myBrand.version + "<br>";
    var outputBrandYear = "Brand Year: " + myBrand.year + "<br>";
    var outputBrandField = "Brand Field: " + myBrand.field;

    output.innerHTML = "<strong>Brand Details:</strong><br> " + outputBrandName + outputBrandDescription + outputBrandVer + outputBrandYear + outputBrandField;
}