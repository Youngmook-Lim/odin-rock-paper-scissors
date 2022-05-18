"use strict";

let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;

const computerPlay = function () {
  const result = Math.floor(Math.random() * 3) + 1;
  if (result === 1) return "rock";
  if (result === 2) return "paper";
  if (result === 3) return "scissors";
};

const select = function () {
  playerSelection = prompt("Enter rock paper or scissors!");
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
    return `You Win! ${playerSelection[0].toUpperCase()}${playerSelection.slice(
      1
    )} beats ${computerSelection[0].toUpperCase()}${computerSelection.slice(
      1
    )}!`;
  } else {
    computerScore++;
    return `You Lose! ${computerSelection[0].toUpperCase()}${computerSelection.slice(
      1
    )} beats ${playerSelection[0].toUpperCase()}${playerSelection.slice(1)}!`;
  }
};

const game = function () {
  for (let i = 0; i < 5; i++) {
    select();
    console.log(playRound(playerSelection, computerSelection));
  }
  console.log(playerScore, computerScore);
};

game();
