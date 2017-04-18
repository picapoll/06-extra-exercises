/* encodeWord

Define a function called ​encodeWord​ that receives a string and return the codified version of that string replacing the following characters:
7 instead of T
4 instead of A
5 instead of S
0 instead of O */

function encodeWord (word) {
  var myText = word
  myText = myText.replace(/t/gi, '7')
  myText = myText.replace(/a/gi, '4')
  myText = myText.replace(/s/gi, '5')
  myText = myText.replace(/o/gi, '0')
  return myText
}
