function calcBMI()
{
    // get values from input fields
    const x = parseFloat(document.getElementById("bmi-weight").value);
    const y = parseFloat(document.getElementById("bmi-height").value);

    // convert height cm to m
    const z = (y / 100);

    // calculate BMI
    const bmi = x / (z * z);

    // validate answer
    if (isNaN(bmi))
    {
        alert("Please enter valid numbers.");
    }
    else
    {
        let result = document.getElementById("bmi-result");
        
        if (bmi < 18.5) // underweight
        {
            result.innerText = "BMI: " + bmi.toFixed(2) + " - Underweight";
        }
        else if (bmi >= 18.5 && bmi <= 24.9) // healthy weight
        {
            result.innerText = "BMI: " + bmi.toFixed(2) + " - Normal weight";
        }
        else if (bmi >= 25.0 && bmi <= 29.9) // overweight
        {
            result.innerText = "BMI: " + bmi.toFixed(2) + " - Overweight";
        }
        else if (bmi >= 30.0) // obese
        {
            result.innerText = "BMI: " + bmi.toFixed(2) + " - Obese";
        }
    }
}