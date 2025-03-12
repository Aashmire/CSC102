function strings321()
{
    //Variables for the palindrome checker
    var string1 = document.getElementById("firstString").value;
    var string2 = document.getElementById("secondString").value;
    //Here is the code for the palindrome checker
    var splitstr = string1.split("");
    var reversestr = splitstr.reverse("");
    var joinstr = reversestr.join("");
    //Conditions
    if (string1 == joinstr)
    {
        document.getElementById("updates").innerHTML = "You're A Palindrome!";
    }
    else
    {
        document.getElementById("updates").innerHTML = "You Are NOT A Palindrome!";
    }
    //Here is the code I added to ask the user for input in string 2
    if (string2.length == 0)
    {
        document.getElementById("Play Again?").innerHTML = "Enter String 2!";
    }
    else if (string2 == joinstr)
    {
        document.getElementById("Play Again?").innerHTML = "You're A Palindrome!";
    }
    else 
    {
        document.getElementById("Play Again?").innerHTML = "You Are NOT A Palindrome!";
    }
}