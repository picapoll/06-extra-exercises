/* isString

Define a function called ​isString​ that receives a value and return true if the value received is a string */

function isString (n) {
  if (typeof n === 'string') {
    return true
  } else {
    return 'No es una string'
  }
}

isString(7)
