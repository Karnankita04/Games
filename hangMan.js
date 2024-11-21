function firstScene() {
  console.log("┌──────────────────────────────────┐");
  console.log("│   ┎---┑	                   │");
  console.log("│   |                      (🥺)    │");
  console.log("│   |                       |      │");
  console.log("│   |                      / \\     │");
  console.log("│   |______                        │");
  console.log("└──────────────────────────────────┘");
}

function secondScene() {
  console.log("┌──────────────────────────────────┐");
  console.log("│   ┎---┑	                   │");
  console.log("│   |                 (😢)         │");
  console.log("│   |                  |           │");
  console.log("│   |                 / \\          │");
  console.log("│   |______                        │");
  console.log("└──────────────────────────────────┘");
}

function thirdScene() {
  console.log("┌──────────────────────────────────┐");
  console.log("│   ┎---┑	                   │");
  console.log("│   |            (😖)              │");
  console.log("│   |             |                │");
  console.log("│   |            / \\               │");
  console.log("│   |______                        │");
  console.log("└──────────────────────────────────┘");
}

function fourthScene() {
  console.log("┌──────────────────────────────────┐");
  console.log("│   ┎---┑	                   │");
  console.log("│   |       (😭)                   │");
  console.log("│   |        |                     │");
  console.log("│   |       / \\                    │");
  console.log("│   |______                        │");
  console.log("└──────────────────────────────────┘");
}

function fifthScene(answer) {
  console.log("┌──────────────────────────────────┐");
  console.log("│   ┎---┑	                   │");
  console.log("│   |  (🫠)                        │");
  console.log("│   |   |                          │");
  console.log("│   |  / \\                         │");
  console.log("│   |______                        │");
  console.log("└──────────────────────────────────┘");

  console.log("Committed Suicide ☠️ \n");
  console.log("The answer is: ", answer);
}

function sceneToPlay(scene, answer) {
  switch (scene) {
    case 1:
      return firstScene();
    case 2:
      return secondScene();
    case 3:
      return thirdScene();
    case 4:
      return fourthScene();
    case 5:
      return fifthScene(answer);
  }
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
      return;
    case 5:
      console.log("I can be bigger than you but weigh nothing at all,What am I?");
      return;
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
    riddleQuestions(questNum);
    console.log("\nYou have", chance, "chances");
    const userGuess = prompt("guess😉: ").toLowerCase();

    if (!isGuessMatching(userGuess, questNum)) {
      console.clear();
      numberOfIncorrect++;
      sceneToPlay(numberOfIncorrect, riddleAnswers(questNum));
    } else {
      won();
      break;
    }
  }
}

function starting() {
  console.log("WELCOME TO HANGMAN GAME \n");
  console.log("Guess the word related to given riddle\n");

  let numberOfIncorrect = 0;
  const questNum = Math.ceil(Math.random() * 5);

  takeInput(numberOfIncorrect, questNum);
}

starting();
