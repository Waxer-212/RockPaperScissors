//Variable for keeping the score
let playerScore = 0;
let computerScore = 0;

//Get the DOM elements
const playerScore_span = document.getElementById("player-score");
const computerScore_span = document.getElementById("computer-score");
const lastWinner = document.getElementById("winner");

const playerChoice_span = document.getElementById("player-choice");
const computerChoice_span = document.getElementById("computer-choice");

const historyList = document.getElementById("history-list");

//Gets the computer's choice
function computerTurn() {
    const choices = ['🪨', '📄', '✂️'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

//Main function for the game
function game(playerChoice) {
    const computerChoice = computerTurn();

    playerChoice_span.textContent = playerChoice;
    computerChoice_span.textContent = computerChoice;

    const winner = getWinner(playerChoice, computerChoice);
    addHistoryItem(playerChoice, computerChoice, winner);
    displayWinner(winner);
}

//Function for getting the winner
function getWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'draw';
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

//Function for displaying the winner
function displayWinner(winner) {
    playerScore_span.textContent = 'Score : ' + playerScore;
    computerScore_span.textContent = 'Score : ' + computerScore;
    if(winner === 'player') {
        lastWinner.textContent = 'Player wins!';
    }
    else if(winner === 'computer') {
        lastWinner.textContent = 'Computer wins!';
    }
    else
    {
        lastWinner.textContent = 'Draw!';
    }
}

//Function for adding the history item
function addHistoryItem(playerChoice, computerChoice, winner)
{
    const historyItem = document.createElement("li");
    historyItem.textContent = `Player choice : ${playerChoice} | Computer choice: ${computerChoice}  ------->  Winner: ${winner}`;
    historyList.appendChild(historyItem);
}
