console.log("WELCOME TO PASSWORD GENERATOR");
const lengthOfPassword = prompt("Enter the length for your Password: ");

const capitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const smallLetters = capitalLetters.toLowerCase();
const numbers = "0123456789";
const specialChar = "#@!^&$";

const passwordCandidate = capitalLetters + specialChar + smallLetters + numbers;

function generatePassword() {
  let password = "";

  for (let char = 1; char <= lengthOfPassword; char++) {
    const index = Math.round(Math.random() * (passwordCandidate.length - 1));

    password = password + passwordCandidate[index];
  }

  return password;
}

console.log("Your password is generated: ", generatePassword());
