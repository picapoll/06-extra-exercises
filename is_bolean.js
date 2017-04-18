/* isBoolean

Define a function called ​isBoolean​ that receives a value and return true if the value received is a boolean

   isBoolean(3) // false
   isBoolean("true") // false
   isBoolean(true) // true */

function isBoolean (n) {
  if (typeof n === 'boolean') {
    return true
  } else {
    return false
  }
}

// second way
function isBoolean (n) {
  if (n === 'boolean') return true
  return false
}
