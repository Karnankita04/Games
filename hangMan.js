function createUpperBorder(length) {
  let upperBorder = "";

  for (let sign = 1; sign <= length; sign++) {
    upperBorder += '━';
  }

  return "┏" + upperBorder + "┓";
}

function createLowerBorder(length) {
  let lowerBorder = "";

  for (let sign = 1; sign <= length; sign++) {
    lowerBorder += '━';
  }

  return "┗" + lowerBorder + "┛";
}

function firstScene() {
  console.log(createUpperBorder(34));
  console.log("┃   ┏━━━┑	                   ┃");
  console.log("┃   ┃                      (🥺)    ┃");
  console.log("┃   ┃                       |      ┃");
  console.log("┃   ┃                      / \\     ┃");
  console.log("┃   ┗━━━━━━━                       ┃");
  console.log(createLowerBorder(34));
}

function secondScene() {
  console.log(createUpperBorder(34));
  console.log("┃   ┏━━━┑	                   ┃");
  console.log("┃   ┃                 (😢)         ┃");
  console.log("┃   ┃                  |           ┃");
  console.log("┃   ┃                 / \\          ┃");
  console.log("┃   ┗━━━━━━                        ┃");
  console.log(createLowerBorder(34));
}

function thirdScene() {
  console.log(createUpperBorder(34));
  console.log("┃   ┏━━━┑	                   ┃");
  console.log("┃   ┃            (😖)              ┃");
  console.log("┃   ┃             |                ┃");
  console.log("┃   ┃            / \\               ┃");
  console.log("┃   ┗━━━━━━                        ┃");
  console.log(createLowerBorder(34));
}

function fourthScene() {
  console.log(createUpperBorder(34));
  console.log("┃   ┏━━━┑	                   ┃");
  console.log("┃   ┃       (😭)                   ┃");
  console.log("┃   ┃        |                     ┃");
  console.log("┃   ┃       / \\                    ┃");
  console.log("┃   ┗━━━━━━                        ┃");
  console.log(createLowerBorder(34));
}

function fifthScene() {
  console.log(createUpperBorder(34));
  console.log("┃   ┏━━━┑	                   ┃");
  console.log("┃   ┃  (🫠)                        ┃");
  console.log("┃   ┃   |                          ┃");
  console.log("┃   ┃  / \\                         ┃");
  console.log("┃   ┗━━━━━━                        ┃");
  console.log(createLowerBorder(34));
}

function sceneToPlay(scene) {
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
      return fifthScene();
  }
}

function won() {
  console.log("Congratulationsss🥳 It's correct");
}

function lost(answer) {
  console.log("Committed Suicide ☠️ \n");
  console.log("The answer is:", answer);
}

function CreateRiddleQuestions(question) {
  switch (question) {
    case 1:
      return "I am easy to lift, but hard to throw. What am I?";
    case 2:
      return "what word contains 26 letters but only has three syllables";
    case 3:
      return "I have many teeth but I can’t bite. What am I?";
    case 4:
      return "What goes away as soon as you talk about it?";
    case 5:
      return "I can be bigger than you but weigh nothing at all,What am I?";
  }
}

function CreateRiddleAnswers(answer) {
  switch (answer) {
    case 1: return "feather";
    case 2: return "alphabet";
    case 3: return "comb";
    case 4: return "secret";
    case 5: return "shadow";
  }
}

function isGuessMatching(userGuess, questionNum) {
  return CreateRiddleAnswers(questionNum) === userGuess;
}

function ifNotMatched(noOfWrongGuess, questionNum, chance) {
  console.clear();
  noOfWrongGuess++;
  sceneToPlay(noOfWrongGuess);

  if (chance === 1) {
    return lost(CreateRiddleAnswers(questionNum));
  }

  return noOfWrongGuess;
}

function takeInput(noOfWrongGuess, questionNum) {
  for (let chance = 5; chance >= 1; chance--) {
    console.log(CreateRiddleQuestions(questionNum));
    console.log("\nYou have", chance, "chances");

    const userGuess = prompt("guess😉: ").toLowerCase();

    if (isGuessMatching(userGuess, questionNum)) {
      return won();
    }

    noOfWrongGuess = ifNotMatched(noOfWrongGuess, questionNum, chance);
  }
}

function showIntro() {
  console.log("WELCOME TO HANGMAN GAME \n");
  console.log("Guess the word related to given riddle\n");

  let noOfWrongGuess = 0;
  const questionNum = Math.ceil(Math.random() * 5);

  takeInput(noOfWrongGuess, questionNum);
}

showIntro();
