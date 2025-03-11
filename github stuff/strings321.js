function strings321()
{
    var string1 = document.getElementById("firstString").value;
    var string2 = document.getElementById("secondString").value;
    var str3 = string1 + string2;
    //document.getElementById("updates").innerHTML= "Concatenated string = " + str3;

    var len = str3.length;
    //document.getElementById("updates").innerHTML= "len of concat string =" + len;

    var substring = str3.substring(1,3)
    //document.getElementById("updates").innerHTML="substring of str3 (1,3) = " + substring;
    var lowerC = str3.toLowerCase();
    lowerC = lowerC.replace(/qwe/g, "asd");
    //var repBL = str3.replace(/qwe/g, "asd");
    //document.getElementById("updates").innerHTML="replace qwe with asd" + repBL;
    document.getElementById("updates").innerHTML="replace qwe with asd" + lowerC;

    //palindrome checker
    var splitstr = string1.split("");
    var reversestr = splitstr.reverse("");
    var joinstr = reversestr.join("");
    if (string1 == joinstr)
    {
        document.getElementById("updates").innerHTML = "You're A Palindrome!";
    }
    else
    {
        document.getElementById("updates").innerHTML = "You Are NOT A Palindrome!"
    }
}