// player 1 input for word
const word = prompt("Player 1, enter a word (minimum 8 letters)");

// check if word is valid (minimum 8 letters)
if (word.length < 8) {
  console.log("Word must have at least 8 letters");
}

// store the number of incorrect guesses left
let chances = 10;

// store the list of incorrect guesses
let incorrectGuesses = [];

// store the correct guesses
let correctGuesses = [];

// create a display for the word using asterisks for unguessed letters
let wordDisplay = "*".repeat(word.length);


console.log(wordDisplay);


while (chances > 0) {
  // player 2 input for letter guess
  const letter = prompt("Player 2, enter a letter");

  // check if letter has already been guessed
  if (incorrectGuesses.includes(letter)) {
    console.log("You've already guessed that letter, try again");
    chances--
  }

  // check if letter is in the word
  if (word.includes(letter)) {
    // update the correct guesses and word display
    correctGuesses.push(letter);
    wordDisplay = updateWordDisplay(word, correctGuesses);
  } else {
    // decrease the number of chances left and add the letter to incorrect guesses
    chances--;
    incorrectGuesses.push(letter);
  }

  console.log(wordDisplay);
  console.log(`Incorrect Guesses: ${incorrectGuesses.join(", ")}`);
  console.log(`Chances left: ${chances}`);

  // check if all letters have been guessed
  if (wordDisplay === word) {
    console.log("CONGRATS YOU WIN!");
    break;
  }
}

if (chances === 0) {
  console.log("YOU LOSE!");
}

// function to update the word display with correct guesses
function updateWordDisplay(word, correctGuesses) {
  let display = "";
  for (let i = 0; i < word.length; i++) {
    if (correctGuesses.includes(word[i])) {
      display += word[i];
    } else {
      display += "*";
    }
  }
  return display;
}