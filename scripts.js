//Variable for keeping the score
let playerScore = 0;
let computerScore = 0;

//Get the DOM elements
const playerScore_span = document.getElementById("player-score");
const computerScore_span = document.getElementById("computer-score");
const lastWinner = document.getElementById("winner");

function computerTurn() {
    const choices = ['🪨', '📄', '✂️'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function game(playerChoice) {
    const computerChoice = computerTurn();
    const winner = getWinner(playerChoice, computerChoice);
    displayWinner(winner);
}

function getWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return lastWinner;
    }

    if (
        (playerChoice === '🪨' && computerChoice === '✂️') ||
        (playerChoice === '📄' && computerChoice === '🪨') ||
        (playerChoice === '✂️' && computerChoice === '📄')
    ) {
        playerScore++;
        return 'player';
    } else {
        computerScore++;
        return 'computer';
    }
}

function displayWinner(winner) {
    playerScore_span.textContent = playerScore;
    computerScore_span.textContent = computerScore;
    if(winner === 'player') {
        lastWinner.textContent = 'Player!';
    }
    else {
        lastWinner.textContent = 'Computer!';
    }
}
