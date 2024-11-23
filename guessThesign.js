let userInput = "";

function getFirstNumber() {
  return Math.round(Math.ceil(Math.random() * 10));
}

function getSecondNumber() {
  return Math.round(Math.ceil(Math.random() * 10));
}

function getResult(signNumber, number1, number2) {
  switch (signNumber) {
    case 1:
      return number1 + number2;
    case 2:
      return number1 - number2;
    case 3:
      return number1 * number2;
    case 4:
      return number1 / number2;
  }
}

function getSignNumber() {
  const signNumber = Math.round(Math.ceil(Math.random() * 4));
  return signNumber;
}

function display(number1, number2, result) {
  console.log(number1, "_", number2, "=", result);
}

function isItAddition(number1, number2, result) {
  return result - number2 === number1;
}

function isItSubtraction(number1, number2, result) {
  return result + number2 === number1;
}

function isItMultiplication(number1, number2, result) {
  return result / number2 === number1;
}

function isItDivision(number1, number2, result) {
  return result * number2 === number1;
}

function isEqual(firstSign, secondSign) {
  return firstSign === secondSign;
}

function isValid(input) {
  return (input === "+" || input === "-" || input === "*" || input === "/");
}

function isInputValid(number1, number2, result) {
  if (isItAddition(number1, number2, result) && isEqual(userInput, "+")) {
    userInput = "+";
    return true;
  }

  if (isItSubtraction(number1, number2, result) && isEqual(userInput, "-")) {
    userInput = "-";
    return true;
  }

  if (isItMultiplication(number1, number2, result) && isEqual(userInput, "*")) {
    userInput = "*";
    return true;
  }

  if (isItDivision(number1, number2, result) && isEqual(userInput, "/")) {
    userInput = "/";
    return true;
  }

  if (!isValid(userInput)) {
    return false;
  }
}

function takeInput() {
  return prompt("Enter the sign: ");
}

function getNumbers() {
  while (true) {
    const isInterested = confirm("Do you want to play?");

    if (!isInterested) {
      break;
    }

    const number1 = getFirstNumber();
    const number2 = getSecondNumber();
    const signNumber = getSignNumber();
    const result = getResult(signNumber, number1, number2);

    display(number1, number2, result);
    userInput = takeInput();

    if (!isInputValid(number1, number2, result)) {
      console.log("INVALID INPUT");
      continue;
    }
    
    console.log(number1, userInput, number2, "=", result);
  }
}

getNumbers();
