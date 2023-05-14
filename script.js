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

//this function will ask the user for password criteria.
function writePassword() {
  //this will hold all of the possible characters that could be included in the password
  var allChar = [];
  passwordLength = window.prompt(
    "Enter desired length of password between 8-128"
  );
  includeUpperCase = window.confirm("Do you want to include upercase letters?");
  includeLowerCase = window.confirm(
    "Do you want to include lowercase letters?"
  ); //window.prompt("Do you want to include lowercase letters?");
  includeNumeric = window.confirm("Do you want to include numbers?");
  includeSpecialChar = window.confirm(
    "Do you want to include special characters?"
  );

  //If include lower case is true, allChar now = lowercase.
  if (includeLowerCase === true) {
    allChar = allChar.concat(lowerCase);
  }
  //If include upper case is true (the user hit okay), we add uppercase to allChar.
  if (includeUpperCase === true) {
    allChar = allChar.concat(upperCase);
  }
  //If include numeric is true, we add numeric to allChar
  if (includeNumeric === true) {
    allChar = allChar.concat(numeric);
  }
  //If include specialChar is true, we add special characters to allChar
  if (includeSpecialChar === true) {
    allChar = allChar.concat(specialChar);
  }

  //use generatePassword to create a password
  var password = generatePassword(allChar);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
