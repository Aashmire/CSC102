function PVP()
{
    // generates a random # between 1 and 4
    var player1Img1 = Math.ceil(Math.random()*4);
    var player1Img2 = Math.ceil(Math.random()*4);

    // these are the images I've chosen for the game. They represent certain character classes
    var tankimage = "Knight.png";
    var mageimage = "Mage.png";
    var rogueimage = "Rogue.png";
    var priestimage = "Priest.jpg";

    // player 1 image 1
    if (player1Img1 == 1)
    {
        document.getElementById("player1Img1").src = tankimage;
    }
    else if (player1Img1 == 2)
    {
        document.getElementById("player1Img1").src = mageimage;    
    }
    else if (player1Img1 == 3)
    {
        document.getElementById("player1Img1").src = rogueimage;
    }
    else if (player1Img1 == 4)
    {
        document.getElementById("player1Img1").src = priestimage;
    }
    // player 1 image 2
    if (player1Img2 == 1)
    {
        document.getElementById("player1Img2").src = tankimage;
    }
    else if (player1Img2 == 2)
    {
        document.getElementById("player1Img2").src = mageimage;    
    }
    else if (player1Img2 == 3)
    {
        document.getElementById("player1Img2").src = rogueimage;
    }
    else if (player1Img2 == 4)
    {
        document.getElementById("player1Img2").src = priestimage;
    }

    // player results
    if (player1Img1 == player1Img2)
    {
    document.getElementById("FinalResult").innerHTML = "You Win!";
    }
    else
    {
    document.getElementById("FinalResult").innerHTML = "You Lose!";
    }
}