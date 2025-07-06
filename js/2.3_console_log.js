function sendConsoleMessage()
{
    var paragraph = document.getElementById("p1");
    console.log("Message received.");
    paragraph.style.display = "block";
    paragraph.style.color = "green";
}