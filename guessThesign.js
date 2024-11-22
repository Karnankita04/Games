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

function display() {
  const number1 = getFirstNumber();
  const number2 = getSecondNumber();
  const signNumber = getSignNumber();
  const result = getResult(signNumber, number1, number2);

  console.log(number1, "_", number2, "=", result);
}

function takeInput() {
  prompt("Enter the sign: ");
}

display();
takeInput();


