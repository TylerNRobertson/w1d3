// Count unique characters
// Tell how many there are of each character
function countLetters(inputStr) {
// Create an empty output object
  inputStr = inputStr.toLowerCase()
  var output = {}
// Loop through the characters of the string
for (var i = 0; i < inputStr.length; i++) {
 var letter = inputStr[i]
 if (output[letter] == undefined) {
  output[letter] = 1
} else {
  output[letter] += 1
}
}
  return output;
}
console.log(countLetters('hello'));
