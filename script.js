
function getComputerChoice() {
    let compChoice = Math.floor(Math.random() * 3);
    switch (compChoice) {
        case 0:
            return('rock');
            break;
        case 1:
            return('paper');
            break;
        case 2:
            return('scissors');
            break;
    }
};

const compChoice = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    //let playerSelection = prompt("Rock, Paper or Scissors?");
    if (playerSelection == computerSelection) {
        return alert("Tie! Play again");
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        return alert("You lose! Paper beats Rock.");
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        return alert("You lose! Scissors beats paper.");
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return alert("You lose! Rock beats scissors.");
    } else return alert("You win!")
};

function game() {
    for(i = 0; i < 5; i++) {
        console.log(playRound('rock', compChoice));
    }
};

console.log(playRound('rock', compChoice));
console.log(compChoice);
//console.log(game());n