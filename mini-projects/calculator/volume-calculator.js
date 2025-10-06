// Cube
function calcCubeVol()
{
    const a = parseFloat(document.getElementById("cube-length").value);

    // calculate volume
    const b = (a * a * a);

    // validate answer
    if (isNaN(b))
    {
        alert("Please enter a valid number.");
        return;
    }

    // display result
    document.getElementById("cube-result").innerText = "Volume: " + b;
}

// Cuboid
function calcCuboidVol()
{
    // get values
    const length = parseFloat(document.getElementById("cuboid-length").value);
    const width = parseFloat(document.getElementById("cuboid-width").value);
    const height = parseFloat(document.getElementById("cuboid-height").value);

    // calculate volume
    const volume = (length * width * height);

    // validate answer
    if (isNaN(volume))
    {
        alert("Please enter valid numbers.");
        return;
    }

    // display result
    document.getElementById("cuboid-result").innerText = "Volume: " + volume;
}

// Sphere
function calcSphereVol()
{
    // get value
    const radius = parseFloat(document.getElementById("sphere-radius").value);

    // calculate volume
    const volume = (4/3) * Math.PI * (radius * radius * radius);

    // validate answer
    if (isNaN(volume))
    {
        alert("Please enter a valid number.");
        return;
    }

    // display result (2 decimal places)
    document.getElementById("sphere-result").innerText = "Volume: " + volume.toFixed(2);
}

// Cylinder
function calcCylinderVol()
{
    // get values
    const radius = parseFloat(document.getElementById("cylinder-radius").value);
    const height = parseFloat(document.getElementById("cylinder-height").value);

    // calculate volume
    const volume = Math.PI * (radius * radius) * height;

    // validate answer
    if (isNaN(volume))
    {
        alert("Please enter valid numbers.");
        return;
    }

    // display result (2 decimal places)
    document.getElementById("cylinder-result").innerText = "Volume: " + volume.toFixed(2);
}