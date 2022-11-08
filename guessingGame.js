function guessGame(range) {
  let userName = prompt("What is your username?");
  let points = 0;
  for (let i = 2; i <= range; i++) {
    let computerGuess = Math.round(Math.random() * i);
    let userGuess = parseInt(
      prompt(userName + ", guess a number from 1 to " + i)
    );

    if (computerGuess === userGuess) {
      points++;
      alert("correct!");
      alert("You now have " + points + " points");
    } else {
      alert("Oops, sorrry");
      alert("You won " + points + " points!");
      return;
    }
  }
}
