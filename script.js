const root = document.querySelector("#root");

const gameDiv = document.createElement("div");
root.appendChild(gameDiv);

const finalResultDiv = document.createElement("div");
root.appendChild(finalResultDiv);

const title = document.createElement("h1");
title.textContent = "Choose between:"
gameDiv.appendChild(title);

let choices = ["Rock", "Paper", "Scissor"];
const getComputerChoice = () => {
  return choices[Math.floor(Math.random() * choices.length)]
}

const playRound = (playerSelection, computerSelection) => {
  let playerChoice = playerSelection.toLowerCase();
  let computerChoice = computerSelection.toLowerCase();
  if (playerChoice === computerChoice) {
    return "Tie";
  } else {
    if (playerChoice === "rock") {
      if (computerChoice === "scissor") {
        return "You Win! Rock beats Scissor";
      } else {
        return "You Lose! Paper beats Rock";
      }
    } else if (playerChoice === "paper") {
      if (computerChoice === "rock") {
        return "You Win! Paper beats Rock";
      } else {
        return "You Lose! Scissor beats Paper";
      }
    } else if (playerChoice === "scissor") {
      if (computerChoice === "paper") {
        return "You Win! Scissor beats Paper";
      } else {
        return "You Lose! Rock beats Scissor";
      }
    }
  }
}

for (let i = 0; i < choices.length; i++) {
  const button = document.createElement("button");
  button.textContent = choices[i];
  gameDiv.appendChild(button);
}

const resultField = document.createElement("p");
const finalResult = document.createElement("p");
gameDiv.appendChild(resultField);
finalResultDiv.appendChild(finalResult);

let win = 0, lose = 0, count = 0;
const setCount = () => {
  count++;
  if (count === 5) {
    gameDiv.style.display = "none";
  }
}
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    let result = playRound(event.target.textContent, getComputerChoice());
    resultField.textContent = result;
    if (result.match(/Win/)) {
      resultField.style.color = "green";
      win++;
    } else if (result.match(/Lose/)) {
      resultField.style.color = "red";
      lose++;
    } else {
      resultField.style.color = "blue";
    }
    setCount();
    if (count === 5) {
      if (win > lose) {
        finalResult.textContent = "You beat the computer";
        finalResult.style.color = "green";
      } else if (lose > win) {
        finalResult.textContent = "Better Luck next time!";
        finalResult.style.color = "red";
      } else {
        finalResult.textContent = "It's Tie!";
        finalResult.style.color = "blue";
      }
    }
  })
})