function play()
{
    mySound = new sound("coin-257878.mp3");
    mySound.play();
    document.getElementById("Click For Sound").disabled = true;
    document.getElementById("Click to Mute").disabled = false;
}

function stop()
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