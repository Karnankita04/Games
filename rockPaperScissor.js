console.log("WELCOME TO THE GAME\n");

const player1 = prompt("Enter Player1's name: ");
const player2 = prompt("Enter Player2's name: ");

let player1Score = 0;
let player2Score = 0;

function getEmoji(input) {
  switch (input) {
    case "1":
      return '🗿';
    case "2":
      return '🖐️';
    case "3":
      return '✂️';
  }
}

function getInput() {
  prompt("\n" + player1 + " Shake your hand and Press Enter: ");
  prompt(player2 + " Shake your hand and Press Enter: ");

  const input1 = Math.ceil(Math.random() * 3) + "";
  const input2 = Math.ceil(Math.random() * 3) + "";

  console.log("\n");
  console.log(player1, "you got", getEmoji(input1));
  console.log(player2, "you got", getEmoji(input2), "\n");

  if (input1 === input2) {
    console.log("Match Draw\n");
    return "";
  }

  return input1 + input2;
}

function whoWon(combo, player1, player2) {
  switch (combo) {
    case "12":
      return player2;
    case "13":
      return player1;
    case "21":
      return player1;
    case "23":
      return player2;
    case "31":
      return player2;
    case "32":
      return player1;
    default:
      return "Invalid Input";
  }
}

function getScore(winningContestent) {
  if (winningContestent === player1) {
    player1Score++;
  }

  if (winningContestent === player2) {
    player2Score++;
  }
}

function startRound() {
  for (let turn = 1; turn <= 3; turn++) {
    const combo = getInput();

    if (combo === "") {
      continue;
    }

    const winningContestent = whoWon(combo, player1, player2);
    console.log(winningContestent, "Won");

    getScore(winningContestent);
  }
}

function finalWinner() {
  if (player1Score > player2Score) {
    console.log("\nFinally", player1, "Won");
  }

  if (player2Score > player1Score) {
    console.log("\nFinally", player2, "Won");
  }

  if (player1Score === player2Score) {
    console.log("\nfinally Match Draw");
  }
}

startRound();
finalWinner();