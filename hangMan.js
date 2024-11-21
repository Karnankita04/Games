console.log("WELCOME TO HANGMAN GAME \n");

function generateImage(numberOfIncorrect) {
  switch (numberOfIncorrect) {
    case 1:
      firstImage();
      break;
    case 2:
      secondImage();
      break;
    case 3:
      thirdImage();
      break;
    case 4:
      fourthImage();
      break;
    case 5:
      fifthImage();
      break;
  }
}

const firstLine = "┌──────────────────────────────────┐"
const secondLine = " \n│           ┎---┑	           │";
const thirdLine = "\n│           |  ( )                 │";
const fourthLine = "\n│           |   |                  │";
const fifthLine = "\n│           |  / \\                 │";
const sixthLine = "\n│           |______                │";
const seventhLine = "\n└──────────────────────────────────┘";


const first = firstLine + secondLine;
const second = first + thirdLine;
const third = second + fourthLine;
const fourth = third + fifthLine;
const fifth = fourth + sixthLine + seventhLine;


function firstImage() {
  console.log(first);
}

function secondImage() {
  console.log(second);
}

function thirdImage() {
  console.log(third);
}

function fourthImage() {
  console.log(fourth);
}

function fifthImage() {
  console.log(fifth, "\ncommitted Suicide ☠️\n");
}

function won() {
  console.log("Congratulationsss🥳 You wonn");
}

function riddleQuestions(questionNum) {
  switch (questionNum) {
    case 1:
      console.log("Ankita");
      return;

    case 2:
      console.log("Dindeshwari");
      return;

    case 3:
      console.log("shalu");
      return;
  }
}

function riddleAnswers(answerNum) {
  switch (answerNum) {
    case 1:
      return "karn";

    case 2:
      return "jagana";

    case 3:
      return "jha";
  }
}

function isGuessMatching(userGuess, questionNum) {
  const actualAnswer = riddleAnswers(questionNum);
  return actualAnswer === userGuess;
}

console.log("Guess the word related to given riddle");
console.log("You have 5 chances to guess");

let numberOfIncorrect = 0;
const questNum = Math.ceil(Math.random() * 3);
riddleQuestions(questNum);

for (let chance = 1; chance <= 5; chance++) {
  const userGuess = prompt("guess: ").toLowerCase();

  if (!isGuessMatching(userGuess, questNum)) {
    console.clear();
    numberOfIncorrect++;
    generateImage(numberOfIncorrect);
  } else {
    won();
    break;
  }
}