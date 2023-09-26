
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
    // switch statement better suits this circumstance
    /* if (compChoice === 0) {
        return "Rock";
    } else if (compChoice === 1) {
        return "Paper";
    } else if (compChoice === 2) {
     return "Scissors";
    } */
};
const compChoice = getComputerChoice();
console.log(compChoice);
/*const computerSelection = getComputerChoice();
const playerSelection = "paper"*/
function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "Tie! Play again";
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        return "You lose! Paper beats Rock.";
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        return "You lose! Scissors beats paper.";
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return "You lose! Rock beats scissors.";
    } else return "You win!"
};

console.log(playRound('rock', compChoice));
console.log(compChoice);