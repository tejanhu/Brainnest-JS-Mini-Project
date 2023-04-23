var pc_selection = computerPlay();
var player_selection = " ";
var player_score = 0;
var pc_score = 0;

function computerPlay(){
    pc_choice = Math.random();
    if (pc_choice < 0.5) {
        pc_choice = "Rock";
    } else if(pc_choice <= 1.5) {
        pc_choice = "Paper";
    } else {
        pc_choice = "Scissors";
    }
    return pc_selection = pc_choice;
}

function playerPlay(){
   return player_selection = prompt("What would you like to play with?");  
}

function playRound(player_selection, pc_selection){
    var msg = "";

    if(pc_selection === ("Paper") && player_selection === ("Rock")){
        console.log("You chose: " + player_selection);
        console.log("The PC chose: " + pc_selection);
        pc_score+=10;
        msg = "You lost this round! Paper beats Rock!";
    }
    else if(pc_selection === ("Rock") && player_selection === ("Paper")){
        console.log("You chose: " + player_selection);
        console.log("The PC chose: " + pc_selection);
        player_score+=10;
        msg = "You won this round! Paper beats Rock!";
    }
    else if(pc_selection === ("Scissors") && player_selection === ("Paper")){
        console.log("You chose: " + player_selection);
        console.log("The PC chose: " + pc_selection);
        pc_score+=10;
        msg = "You lost this round! Scissors beats Paper!";
    }
    else if(pc_selection === ("Paper") && player_selection === ("Scissors")){
        console.log("You chose: " + player_selection);
        console.log("The PC chose: " + pc_selection);
        player_score+=10;
        msg = "You won this round! Scissors beats Paper!";
    }
    else if(pc_selection === ("Rock") && player_selection === ("Scissors")){
        console.log("You chose: " + player_selection);
        console.log("The PC chose: " + pc_selection);
        pc_score+=10;
        msg = "You lost this round! Rock beats Scissors!";
    }
    else if(pc_selection === ("Scissors") && player_selection === ("Rock")){
        console.log("You chose: " + player_selection);
        console.log("The PC chose: " + pc_selection);
        player_score+=10;
        msg = "You won this round! Rock beats Scissors!";
    }
    else if(pc_selection === ("Rock") && player_selection === ("Rock")){
        console.log("You chose: " + player_selection);
        console.log("The PC chose: " + pc_selection);
        player_score+=10;
        pc_score+=10;
        msg = "It's a tie this round! You both have a Rock!";
    }
    else if(pc_selection === ("Scissors") && player_selection === ("Scissors")){
        console.log("You chose: " + player_selection);
        console.log("The PC chose: " + pc_selection);
        player_score+=10;
        pc_score+=10;
        msg = "It's a tie this round! You both have Scissors!";
    }
    else if(pc_selection === ("Paper") && player_selection === ("Paper")){
        console.log("You chose: " + player_selection);
        console.log("The PC chose: " + pc_selection);
        player_score+=10;
        pc_score+=10;
        msg = "It's a tie this round! You both have Paper!";
    }
    return msg;
}

function game(){
    for(let i = 1; i <= 5; i++){ 
       
       console.log("Round "+ i + ": ");
      
       if(i == 5){
        if(pc_score > player_score){
            console.log("The winner is The PC!");
        }
        else if(player_score > pc_score){
            console.log("You're the winner!");
        }
        else if(player_score == pc_score){
            console.log("You both are winners!")
        }
        console.log("PC SCORE: " + pc_score) 
        console.log("PLAYER SCORE: " + player_score) 
       }
       else{
        playerPlay();
        computerPlay();
        console.log(playRound(player_selection, pc_selection));
       }
    }
}

console.log(game());