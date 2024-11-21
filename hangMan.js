function firstScene() {
  console.log("┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓");
  console.log("┃   ┏━━━┑	                   ┃");
  console.log("┃   ┃                      (🥺)    ┃");
  console.log("┃   ┃                       |      ┃");
  console.log("┃   ┃                      / \\     ┃");
  console.log("┃   ┗━━━━━━━                       ┃");
  console.log("┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛");
}

function secondScene() {
  console.log("┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓");
  console.log("┃   ┏━━━┑	                   ┃");
  console.log("┃   ┃                 (😢)         ┃");
  console.log("┃   ┃                  |           ┃");
  console.log("┃   ┃                 / \\          ┃");
  console.log("┃   ┗━━━━━━                        ┃");
  console.log("┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛");
}

function thirdScene() {
  console.log("┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓");
  console.log("┃   ┏━━━┑	                   ┃");
  console.log("┃   ┃            (😖)              ┃");
  console.log("┃   ┃             |                ┃");
  console.log("┃   ┃            / \\               ┃");
  console.log("┃   ┗━━━━━━                        ┃");
  console.log("┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛");
}

function fourthScene() {
  console.log("┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓");
  console.log("┃   ┏━━━┑	                   ┃");
  console.log("┃   ┃       (😭)                   ┃");
  console.log("┃   ┃        |                     ┃");
  console.log("┃   ┃       / \\                    ┃");
  console.log("┃   ┗━━━━━━                        ┃");
  console.log("┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛");
}

function fifthScene() {
  console.log("┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓");
  console.log("┃   ┏━━━┑	                   ┃");
  console.log("┃   ┃  (🫠)                        ┃");
  console.log("┃   ┃   |                          ┃");
  console.log("┃   ┃  / \\                         ┃");
  console.log("┃   ┗━━━━━━                        ┃");
  console.log("┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛");
}

function sceneToPlay(scene, answer) {
  switch (scene) {
    case 1: return firstScene();
    case 2: return secondScene();
    case 3: return thirdScene();
    case 4: return fourthScene();
    case 5: return fifthScene(answer);
  }
}

function won() {
  console.log("Congratulationsss🥳 It's correct");
}

function lost(answer) {
  console.log("Committed Suicide ☠️ \n");
  console.log("The answer is:", answer);
}

function riddleQuestions(question) {
  switch (question) {
    case 1: return "I am easy to lift, but hard to throw. What am I?";
    case 2: return "what word contains 26 letters but only has three syllables";
    case 3: return "I have many teeth but I can’t bite. What am I?";
    case 4: return "What goes away as soon as you talk about it?";
    case 5: return "I can be bigger than you but weigh nothing at all,What am I?";
  }
}

function riddleAnswers(answer) {
  switch (answer) {
    case 1: return "feather";
    case 2: return "alphabet";
    case 3: return "comb";
    case 4: return "secret";
    case 5: return "shadow";
  }
}

function isGuessMatching(userGuess, questionNum) {
  return riddleAnswers(questionNum) === userGuess;
}

function takeInput(numberOfIncorrect, questionNum) {
  for (let chance = 5; chance >= 1; chance--) {
    console.log(riddleQuestions(questionNum));
    console.log("\nYou have", chance, "chances");
    const userGuess = prompt("guess😉: ").toLowerCase();

    if (isGuessMatching(userGuess, questionNum)) {
      return won();
    }

    console.clear();
    numberOfIncorrect++;
    sceneToPlay(numberOfIncorrect, riddleAnswers(questionNum));

    if (chance === 1) {
      return lost(riddleAnswers(questionNum));
    }
  }
}

function starting() {
  console.log("WELCOME TO HANGMAN GAME \n");
  console.log("Guess the word related to given riddle\n");

  let noOfWrongGuess = 0;
  const questionNum = Math.ceil(Math.random() * 5);

  takeInput(noOfWrongGuess, questionNum);
}

starting();
