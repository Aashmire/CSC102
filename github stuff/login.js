function checkCreds()
{
    var firstname = document.getElementById("fname").value;
    var lastname = document.getElementById("lname").value;
    var fullname = firstname + " " + lastname;
    var badgenum = document.getElementById("badgeID").value;
    var zipcode = document.getElementById("zipcode").value
    var passw = document.getElementById("PW").value;
    //I wanted to make this variable check for a combination of letters and numbers but for now I kept it simple
    var classlvl = document.getElementById("classlvl").value;

    if (fullname.length <= 1)
    {
        document.getElementById("loginstatus").innerHTML = "Name Cannot Be Blank!";
    }
    //The badge number can now be between 3 and 6 digits
    else if ((badgenum<100) || (badgenum>999999))
    {
        document.getElementById("loginstatus").innerHTML = "Invalid Badge Number!";
    }
    //For the sake of this assignment I kept this check simple and made it the same as the check for names just a different error message
    else if (classlvl.length <= 1)
    {
        document.getElementById("loginstatus").innerHTML = "Please Input Class and Level!";
    }
    //I added the zipcode check here. I had to make the range between 1k and 999999 to account for the 0 in front of some zipcodes ie. 02860 is my zipcode and was not working
    else if ((zipcode<1000) || (zipcode>99999))
    {
        document.getElementById("loginstatus").innerHTML = "Invalid Zipcode!";
    }
    //I realized it was'nt enough to have just the above code for the zipcode because if you missed a number and it was still > 1k it would advance with a sucessful login
    else if (zipcode.length <5)
    {
        document.getElementById("loginstatus").innerHTML = "Invalid Zipcode!";
    }
    //I shortened the PW and made it the initials of my guild CGS = Castlegrayskull
    else if (passw != "CGS")
    {
        document.getElementById("loginstatus").innerHTML = "Invalid Password!";
    }
    else
    {
        document.getElementById("loginstatus").innerHTML = "Login Successful!";
        //I linked this page to my first webpage so this will be the login page to get there
        location.replace("CSC102.html");
    }
}