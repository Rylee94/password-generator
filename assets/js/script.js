// Assignment Code

// these are my global variables
var generateBtn = document.querySelector("#generate");
//this is how many characters the resulting password will be
var passwordLength;
//wether to include lowercase characters in password
var includeLowerCase;
//wether to include uppercase characters in password
var includeUpperCase;
//wether or not to include numbers in password
var includeNumeric;
//wether or not to include special characters in password
var includeSpecialChar;
//an array of characters that are numbers
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
//an array of special characters
var specialChar = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "_",
  "=",
  "+",
  "{",
  "}",
  "[",
  "]",
  "|",
  "\\",
  ";",
  ":",
  "'",
  '"',
  "<",
  ">",
  ",",
  ".",
  "/",
  "?",
];
// an array of lowercase characters
var lowerCase = [
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
//an array of uppercase characters
var upperCase = [
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
// Write password to the #password input

function writePassword() {
  var allChar = [];

  // Prompt for password length with input validation
  passwordLength = promptPasswordLength();

  includeUpperCase = window.confirm(
    "Do you want to include uppercase letters?"
  );
  includeLowerCase = window.confirm(
    "Do you want to include lowercase letters?"
  );
  includeNumeric = window.confirm("Do you want to include numbers?");
  includeSpecialChar = window.confirm(
    "Do you want to include special characters?"
  );

  if (includeLowerCase) {
    allChar = allChar.concat(lowerCase);
  }
  if (includeUpperCase) {
    allChar = allChar.concat(upperCase);
  }
  if (includeNumeric) {
    allChar = allChar.concat(numeric);
  }
  if (includeSpecialChar) {
    allChar = allChar.concat(specialChar);
  }

  var password = generatePassword(allChar);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function promptPasswordLength() {
  var length;
  var validInput = false;

  while (!validInput) {
    var passwordLength = window.prompt(
      "Enter desired length of password between 8-128"
    );
    if (isValidPasswordLength(passwordLength)) {
      length = parseInt(passwordLength);
      validInput = true;
    }
  }

  return length;
}

function includeNumeric(value) {
  return /^-?\d+$/.test(value);
}

function isValidPasswordLength(passwordLength) {
  var length = parseInt(passwordLength);
  return length >= 8 && length <= 128;
}

//1. password result is going to store the random result that we create and it will be passwordLength long
//2. next we use a for loop to generate passwordLength(is a number#) Characters
//3. inside the for loop we are using math.floor and math.random to pick a random character from allChar

//this function will generate the random password using passwordLength
function generatePassword(allChar) {
  //local variable to hold the password result
  var passwordResult = "";
  //1. define variable i as 0
  //2. for loop will repeat until i >= passwordLength
  //3. i will increase by 1 each iteration
  for (var i = 0; i < passwordLength; i++) {
    //find a random index of allChar
    var randomCharIndex = Math.floor(Math.random() * allChar.length);
    //use the random index to select THE character from allChar to add to the password
    var randomChar = allChar[randomCharIndex];
    //add the random character to the password
    passwordResult += randomChar;
  }
  // return the password
  return passwordResult;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
