let runBtn = document.querySelector("#btn-run");
var counter = 0;

window.onload = function()
{
    // load functions
    window.run = run;
    window.startTimer = startTimer;

    // enable event listeners
    runBtn.addEventListener("click", run); // execute run() when #btn-run is clicked
}
function run()
{
    var x = 5;
    var y = 56;
    let cost = 10;
    Fruit = "Apple";
    var car;
    var a = 3, b = 79, age = 43, name = "John Doe", isWorking = false;

    /* console.log("Counter outside function:", counter); */
    function increment()
    {
        counter++;
        console.log("Counter inside function:", counter);
    }

    function add()
    {
        var answer = (y + 10);
        console.log(answer);
    }

    function calculateCost(quantity)
    {
        cost = (cost * quantity);
        console.log("Total cost:", cost);
    }

    calculateCost(5);
    console.log("Cost:", cost);
}
function startTimer()
{
    for (let i = 1; i <= 10; i++)
    {
        setTimeout(function() 
        {
            console.log("Counter:", i);
        }, 1000);
    }
}