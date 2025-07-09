let isOpen = false;
function toggleSpoiler()
{
    let spoiler = document.getElementById("spoiler"); // locate spoiler element
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
    let x = document.getElementById("section2"); // target element, section2
    const newForm = form().createForm();
    x.appendChild(newForm); // append new form to section2
}
function form()
{
    // Objects for form elements
    function createForm()
    {
        const newForm = document.createElement("div");
        newForm.setAttribute("id", "new-form");
        newForm.style.backgroundColor = "#e0e0ff";
    }
    function createSubmitForm()
    {
        const submitForm = document.createElement("div");
        submitForm.style.padding = "0";
        submitForm.style.border = "none";
    }
    function createSubmitButton()
    {
        const submitBtn = document.createElement("button");
        submitBtn.type = "submit";
        submitBtn.onclick = appendForm;
    }
    function createSubForm1()
    {
        const subForm1 = document.createElement("form");
        subForm1.setAttribute("id", "sub-form");
        subForm1.style.border = "1px solid black";
        subForm1.style.backgroundColor = "#d5ffd9";
        subForm1.style.textAlign = "left";
        subForm1.onsubmit = output;
    }
    function createSubForm2()
    {
        const subForm2 = document.createElement("div");
        subForm2.setAttribute("id", "sub-form-2");
        subForm2.style.display = "flex";
        subForm2.style.justifyContent = "space-around";
    }
    function createSubForm3()
    {
        const subForm3 = document.createElement("div");
        subForm3.setAttribute("id", "sub-form-3");
        subForm3.style.display = "flex";
        subForm3.style.justifyContent = "space-around";
    }
    function createLabel1()
    {
        const label1 = document.createElement("label");
        label1.setAttribute("for", "name");
        label1.style.width = "50%";
        label1.textContent = "Enter your name:";
    }
    function createLabel2()
    {
        const label2 = document.createElement("label");
        label2.setAttribute("for", "age");
        label2.style.width = "50%";
        label2.textContent = "Enter your age:";
    }
    function createInput1()
    {
        const input1 = document.createElement("input");
        input1.setAttribute("id", "name");
        input1.setAttribute("type", "text");
        input1.setAttribute("required", "");
        input1.style.width = "50%";
    }
    function createInput2()
    {
        const input2 = document.createElement("input");
        input2.setAttribute("id", "age");
        input2.setAttribute("type", "number");
        input2.setAttribute("required", "");
        input2.style.width = "50%";
    }
    return // return as objects to use outside this function
    {
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


// archived code (for reference only)
function generateForm()
{
    const newForm = document.createElement("div");
    const submitForm = document.createElement("div");
    const submitBtn = document.createElement("button");
    const subForm1 = document.createElement("form");
    const subForm2 = document.createElement("div");
    const subForm3 = document.createElement("div");
    const label1 = document.createElement("label");
    const label2 = document.createElement("label");
    const input1 = document.createElement("input");
    const input2 = document.createElement("input");

    newForm.setAttribute("id", "new-form");
    newForm.style.backgroundColor = "#e0e0ff;";

    submitForm.style.padding = "0";
    submitForm.style.border = "none";
    submitBtn.type = "submit";
    submitBtn.onclick = appendForm;

    subForm1.setAttribute("id", "sub-form");
    subForm1.style.border = "1px solid black";
    subForm1.style.backgroundColor = "#d5ffd9";
    subForm1.style.textAlign = "left";
    subForm1.onsubmit = output(event);

    subForm2.setAttribute("id", "sub-form-2");
    subForm2.style.display = "flex";
    subForm2.style.justifyContent = "space-around";

    subForm3.setAttribute("id", "sub-form-3");
    subForm3.style.display = "flex";
    subForm3.style.justifyContent = "space-around";

    label1.setAttribute("for", "name");
    label1.style.width = "50%";
    label1.textContent = "Enter your name:";

    label2.setAttribute("for", "age");
    label2.style.width = "50%";
    label2.textContent = "Enter your age:";

    input1.setAttribute("id", "name");
    input1.setAttribute("type", "text");
    input1.setAttribute("required", "");
    input1.style.width = "50%";

    input2.setAttribute("id", "age");
    input2.setAttribute("type", "number");
    input2.setAttribute("required", "");
    input2.style.width = "50%";
}