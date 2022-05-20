"use strict";

let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;
let playing = true;
const buttonRock = document.querySelector(".rock");
const buttonPaper = document.querySelector(".paper");
const buttonScissors = document.querySelector(".scissors");
const buttons = document.querySelector(".btns");
const result = document.querySelector(".result");
const scoreYou = document.querySelector(".score-you");
const scoreComp = document.querySelector(".score-comp");

const computerPlay = function () {
  const result = Math.floor(Math.random() * 3) + 1;
  if (result === 1) return "rock";
  if (result === 2) return "paper";
  if (result === 3) return "scissors";
};

const select = function (output) {
  playerSelection = output;
  computerSelection = computerPlay();
};

const playRound = function (playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    return `Draw!`;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    scoreYou.textContent = `${playerScore}`;
    return `You Win! ${playerSelection[0].toUpperCase()}${playerSelection.slice(
      1
    )} beats ${computerSelection[0].toUpperCase()}${computerSelection.slice(
      1
    )}!`;
  } else {
    computerScore++;
    scoreComp.textContent = `${computerScore}`;
    return `You Lose! ${computerSelection[0].toUpperCase()}${computerSelection.slice(
      1
    )} beats ${playerSelection[0].toUpperCase()}${playerSelection.slice(1)}!`;
  }
};

buttons.addEventListener("click", function (e) {
  if (!playing) return;
  const btn = e.target.closest(".btn");
  if (!btn) return;
  btn.classList.add("pressed");
  setTimeout(() => btn.classList.remove("pressed"), 100);
  const output = btn.dataset.output;
  select(output);
  const roundResult = playRound(playerSelection, computerSelection);
  result.textContent = `${roundResult}`;
  if (playerScore === 5) {
    result.textContent = `Player Wins!`;
    result.classList.add("win-you");
    playing = false;
  } else if (computerScore === 5) {
    result.textContent = `Computer Wins!`;
    result.classList.add("win-comp");
    playing = false;
  }
  console.log(playerScore, computerScore);
});
