const compArr = ["rock","paper","scissors"];
const gameButtons = document.querySelectorAll('.gameButton');
const gameComments = document.querySelector('#gameComments');
let playerScore = 0;
let computerScore = 0;
let compChoice;

const getCompChoice = () => {
    compChoice = compArr[Math.floor(Math.random() * 3)];
};

gameButtons.forEach(gameButtons => {
    gameButtons.addEventListener('click', () => {
        getCompChoice();
        let playerChoice = gameButtons.textContent.toLowerCase();
        gameComments.textContent = `${playRound(playerChoice, compChoice)}`;
        document.querySelector('.computerChoice').textContent = `Computer chose ${compChoice}!`;
        document.querySelector('.playerChoice').textContent = `You chose ${playerChoice}!`;
        document.querySelector('#playerScore').textContent = `${playerScore}`;
        document.querySelector('#computerScore').textContent = `${computerScore}`;
        checkWinner();
        reset()
    });
});

const checkWinner = () => {
    if (playerScore == '5') {
        return alert("You won the game!");
    } else if (computerScore == '5') {
        return alert("You lost to the computer :'(")
    };
};

const reset = () => {
    if (playerScore == '5' || computerScore == '5') {
        const resetButton = document.createElement('button');
        resetButton.innerText = 'Reset';
        document.getElementById('buttondiv').append(resetButton);
        resetButton.addEventListener('click', () => {
            location.reload();
            return false;   
    });
}};

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