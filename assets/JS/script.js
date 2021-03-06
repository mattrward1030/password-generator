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
let password = []
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
    confirmLower = confirm("Should password contain lowercase letters?")
    confirmUpper = confirm("Should password contain uppercase letters?")
    confirmSymbol = confirm("Should password contain special characters?")
    confirmNumber = confirm("Should password contain numbers?")
  }


  // user inputs with concat method based on what they put
  if (confirmLower && confirmUpper && confirmSymbol && confirmNumber) {
    pInput = lower.concat(upper, symbol, number)
  }
  else if (!confirmLower && !confirmUpper && !confirmSymbol && !confirmNumber) {
    pInput = alert("PLEASE CHOOSE AN OPTION")
  }
  else if (confirmLower && confirmUpper && confirmNumber) {
    pInput = lower.concat(upper, number)
  }
  else if (confirmLower && confirmUpper && confirmSymbol) {
    pInput = lower.concat(upper, symbol)
  }
  else if (confirmLower && confirmNumber && confirmSymbol) {
    pInput = lower.concat(number, symbol)
  }
  else if (confirmUpper && confirmNumber && confirmSymbol) {
    pInput = upper.concat(number, symbol)
  }
  else if (confirmLower && confirmUpper) {
    pInput = lower.concat(upper)
  }
  else if (confirmLower && confirmNumber) {
    pInput = lower.concat(number)
  }
  else if (confirmLower && confirmSymbol) {
    pInput = lower.concat(symbol)
  }
  else if (confirmUpper && confirmNumber) {
    pInput = upper.concat(number)
  }
  else if (confirmUpper && confirmSymbol) {
    pInput = upper.concat(symbol)
  }
  else if (confirmSymbol && confirmNumber) {
    pInput = symbol.concat(number)
  }
  else if (confirmLower) {
    pInput = lower
  }
  else if (confirmUpper) {
    pInput = upper
  }
  else if (confirmSymbol) {
    pInput = symbol
  }
  else if (confirmNumber) {
    pInput = number
  }

  // for statement to loop over the else if statements to determine user selection and generate random password


  for (let i = 0; i < passwordLength; i++) {
    let userInput = pInput[Math.floor(Math.random() * pInput.length)]
    password.push(userInput)
  }

  var pw = password.join("");
  Input(pw);
  return pw;
}

function Input(pw) {
  document.getElementById("password").textContent = pw;

}





