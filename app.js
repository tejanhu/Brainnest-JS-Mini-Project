var player_score = 0;
var computer_score = 0;
var tools = ["rock", "paper", "scissors"];
let result = "";

function computerPlay(){
    randomise_tools = tools[Math.floor(Math.random()*(tools.length))];
    console.log("The Computer chose to play: " + randomise_tools);
    return randomise_tools;
}

function playerPlay(){
    let player_selection; 
    
    do{
        player_selection = prompt("What would you like to play with?").toLowerCase();
        console.log(player_selection);
        if(!tools.includes(player_selection)){
            console.log("You have entered an invalid input!");
            console.log("Please enter one of the following: " + "'Rock' or 'Paper' or 'Scissors'!");
        }
    }
    while(!tools.includes(player_selection)); 

    return player_selection;  
}

function playRound(playerPlay, computerPlay){
    

    if(playerPlay == computerPlay)
    {
        console.log("You chose: " + playerPlay);
        console.log("The PC chose: " + computerPlay);
        result = `It's a tie this round! You both have a ${playerPlay}!`;
    }
    
    else if(
        (playerPlay == "rock" && computerPlay == "paper") || 
        (playerPlay == "paper" && computerPlay == "scissors") || 
        (playerPlay == "scissors" && computerPlay == "rock")
        )
    {
            console.log("You chose: " + playerPlay);
            console.log("The PC chose: " + computerPlay);
            result = `You lost this round! ${computerPlay} beats ${playerPlay}!`;
    }

    else
    {
        console.log("You chose: " + playerPlay);
        console.log("The PC chose: " + computerPlay);
        result = `You won this round! ${playerPlay} beats ${computerPlay}!`;
    }

    return result;
}

function game(){
    for(let round = 1; round <= 5; round++){ 
        console.log("Round "+ round + ": ");
        console.log(playRound(playerPlay(), computerPlay()));
    }

    if(result.startsWith("You lost this round!")){
            computer_score+=10;
            console.log("The winner is The PC!");
    } 
    else if(result.startsWith("You won this round!")){
            player_score+=10;
            console.log("You're the winner!");
    }
    else {
            player_score+=10;
            computer_score+=10;
            console.log("You both are winners!");
    }

    console.log("PC SCORE: " + computer_score); 
    console.log("PLAYER SCORE: " + player_score); 
}

console.log(game());