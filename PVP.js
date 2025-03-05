function PVP()
{
    // generates a random # between 1 and 3
    var player1 = Math.ceil(Math.random()*3);
    var player2 = Math.ceil(Math.random()*3);

    // these are the images I've chosen for the game. They represent certain character classes
    var tankimage = "Tank.png";
    var paperimage = "Paper.png";
    var scissorsimage = "Scissors.png";

    // player 1 conditions
    if (player1 == 1)
    {
        document.getElementById("player1Img").src = rockimage;
    }
    else if (player1 == 2)
    {
        document.getElementById("player1Img").src = paperimage;    
    }
    else 
    {
        document.getElementById("player1Img").src = scissorsimage;
    }

    // player 2 conditions
    if (player2 == 1)
    {
        document.getElementById("player2Img").src = rockimage;
    }
    else if (player2 == 2)
    {
        document.getElementById("player2Img").src = paperimage;    
    }
    else 
    {
        document.getElementById("player2Img").src = scissorsimage;
    }

    // player results
    if (player1 == player2)
    {
        document.getElementById("FinalResult").innerHTML = "DRAW!";
    }
    else if ((player1 == 1 && player2 == 3) || (player1 == 2 && player2 == 1) || (player1 == 3 && player2 == 2))
    {
        document.getElementById("FinalResult").innerHTML = "Player 1 WINS!";
    }
    else
    {
        document.getElementById("FinalResult").innerHTML = "Player 2 WINS!";
    }
}