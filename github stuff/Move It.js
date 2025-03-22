//global variables
var change = 100;
var intervalidID = 0;
function intervalStart()
{
    //local variables
    var image = document.getElementById("imageMeme")

    document.getElementById("startbutton").disabled = true;
    document.getElementById("stopbutton").disabled = false;

    intervalidID = setInterval(function()
    {
        image.style.top = change + "px";
        image.style.left = change + "px";

        //document.getElementById("XandY").innerHTML = " x = " + image.style.left + " y = " + image.style.top;
    
        // I lowered this number for smoother movement.
        change += 1;
    },40); // The number of ms before repeating, I lowered this number to make it faster.
}
function intervalStop()
{
    document.getElementById("stopbutton").disabled = true;
    document.getElementById("startbutton").disabled = false;
    clearInterval(intervalidID);
}