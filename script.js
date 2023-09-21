
function getComputerChoice() {
    let compChoice = Math.random();
    if (compChoice <= 0.32) {
        return "Rock!";
    } else if (compChoice > 0.32 && compChoice <= 0.65) {
        return "Paper!";
    } else return "Scissors!"
};
console.log(getComputerChoice())