function countLetters(inputStr) {
  inputStr = inputStr.toLowerCase()
  var output = {}
for (var i = 0; i < inputStr.length; i++) {
 var letter = inputStr[i]
 if (inputStr[i] === ' ') {
  continue;
 }
 if (output[letter] == undefined) {
  output[letter] = 1
} else {
  output[letter] += 1
}
}
  return output;
}
console.log(countLetters('hello world'));
