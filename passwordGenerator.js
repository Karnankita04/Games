console.log("WELCOME TO PASSWORD GENERATOR");
const lengthOfPassword = prompt("Enter the length for your Password: ");

const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
let password = "";

let char = 0;

while (char < lengthOfPassword) {
  const index = Math.round(Math.random() * (alphabets.length - 1));
  password = password + alphabets[index];

  if (char === lengthOfPassword - 1) {
    break;
  }

  const number = Math.round(Math.random() * 9);
  password = password + number;

  char = char + 2;
}

console.log("Your password is generated: ", password);
