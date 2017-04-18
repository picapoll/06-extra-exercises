/* isNumber

Define a function called ​isNumber​ that receives a value and return true if the value received is a number

   isNumber(3) // true
   isNumber("3") // false
   isNumber("asass") // false */

   function isNumber (n) {
   	if (typeof n === 'number') {
   		return true
   	} else {
   		return false
   	}
   }

// Second option
   function isNumber (n) {
  	return !isNaN(n)
   }
