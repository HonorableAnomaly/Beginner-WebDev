let maximum = parseInt(prompt("Enter the maximum number"));
console.log(maximum);
while (!maximum) {
  maximum = parseInt(prompt("Enter a valid number as your maximum number!"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;

let guess = parseInt(prompt("Enter your first guess"));
let attempts = 1;

while (guess !== targetNum) {
  console.log(guess);
  //   if (guess === "q") break;
  attempts++;
  if (guess > targetNum) {
    guess = parseInt(prompt("Your number is too high! Enter a new guess"));
  } else {
    guess = parseInt(prompt("Your number is too low! Enter a new guess"));
  }
}

// Broken cancel function

// if (guess === "q") {
//   console.log("Quitter.");
// } else {
console.log(targetNum);
console.log(`You got it! It took you ${attempts} guesses.`);
// }
