function countLetters(inputStr) {
  inputStr = inputStr.toLowerCase()
  var output = {}
for (var i = 0; i < inputStr.length; i++) {
 var letter = inputStr[i]
 if (output[letter] == undefined) {
  output[letter] = [i]
} else {
  output[letter].push(i)
}
}
  return output;
}
console.log(countLetters('hello'));
