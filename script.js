//arrays of different kinds for the password later
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var upperCaseLetters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var lowerCaseLetters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

//grab element with id password, store in var passwordDiv
var passwordDiv = document.querySelector('#password')

//does the user want letters numbers and characters?
// how long should the password be?
//use as a variable to store the password

var wantUpper = confirm(
  "Do you want to include upper case letters in your password?"
);
var wantLower = confirm("Do you want lower case letters?");
var wantNumbers = confirm("Do you want lower case numbers?");
//maybe also ask for special character as a bonus

var passwordLength = prompt("How long would you like your password to be?");

//new var to stored allowed characters
var choiceArray = [];

if (wantUpper) {
  //add upper chars to array of chars we're allowed to use;
  choiceArray = choiceArray.concat(upperCaseLetters);
}

if (wantLower) {
  choiceArray = choiceArray.concat(lowerCaseLetters);
}
if (wantNumbers) {
  choiceArray = choiceArray.concat(numbers);
}

//randomize characters by writing a for loop and going the length the user chooses
var password = "";

//Use Math. random() function to get the random number between(0-1, 1 exclusive).
// Multiply it by the array length to get the numbers between(0-arrayLength).
// Use Math. floor() to get the index ranging from(0 to arrayLength-1).
// Sep 11, 2019
for (var i = 0; i < passwordLength; i++) {
  var randomIndex = Math.floor(Math.random() * choiceArray.length); // random index between 0 and last item of the choiceArray
  var randomChar = choiceArray[randomIndex];
  password += randomChar;
}


passwordDiv.textContent= password;