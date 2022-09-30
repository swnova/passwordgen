// Assignment code here
//special characterss !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~
// Get references to the #generate element

const speccharacters = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var pwlength = prompt ("how long would would you like your password to be?")
  passwordText.value = password;

}

//functions
//button generates pw

// prompt for pw length 
// prompt for lower case , uppercase , numbers , special char



function generatePassword(){
  var pwlength = prompt ("How many characters do you want your password to be ?");
  var speccharacters = confirm ("How about special characters?");
  var lowCase = confirm ("Would you like lower case letters?");
  var numbers = confirm( "Would you like to use numbers as well?");
  var HiCase = confirm ("Would you like capital letters?")
  var rwethereyet = prompt ("Lets rock n roll !");
  //prompt user for length
  //check length
  //prompt/confirm for types of characters
  //store the responses
  //trim/build available pool of characters
  //build password letter by letter
  //add char to result
  //do until desired pw length

  return result
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
