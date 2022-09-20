const getComputerChoice = () => {
  let choice = ["Rock", "Paper", "Scissor"];
  return choice[Math.floor(Math.random() * choice.length)]
}

const playRound = (playerSelection, computerSelection) => {
  let playerChoice = playerSelection.toLowerCase();
  let computerChoice = computerSelection.toLowerCase();
  console.log(playerChoice, computerChoice);
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

const game = () => {
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Enter Your Choice b/w Rock Paper and Scissor")
    console.log(playRound(playerSelection, getComputerChoice()));
  }
}

game();