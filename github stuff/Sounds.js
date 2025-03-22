//Took me a few to figure out how to program 4 buttons.
//Button functions for coin sound
function play1()
{
    mySound = new sound("coin-257878.mp3");
    mySound.play();
    document.getElementById("Click For Coin").disabled = true;
    document.getElementById("Click For No Coin").disabled = false;
}

function stop1()
{
    window.location.reload();
}
//Button functions for mario death sound
function play2()
{
    mySound = new sound("mario death.mp3");
    mySound.play();
    document.getElementById("Click For Death").disabled = true;
    document.getElementById("Click For No Death").disabled = false;
}

function stop2()
{
    window.location.reload();
}
function sound(src)
{   // add play function
    this.sound = document.createElement("audio") ;//create audio
    this.sound.src = src;//define src
    this.play = function() {//music function
    this.sound.play();//play sound
    }
}