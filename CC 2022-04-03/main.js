// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples:

// rps('scissors','paper') // Player 1 won!
// rps('scissors','rock') // Player 2 won!
// rps('paper','paper') // Draw!

//Check for player 1 wins : Scissors > paper, paper > rock, rock < scissors
//Check for tie
//Otherwise player 2 wins

const rps = (p1, p2) => {
  if ((p1 === "scissors" && p2 === "paper") || (p1 === "paper" && p2 === "rock") || (p1 === "rock" && p2 === "scissors")) {
    return "Player 1 won!";
  } else if (p1 === p2) {
    return "Draw!"
  } else {
    return "Player 2 won!";
  }
};

console.log (rps('rock', 'scissors'), 'Player 1 Won');
console.log (rps('rock', 'paper'), 'Player 2 Won');
console.log (rps('paper', 'paper'), 'Draw');