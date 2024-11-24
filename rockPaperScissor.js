console.log("WELCOME TO THE GAME\n");

const player1 = prompt("Enter Player1's name: ");
const player2 = prompt("Enter Player2's name: ");

let player1Score = 0;
let player2Score = 0;

const rock = " ┏━━━━━━┓\n ┃  ✊  ┃ \n ┗━━━━━━┛"
const paper = " ┏━━━━━━┓\n ┃  🖐️   ┃ \n ┗━━━━━━┛";
const scissor = " ┏━━━━━━┓\n ┃  ✌️   ┃ \n ┗━━━━━━┛";

let final_emoji = "";

function getEmoji(input) {
  switch (input) {
    case "1":
      return rock;

    case "2":
      return paper;

    case "3":
      return scissor;
  }
}

function delay() {
  for (let time = 1; time < 5 * 100000000; time++) {

  }
}

function showAnimation(input) {
  console.clear();
  delay();
  console.log(rock);
  delay();
  console.clear();
  console.log(paper);
  delay();
  console.clear();
  console.log(scissor);
  delay();
  console.clear();
  console.log(rock);
  delay();
  console.clear();
  console.log(scissor);
  delay()
  console.clear();
  console.log(paper);
  delay();
  console.clear();
  console.log(rock);
  delay();
  console.clear();
  console.log( getEmoji(input));
}

function getInput() {
  prompt("\n" + player1 + " Shake your hand and Press Enter: ");
  const input1 = Math.ceil(Math.random() * 3) + "";
  showAnimation(input1);
  console.log("\n");
  console.log(player1, "you got", "\n");
  console.log(getEmoji(input1),"\n");

  prompt(player2 + " Shake your hand and Press Enter: ");

  const input2 = Math.ceil(Math.random() * 3) + "";


  showAnimation(input2);
  console.log(player2, "you got", "\n ");
  console.log(getEmoji(input2),"\n");

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
  for (let round = 1; round <= 3; round++) {
    const combo = getInput();

    if (combo === "") {
      continue;
    }

    const winningContestent = whoWon(combo, player1, player2);
    console.log(winningContestent, "Won🥇");

    getScore(winningContestent);
  }
}

function finalWinner() {
  if (player1Score > player2Score) {
    console.log("\nFinally", player1, "Won 🏆");
  }

  if (player2Score > player1Score) {
    console.log("\nFinally", player2, "Won 🏆");
  }

  if (player1Score === player2Score) {
    console.log("\nfinally Match Draw 🤡");
  }
}

startRound();
finalWinner();
