const player1 = prompt("Enter first player's name: ");
const player2 = prompt("Enter second player's name: ");

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
  const msgForPlayer1 = "Player1, Enter your Input: ";
  const msgForPlayer2 = "player2, Enter your input: ";

  return currentTurn === 1 ? msgForPlayer1 : msgForPlayer2;
}

function updatePlayersMove(playersMove, currentMove) {
  return playersMove + currentMove;
}

function winningSets(subset) {
  switch (subset) {
    case 1: return "123";
    case 2: return "456";
    case 3: return "789";
    case 4: return "159";
    case 5: return "357";
    case 6: return "147";
    case 7: return "258";
    case 8: return "369";
  }
}

function isWinning(playersMove) {
  for (let subset = 1; subset <= 8; subset++) {
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

    updatePlayersMove(player1sMove, player2sMove, currentMove, currentTurn);
    console.log("player1's Move: ", player1sMove);
    console.log("player2's Move: ", player2sMove);

    if (isWinning(player1sMove) || isWinning(player2sMove)) {
      WhoIsWinning(player1sMove, player2sMove);
      break;
    }

    step++;
  }
}

startGame();
