// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

// Assignment Code
var generateBtn = document.querySelector("#generate");
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var symbol = ["!", "#", "$", "%", "&", "'", "()", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"]
var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// generate password function

function generatePassword() {
  passwordLength = prompt("Choose a password between 8 and 128 characters!")

  if (!passwordLength) {
    alert("CANNOT BE LEFT EMPTY!")
  } else if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("ENTER PASSWORD BETWEEN 8 AND 128!!!")
  }
  else {
    confrimLower = confirm("Should password contain lowercase letters?")
    confirmUpper = confirm("Should password contain uppercase letters?")
    confrimSymbol = confirm("Should password contain special characters?")
    confrimNumber = confirm("Should password contain numbers?")
  }


  // if user says ok to all prompts
  if (confrimLower && confirmUpper && confrimSymbol && confrimNumber) {
    pInput = lower.concat(upper, symbol, number)
  }
  else if (!confrimLower && !confirmUpper && !confrimSymbol && !confrimNumber) {
    pInput = alert("PLEASE CHOOSE AN OPTION")
  }
}


generatePassword()