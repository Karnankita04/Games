const isInterested = confirm("Are you interested in solving Jumble words🤩: ");
const positiveMessage = "Sooo 😈 Let'ssss Playyyy";
const negativeMessage = "okay thanks for replying 😒";

if (isInterested) {
  const userMarks = guessWords();

  if (userMarks === 25) {
    console.log("Congratulationsss you wooonnnn 🥳");
  }

  if (userMarks < 25) {
    console.log("Better luck next time 😊");
  }

  console.log("Your total marks is: ", userMarks);
} else {
  console.log(negativeMessage);
}

function isUserGuessCorrect(actualWord, userGuess) {
  if (actualWord === userGuess) {
    console.log("\n Correct answer 😳")
  }
  return actualWord === userGuess;
}

function userInput(actualWord, messedWord, userMarks) {
  console.log("\nThe word is ", messedWord, "\n");
  const userGuess = prompt("Rearrange the Word: ");

  userMarks = isUserGuessCorrect(actualWord, userGuess) ? 5 : -5;
  return userMarks;
}

function actualWords(userNumber) {
  switch (userNumber) {
    case 1: return "context";

    case 2: return "proverb";

    case 3: return "trait";

    case 4: return "garden";

    case 5: return "window";
  }
}

function messedWords(userNumber) {
  switch (userNumber) {
    case 1: return "nexottc";

    case 2: return "rrvpboe";

    case 3: return "artit";

    case 4: return "ndrega";

    case 5: return "odwniw";
  }
}

function getWords(userNumber, userMarks) {
  let actualWord = actualWords(userNumber);
  let messedWord = messedWords(userNumber);

  if (userNumber < 1 || userNumber > 5) {
    console.log("Invalid Input");
  }

  userMarks += userInput(actualWord, messedWord, userMarks);
  console.log("your current score is : ", userMarks, "\n");
  return userMarks;
}

function guessWords() {
  console.log(positiveMessage);
  let userMarks = 0;

  for (let chances = 1; chances <= 5; chances++) {
    userMarks = getWords(chances, userMarks);

    if (userMarks < 15 && chances > 3) {
      console.log("you are loosing 🤕, Focus Focus \n");
    }
  }

  return userMarks;
}