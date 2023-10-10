let playerScore = 0;
let computerScore = 0;
const gameButtons = document.querySelectorAll('.gameButton');
let compChoice;
const compArr = ["rock","paper","scissors"];
const getCompChoice = () => {
    compChoice = compArr[Math.floor(Math.random() * 3)];
};

gameButtons.forEach(gameButtons => {
    gameButtons.addEventListener('click', () => {
        getCompChoice();
        let playerButton = gameButtons.textContent.toLowerCase();
        document.querySelector('#gamecomments').textContent = `${playRound(playerButton, compChoice)}`;
        document.querySelector('.computerChoice').textContent = `Computer chose ${compChoice}!`;
        document.querySelector('.playerChoice').textContent = `You chose ${playerButton}!`;
        document.querySelector('#playerScore').textContent = `${playerScore}`;
        document.querySelector('#computerScore').textContent = `${computerScore}`;
        if (playerScore == '5') {
            return alert("You won the game!");
        } else if (computerScore == '5') {
            return alert("You lost to the computer :'(")
        };
    });
});

const playRound = (playerSelection, computerSelection) => {
    if (playerSelection == computerSelection) {
        return "Tie! Play again";
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        computerScore++;
        return "You lose! Paper beats Rock."; 
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        computerScore++;
        return "You lose! Scissors beats paper.";
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        computerScore++;
        return "You lose! Rock beats scissors."; 
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        playerScore++;
        return "You win! Rock beats scissors.";
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        playerScore++;
        return "You win! Paper beats rock.";
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        playerScore++;
        return "You win! Scissors beats paper.";
    }
};

console.log(playerScore);
console.log(computerScore);

//console.log(compChoice);
//console.log(game());