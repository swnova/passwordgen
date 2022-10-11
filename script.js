
var generateBtn = document.querySelector("#generate");

var lowerCaseArr = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
]
var hiCaseArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "k", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
;

var numbersArr = [ 1 , 2 , 3 , 4 , 5 , 6, 7, 8, 9, ];

var special = [" !, @, #, $, %, &, *, (, ),"]
// Assignment code here
//special characterss !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~
// Get references to the #generate element

//const speccharacters = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  //console.table(password)
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  //const alpha = Array.from(Array(26)).map((e, i) => i + 65);
  //const alphabet = alpha.map((x) => String.fromCharCode(x));
 // console.log(alphabet);

}

//functions
//button generates pw

// prompt for pw length 
// prompt for lower case , uppercase , numbers , special char



function generatePassword() {

var pwlength = prompt("How many characters do you want your password to be ?"); //more specific var names 


  if (pwlength < 8) {
    alert("password must be greater than 8 characters"); 
    return
  }

  if (pwlength > 128) {
    alert("password must be less than 128 characters")
    return
  }

  var lowCase = confirm("Would you like lower case letters?");
  var numbers = confirm("Would you like to use numbers as well?");
  var HiCase = confirm("Would you like capital letters?")
  var speccharacters = confirm("How about special characters?");
  var impossiblecharacters = []
  var pwChars = ""

  if (lowCase == true){
  impossiblecharacters=impossiblecharacters.concat(lowerCaseArr)
  };

  if (numbers == true){
  impossiblecharacters=impossiblecharacters.concat(numbersArr)
  };

  if (HiCase == true){
  impossiblecharacters=impossiblecharacters.concat(hiCaseArr)
  };

  if (speccharacters == true){
   pwChars+= 
  impossiblecharacters=impossiblecharacters.concat(special)
  };

  console.log(impossiblecharacters)
  console.log(impossiblecharacters[Math.floor(Math.random() * impossiblecharacters.length)]);

  for (var i = 0; i<pwlength; i++){
    pwChars += impossiblecharacters[Math.floor(Math.random() * impossiblecharacters.length)];
   //try 50
    console.log(pwChars)
  }
  //prompt user for length
  //check length
  //prompt/confirm for types of characters
  //store the responses
  //trim/build available pool of characters
  //build password letter by letter
  //add char to result
  //do until desired pw length

  return(pwChars)

  
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
