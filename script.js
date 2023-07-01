const choices = ["rock", "paper", "scissors"];
let playerScore = 0
let computerScore = 0

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}
//console.log(getComputerChoice());

function getPlayerChoice(playerChoice) {
    //let playerChoice = prompt("Enter Rock, Paper or Scissors").toLowerCase();
    if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors") {
        return playerChoice;
    }else {
        console.log("Enter valid text");
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return ("DRAW!");
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        ++computerScore
        return ("You lose! \nPaper beats rock!");
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        ++playerScore
        return ("You win! \nRock beats scissors!");
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        ++playerScore
        return ("You win! \nPaper beats rock!");
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        ++computerScore
        return ("You lose! \nScissors beats paper!");
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        ++computerScore
        return ("You lose! \nRock beats scissors!");
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        ++playerScore
        return ("You win! \nScissors beats paper!");
    }
}

function game() {
    //console.log(playRound(getPlayerChoice(), getComputerChoice()));

    const rock = document.getElementById("btn1");
    rock.addEventListener("click", function() {
        console.log(playRound(getPlayerChoice("rock"), getComputerChoice()));
    });
    
    const paper = document.getElementById("btn2");
    paper.addEventListener("click", function() {
        console.log(playRound(getPlayerChoice("paper"), getComputerChoice()));
    });

    const scissors = document.getElementById("btn3");
    scissors.addEventListener("click", function() {
        console.log(playRound(getPlayerChoice("scissors"), getComputerChoice()));
    });
    

    //if (playerScore > computerScore) {
        //console.log("You win the game!!!")
        //console.log(`Player score: ${playerScore}`);
        //console.log(`Computer score: ${computerScore}`);
    //} else {
        //console.log("You lose the game :(")
        //console.log(`Player score: ${playerScore}`);
        //console.log(`Computer score: ${computerScore}`);
    //}
}



game()
//console.log(playRound(getPlayerChoice(), getComputerChoice()))
