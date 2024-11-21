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

function generateImage(numberOfIncorrect) {
  switch (numberOfIncorrect) {
    case 1:
      return firstImage();
    case 2:
      return secondImage();
    case 3:
      return thirdImage();
    case 4:
      return fourthImage();
    case 5:
      return fifthImage();
  }
}

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
  console.log("Congratulationsss🥳 It's correct");
}

function riddleQuestions(questionNum) {
  switch (questionNum) {
    case 1:
      console.log("I am easy to lift, but hard to throw. What am I?");
      return;
    case 2:
      console.log("what word contains 26 letters but only has three syllables");
      return;
    case 3:
      console.log("I have many teeth but I can’t bite. What am I?");
      return;
    case 4:
      console.log("What goes away as soon as you talk about it?");
    case 5:
      console.log("I can be bigger than you but weigh nothing at all,What am I?");
  }
}

function riddleAnswers(answerNum) {
  switch (answerNum) {
    case 1:
      return "feather";
    case 2:
      return "alphabet";
    case 3:
      return "comb";
    case 4:
      return "secret";
    case 5:
      return "shadow";
  }
}

function isGuessMatching(userGuess, questionNum) {
  const actualAnswer = riddleAnswers(questionNum);
  return actualAnswer === userGuess;
}

function takeInput(numberOfIncorrect, questNum) {
  for (let chance = 5; chance >= 1; chance--) {
    console.log("You have ", chance, "chances");
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
}

function starting() {
  console.log("WELCOME TO HANGMAN GAME \n");
  console.log("Guess the word related to given riddle");

  let numberOfIncorrect = 0;
  const questNum = Math.ceil(Math.random() * 3);

  riddleQuestions(questNum);

  takeInput(numberOfIncorrect, questNum);
}

starting();
