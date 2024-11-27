const player1 = prompt("Enter first player's name: ");
const player2 = prompt("Enter second player's name: ");

function repeat(length) {
  let finalString = "";

  for (let times = 1; times <= length; times++) {
    finalString += "━";
  }
  return finalString;
}

function isEnd(number) {
  return number % 3 === 0;
}

function getmiddle() {
  let row = "";

  for (let number = 1; number <= 9; number++) {
    row += "┃   " + number + "    ";

    if (isEnd(number)) {
      row += "┃";
      row += "\n";
      row += getFooter();
      row += "\n";
    }
  }

  return row;
}

function getheader() {
  return "┏" + repeat(26) + "┓";
}

function getFooter() {
  return "┗" + repeat(26) + "┛";
}
console.log(getheader() + "\n" + getmiddle());

let updatedBox = getheader() + "\n" + getmiddle();

function makeBox(box, currentMove, currentTurn) {
  const sign = currentTurn === 1 ? "O" : "X";
  let updatedBox = "";

  for (let index = 0; index < box.length; index++) {
    if (box[index] === currentMove) {
      updatedBox += sign;
    } else {
      updatedBox += box[index];
    }
  }

  return updatedBox;
}

function updatedGrid(currentMove, currentTurn) {
  updatedBox = makeBox(updatedBox, currentMove, currentTurn);

  return updatedBox;
}

function isSubset(set, subset) {
  for (let indexOfSubset = 0; indexOfSubset < subset.length; indexOfSubset++) {
    let isCharPresent = false;

    for (let indexOfSet = 0; indexOfSet < set.length; indexOfSet++) {
      if (subset[indexOfSubset] === set[indexOfSet]) {
        isCharPresent = true;
      }
    }

    if (!isCharPresent) {
      return false;
    }
  }
  return true;
}

function isSubstring(string, substring) {
  for (let index = 0; index < string.length; index++) {
    if (substring === string[index]) {
      return true;
    }
  }
  return false;
}

function updateMovedPosition(alreadyMovedPosition, move) {
  return alreadyMovedPosition + move;
}

function isValid(movedPosition, move) {
  if (!(move > 0 && move < 10) || isSubstring(movedPosition, move + "")) {
    return false;
  }

  return true;
}

function getTurn(currentTurn) {
  return 1 - currentTurn;
}

function getInput(alreadyMovedPosition, message) {
  const currentMove = prompt(message);

  if (!isValid(alreadyMovedPosition, currentMove)) {
    console.log("invalid input");
    return getInput(alreadyMovedPosition, message);
  }

  return currentMove;
}

function getInputPromptMessage(currentTurn) {
  const msgForPlayer1 = player1 + " Enter your move: ";
  const msgForPlayer2 = player2 + " Enter your move: ";

  return currentTurn === 1 ? msgForPlayer1 : msgForPlayer2;
}

function updatePlayersMove(playersMove, currentMove) {
  return playersMove + currentMove;
}

function winningSets(subset) {
  const array = ['123', '456', '789', '159', '357', '147', '258', '369'];
  return array[subset];
}

function isWinning(playersMove) {
  for (let subset = 0; subset <= 7; subset++) {
    if (isSubset(playersMove, winningSets(subset))) {
      return true;
    }
  }

  return false;
}

function WhoIsWinning(player1sMove, player2sMove) {
  if (isWinning(player1sMove)) {
    console.log("Player 1 has won");
  }

  if (isWinning(player2sMove)) {
    console.log("player 2 has won");
  }
}

function startGame() {
  let step = 1;
  let movedPosition = "";
  let currentTurn = 0;
  let player1sMove = "";
  let player2sMove = "";

  while (step <= 9) {
    currentTurn = getTurn(currentTurn);

    const message = getInputPromptMessage(currentTurn);
    const currentMove = getInput(movedPosition, message);

    movedPosition = updateMovedPosition(movedPosition, currentMove);

    if (currentTurn === 1) {
      player1sMove = updatePlayersMove(player1sMove, currentMove);
    }

    if (currentTurn === 0) {
      player2sMove = updatePlayersMove(player2sMove, currentMove);
    }

    console.clear();
    console.log(updatedGrid(currentMove, currentTurn));

    updatePlayersMove(player1sMove, player2sMove, currentMove, currentTurn);
    // console.log("player1's Move: ", player1sMove);
    // console.log("player2's Move: ", player2sMove);

    if (isWinning(player1sMove) || isWinning(player2sMove)) {
      WhoIsWinning(player1sMove, player2sMove);
      break;
    }

    if (step === 9) {
      console.log("Match draw");
    }
    step++;
  }
}

startGame();
