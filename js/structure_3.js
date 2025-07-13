let isOpen = false;

// person object
const person = 
{
    name: "John Doe",
    age: 32,
    greet: function() // access method
    {
        var x = this.name;
        var y = this.age;
        return ("Hello, my name is " + x + ", and I'm " + y + " years old."); // return with string
    },
}
// rectangle object
const rectangle = 
{
    height: 5,
    width: 10,
    resize: function (newHeight, newWidth)
    {
        this.height = newHeight;
        this.width = newWidth;
    },
}
// obj object
const obj =
{
    property: false,
    method: function (value)
    {
        this.property = value;
        return "Property value updated.";
    },
}
// car object
const car =
{
    type: "Toyota",
    spec: "SUV",
    size: "Large",
    maxSpeed: 120, 
    setType: function(type)
    {
        const types = ["Toyota", "Honda", "Ford", "BMW", "Volvo"]; // array of valid car types

        if (types.includes(type))
        {
            this.type = type;
            return "Car type updated to: " + this.type;
        }
        else
        {
            return "Invalid car type. Available models: " + types.join(", ");
        }
    },
    setSpecification: function(spec)
    {
        const specs = ["Sedan", "SUV", "Hatchback", "Coupe", "Convertible"];
        if (specs.includes(spec))
        {
            this.spec = spec;
            return "Car specification updated to: " + this.spec;
        }
        else
        {
            return "Invalid car specification. Available specs: " + specs.join(", ");
        }
    },
    setSize: function(size)
    {
        const sizes = ["S", "M", "L", "XL"];
        const upperCaseSize = size.toUpperCase(); // convert to uppercase

        if (sizes.includes(upperCaseSize)) // check size is in array
        {
            switch (upperCaseSize)
            {
                case "S":
                    this.size = "Small";
                    return "Car size updated to: " + this.size;
                    break;
                case "M":
                    this.size = "Medium";
                    return "Car size updated to: " + this.size;
                    break;
                case "L":
                    this.size = "Large";
                    return "Car size updated to: " + this.size;
                    break;
                case "XL":
                    this.size = "Extra Large";
                    return "Car size updated to: " + this.size;
                    break;
                default:
                    return "Invalid car size. Available sizes: " + sizes.join(", ");
                    break;
            }       
        }
        else
        {
            return "Invalid car size. Available sizes: " + sizes.join(", ");
        }
    },
    setMaxSpeed: function(speed)
    {
        this.maxSpeed = speed;
        return "Max speed updated to: " + this.maxSpeed;
    },
    displayInfo: function()
    {
        var a = this.type;
        var b = this.spec;
        var c = this.size;
        var d = this.maxSpeed;
        return (
            "Car type: " + a + "\nSpecification: " + b + "\nSize: " + c + "\nMax Speed: " + d // '\n' adds new line
        );
    },
}
// smartphone object
const smartphone =
{
    brand: "Apple",
    model: "iPhone 16 Pro",
    color: "White",
    os: "iOS",
    resolution: 
    {
        height: 1136,
        width: 640,
    },
    changeSpecs: function(brand, model, color, os)
    {
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.os = os;
        return "Smartphone specifications updated to: " + brand + ", " + model + ", " + color + ", " + os;
    },
    setResolution: function(height, width)
    {
        this.resolution.height = height;
        this.resolution.width = width;
        return ("Resolution updated to: " + height + " x " + width);
    },
    displaySpecs: function()
    {
        let height = this.resolution.height;
        let width = this.resolution.width;

        var a = this.brand;
        var b = this.model;
        var c = this.color;
        var d = (height + " x " + width);
        var e = this.os;
        return (
            "Brand: " + a + "\nModel: " + b + "\nColor: " + c + "\nResolution: " + d + "\nOperating System: " + e
        );
    },
}

// Testing area
window.onload = function() 
{
    
}
function saves()
{
    // person
    console.log(person.greet()); // access method
    // rectangle
    console.log("Before resize:", rectangle.width, rectangle.height); // default values
    rectangle.resize(10, 20); // access method
    console.log("After resize:", rectangle.width, rectangle.height); // new values
    // object
    console.log(obj.property);
    console.log(obj.method(true)) // access method
    console.log(obj.property);
    // car
    console.log(car.displayInfo());
    console.log(car.setType("Volvo"));
    console.log(car.setSize("xl"))
    console.log(car.displayInfo());
    // smartphone
    console.log(smartphone.displaySpecs());
    console.log(smartphone.changeSpecs("Samsung", "Galaxy S21 Ultra", "Black", "Android"));
    console.log(smartphone.setResolution(1280, 720));
    console.log(smartphone.displaySpecs());
    

}
function toggleSpoiler() 
{
    let spoiler = document.getElementById("spoiler");

    if (isOpen === true) 
    {
        spoiler.style.display = "none";
        isOpen = false;
    } 
    else 
    {
        spoiler.style.display = "block";
        isOpen = true;
    }
}
function appendForm() 
{
    let x = document.getElementById("section2");
    const formBuilder = formFactory();
    const newForm = formBuilder.createForm();
    x.appendChild(newForm);
}
function formFactory()
{
    function createForm() 
    {
        const newForm = document.createElement("div");
        newForm.setAttribute("id", "new-form");
        newForm.style.backgroundColor = "#e0e0ff";

        // Create all form elements
        const submitForm = createSubmitForm();
        const subForm1 = createSubForm1();
        const subForm2 = createSubForm2();
        const subForm3 = createSubForm3();

        // Create labels and inputs
        const label1 = createLabel1();
        const input1 = createInput1();
        const label2 = createLabel2();
        const input2 = createInput2();
        const submitBtn = createSubmitButton();

        // Assemble the form structure
        subForm2.appendChild(label1);
        subForm2.appendChild(input1);
        subForm3.appendChild(label2);
        subForm3.appendChild(input2);
        subForm1.appendChild(subForm2);
        subForm1.appendChild(subForm3);
        subForm1.appendChild(submitBtn);
        submitForm.appendChild(subForm1);
        newForm.appendChild(submitForm);

        return newForm;
    }
    function createSubmitForm() 
    {
        const submitForm = document.createElement("div");
        submitForm.style.padding = "0";
        submitForm.style.border = "none";
        return submitForm;
    }
    function createSubmitButton() 
    {
        const submitBtn = document.createElement("button");
        submitBtn.type = "submit";
        submitBtn.textContent = "Submit";
        submitBtn.onclick = function(e) 
        {
            e.preventDefault();
            appendForm();
        };

        return submitBtn;
    }
    function createSubForm1() 
    {
        const subForm1 = document.createElement("form");
        subForm1.setAttribute("id", "sub-form");
        subForm1.style.border = "1px solid black";
        subForm1.style.backgroundColor = "#d5ffd9";
        subForm1.style.textAlign = "left";
        subForm1.style.padding = "1rem";
        subForm1.onsubmit = function(e) 
        {
            e.preventDefault();
            output(e);
        }

        return subForm1;
    }
    function createSubForm2() 
    {
        const subForm2 = document.createElement("div");
        subForm2.setAttribute("id", "sub-form-2");
        subForm2.style.display = "flex";
        subForm2.style.justifyContent = "space-around";
        subForm2.style.margin = "1rem 0";

        return subForm2;
    }
    function createSubForm3() 
    {
        const subForm3 = document.createElement("div");
        subForm3.setAttribute("id", "sub-form-3");
        subForm3.style.display = "flex";
        subForm3.style.justifyContent = "space-around";
        subForm3.style.margin = "1rem 0";

        return subForm3;
    }
    function createLabel1() 
    {
        const label1 = document.createElement("label");
        label1.setAttribute("for", "name");
        label1.style.width = "50%";
        label1.textContent = "Enter your name:";

        return label1;
    }
    function createLabel2() 
    {
        const label2 = document.createElement("label");
        label2.setAttribute("for", "age");
        label2.style.width = "50%";
        label2.textContent = "Enter your age:";

        return label2;
    }
    function createInput1() 
    {
        const input1 = document.createElement("input");
        input1.setAttribute("id", "name");
        input1.setAttribute("type", "text");
        input1.setAttribute("required", "");
        input1.style.width = "50%";

        return input1;
    }
    function createInput2() 
    {
        const input2 = document.createElement("input");
        input2.setAttribute("id", "age");
        input2.setAttribute("type", "number");
        input2.setAttribute("required", "");
        input2.style.width = "50%";

        return input2;
    }
    
    // return the functions as an object (open brace must stay on same line)
    return {
        createForm,
        createSubmitForm,
        createSubmitButton,
        createSubForm1,
        createSubForm2,
        createSubForm3,
        createLabel1,
        createLabel2,
        createInput1,
        createInput2
    }
}

// add the missing output function
function output(event) 
{
    event.preventDefault();
    const form = event.target;
    const name = form.querySelector('#name').value;
    const age = form.querySelector('#age').value;

    // create output display
    const outputDiv = document.createElement("div");
    outputDiv.style.backgroundColor = "#fff0f0";
    outputDiv.style.padding = "1rem";
    outputDiv.style.margin = "1rem 0";
    outputDiv.innerHTML = `<p><strong>Name:</strong> ${name}</p><p><strong>Age:</strong> ${age}</p>`;

    // Append output below the form
    form.parentNode.appendChild(outputDiv);
}