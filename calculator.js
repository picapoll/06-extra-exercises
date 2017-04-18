/* https://github.com/juanmaguitar/exercises-javascript/tree/master/06-extra-exercises

Define a function called calculator that receives an operation and two numbers and returns the result of the operation applied to the values passed as parameters
calculator("suma",10,5) // 15
calculator("resta",10,5) // 5
calculator("multiplicacion",10,5) // 50
calculator("division",10,5) // 2  */

function calculator (operation, n1, n2) {
  if (operation === 'suma') return n1 + n2
  if (operation === 'resta') return n1 - n2
  if (operation === 'multiplicacion') return n2 * n2
  if (operation === 'division') return n1 / n2
}
