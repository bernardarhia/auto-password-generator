const data = require('./data')

// --- Function passgen
function passgen(
  array = "",
  passwordLength = 30,
  options = { min: 0, max: 0 }
) {
  /*
  ---- declare an empty array to store the generatored password 
  ---- declare a variable that will join the generatored password
  */
  let copy = [];
  let generatedPassword;

  // --- check if no value is provided for the first argument
  if (!array) {
    // --- loop through the arrays and generate random letters
    for (let i = 0; i < passwordLength; i++) {
      let randomNumber = Math.floor(Math.random() * data.length);
      copy.push(data[randomNumber]);
    }

    generatedPassword = copy.join("")
    return generatedPassword;
  }

  // --- if value is provided or the first argument
  for (let i = 0; i < passwordLength; i++) {
    let randomNumber = Math.floor(Math.random() * array.length);
    copy.push(array[randomNumber]);
  }

  generatedPassword = copy.join("")
  return generatedPassword;
}
module.exports = passgen;