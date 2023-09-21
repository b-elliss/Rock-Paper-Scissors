
function getComputerChoice() {
    let compChoice = Math.random();
    if (compChoice <= 0.32) {
        return "Rock";
    } else if (compChoice > 0.32 && compChoice <= 0.65) {
        return "Paper";
    } else return "Scissors"
};
/*console.log(getComputerChoice())*/
function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "Tie! Play again";
    } else if (playerSelection == 'rock' && computerSelection == 'Paper') {
        return "You lose! Paper beats Rock.";
    } else if (playerSelection == 'paper' && computerSelection == 'Scissors') {
        return "You lose! Scissors beats paper.";
    } else if (playerSelection == 'scissors' && computerSelection == 'Rock') {
        return "You lose! Rock beats scissors.";
    } else return "You win!"
};
const playerSelection = "paper";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));