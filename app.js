var computer_selection = computerPlay();
var player_selection = " ";
var player_score = 0;
var computer_score = 0;
var tools = ["rock", "paper", "scissors"];

function computerPlay(){
    randomise_tools = tools[Math.floor(Math.random()*(tools.length))];
    console.log("The Computer chose to play: " + randomise_tools);
    return computer_selection = randomise_tools;
}

function playerPlay(){
   return player_selection = prompt("What would you like to play with?");  
}

function playRound(player_selection, computer_selection){
    var msg = "";

    if(computer_selection === ("Paper") && player_selection.toLowerCase() === ("Rock").toLowerCase() && player_selection.toUpperCase() === ("Rock").toUpperCase()){
        console.log("You chose: " + player_selection);
        console.log("The PC chose: " + computer_selection);
        computer_score+=10;
        msg = "You lost this round! Paper beats Rock!";
    }
    else if(computer_selection === ("Rock") && player_selection.toLowerCase() === ("Paper").toLowerCase() && player_selection.toUpperCase() === ("Paper").toUpperCase()){
        console.log("You chose: " + player_selection);
        console.log("The PC chose: " + computer_selection);
        player_score+=10;
        msg = "You won this round! Paper beats Rock!";
    }
    else if(computer_selection === ("Scissors") && player_selection.toLowerCase() === ("Paper").toLowerCase() && player_selection.toUpperCase() === ("Paper").toUpperCase()){
        console.log("You chose: " + player_selection);
        console.log("The PC chose: " + computer_selection);
        computer_score+=10;
        msg = "You lost this round! Scissors beats Paper!";
    }
    else if(computer_selection === ("Paper") && player_selection.toLowerCase() === ("Scissors").toLowerCase() && player_selection.toUpperCase() === ("Scissors").toUpperCase()){
        console.log("You chose: " + player_selection);
        console.log("The PC chose: " + computer_selection);
        player_score+=10;
        msg = "You won this round! Scissors beats Paper!";
    }
    else if(computer_selection === ("Rock") && player_selection.toLowerCase() === ("Scissors").toLowerCase() && player_selection.toUpperCase() === ("Scissors").toUpperCase()){
        console.log("You chose: " + player_selection);
        console.log("The PC chose: " + computer_selection);
        computer_score+=10;
        msg = "You lost this round! Rock beats Scissors!";
    }
    else if(computer_selection === ("Scissors") && player_selection.toLowerCase() === ("Rock").toLowerCase() && player_selection.toUpperCase() === ("Rock").toUpperCase()){
        console.log("You chose: " + player_selection);
        console.log("The PC chose: " + computer_selection);
        player_score+=10;
        msg = "You won this round! Rock beats Scissors!";
    }
    else if(computer_selection === ("Rock") && player_selection.toLowerCase() === ("Rock").toLowerCase() && player_selection.toUpperCase() === ("Rock").toUpperCase()){
        console.log("You chose: " + player_selection);
        console.log("The PC chose: " + computer_selection);
        player_score+=10;
        computer_score+=10;
        msg = "It's a tie this round! You both have a Rock!";
    }
    else if(computer_selection === ("Scissors") && player_selection.toLowerCase() === ("Scissors").toLowerCase() && player_selection.toUpperCase() === ("Scissors").toUpperCase()){
        console.log("You chose: " + player_selection);
        console.log("The PC chose: " + computer_selection);
        player_score+=10;
        computer_score+=10;
        msg = "It's a tie this round! You both have Scissors!";
    }
    else if(computer_selection === player_selection){
        console.log("You chose: " + player_selection);
        console.log("The PC chose: " + computer_selection);
        player_score+=10;
        pc_score+=10;
        msg = `It's a tie this round! You both have a ${playerPlay}!`;
    }
    return msg;
}

function game(){
    for(let i = 1; i <= 5; i++){ 
       
       console.log("Round "+ i + ": ");
      
       if(i == 5){
        if(computer_score > player_score){
            console.log("The winner is The PC!");
        }
        else if(player_score > computer_score){
            console.log("You're the winner!");
        }
        else if(player_score == computer_score){
            console.log("You both are winners!")
        }
        console.log("PC SCORE: " + computer_score) 
        console.log("PLAYER SCORE: " + player_score) 
       }
       else{
        playerPlay();
        computerPlay();
        console.log(playRound(player_selection, computer_selection));
       }
    }
}

console.log(game());
