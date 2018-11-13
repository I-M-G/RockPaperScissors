let selections = document.querySelectorAll('.selection');
for(let i = 0; i < selections.length; i++) {
  selections[i].addEventListener('mouseup', handlePlayerSelection);
}

let playerScoreElement = document.querySelector('#player-score');
let computerScoreElement = document.querySelector('#computer-score');
let computerGuessElement = document.querySelector('#computer-guess');

let playerScore = 0;
let computerScore = 0;

function handlePlayerSelection(event) {
  
  let computerHand = getComputerHand();
  let playerHand = event.target.innerText;

  getWinner(playerHand, computerHand);

  computerGuessElement.innerText = computerHand;
}

function getComputerHand() {
  let guesses = ['Rock', 'Paper', 'Scissors'];
  let r = Math.floor(Math.random() * 3);

  return guesses[r];
}

function getWinner(playerHand, computerHand) {
  let winner;
  console.log(`Player: ${playerHand} Computer: ${computerHand}`);

  if(playerHand === 'Rock' && computerHand === 'Scissors') {
    winner = 'You Win!';
    playerScore++;
  } else if (playerHand === 'Rock' && computerHand === 'Paper') {
    winner = 'Computer Wins!';
    computerScore++;
  } else if (playerHand === 'Paper' && computerHand === 'Rock') {
    winner = 'You Win!';
    playerScore++;
  } else if (playerHand === 'Paper' && computerHand === 'Scissors') {
    winner = 'Computer Wins!';
    computerScore++;
  } else if (playerHand === 'Scissors' && computerHand === 'Rock') {
    winner = 'Computer Wins!';
    computerScore++;
  } else if (playerHand === 'Scissors' && computerHand === 'Paper') {
    winner = 'You Win!';
    playerScore++;
  } else {
    winner = 'No Winner';
  } 
  
  playerScoreElement.innerText = playerScore;
  computerScoreElement.innerText = computerScore;
  
  console.log(`Winner: ${winner} Score: ${playerScore}, ${computerScore}`);
}