class Animal
{
    constructor(name, breed, age, size, color, isTamed)
    {
        this.name = name;
        this.breed = breed;
        this.age = age;
        this.size = size;
        this.color = color;
        this.isTamed = isTamed;
    }
    displayInfo()
    {
        console.log("Name: " + this.name);
        console.log("Breed: " + this.breed);
        console.log("Age: " + this.age);
        console.log("Size: " + this.size);
        if (Array.isArray(this.color)) // check color is stored as array
        {
            console.log("Color: " + this.color.join(", "));
        } 
        else 
        {
            console.log("Color: " + this.color);/*  */
        }
        console.log("Is Tamed: " + this.isTamed);
    }
    setTamed(value)
    {
        this.isTamed = value;
        console.log("Tamed status updated to: " + this.isTamed);
    }
}

const cat = new Animal("Cat", "Persian", 12, "Small", "Ginger", true);
const dog = new Animal("Dog", "Siberian Husky", 5, "Large", ["Black", "White"], true);
const fox = new Animal("Fox", "Red Fox", 10, "Medium", ["Orange", "White"], false);
const owl = new Animal("Owl", "Barn Owl", 8, "Medium", "White", false);
const bear = new Animal("Bear", "Polar", 15, "Large", "White", true);

fox.setTamed(true);
fox.displayInfo();