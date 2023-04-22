function computerPlay(){
    var tools = ["Rock", "Paper", "Scissors"];
    var randomise_tools = tools[Math.floor(Math.random()*(tools.length))];
    alert("The Computer chose to play: " + randomise_tools);
}

const playerSelection = "Rock";
const pcSelection = computerPlay();

function playRound(playerSelection, pcSelection){
    var msg = "";
    if(playerSelection==("Rock") && pcSelection==("Paper")){
       msg = "You Lose! Paper beats Rock!";
    }
    else if(playerSelection==("Paper") && pcSelection==("Rock")){
        msg = "You Win! Paper beats Rock!";
    }
    else if(playerSelection==("Paper") && pcSelection==("Scissors")){
        msg = "You Lose! Scissors beats Paper!";
    }
    else if(playerSelection==("Scissors") && pcSelection==("Paper")){
        msg = "You Win! Scissors beats Paper!";
    }
    else if(playerSelection==("Scissors") && pcSelection==("Rock")){
        msg = "You Lose! Rock beats Scissors!";
    }
    else if(playerSelection==("Rock") && pcSelection==("Scissors")){
        msg = "You Win! Rock beats Scissors!";
    }
    else if(playerSelection==("Rock") && pcSelection==("Rock")){
        msg = "It's a Tie! You both have a Rock!";
    }
    else if(playerSelection==("Scissors") && pcSelection==("Scissors")){
        msg = "It's a Tie! You both have Scissors!";
    }
    else if(playerSelection==("Paper") && pcSelection==("Paper")){
        msg = "It's a Tie! You both have Paper!";
    }

    return msg;
}


console.log(playRound(playerSelection, pcSelection));

function game(){
    for(let i = 0; i < 5; i++){
        playRound();
    }
}