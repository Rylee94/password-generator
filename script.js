// Assignment Code

var generateBtn = document.querySelector("#generate");
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

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
