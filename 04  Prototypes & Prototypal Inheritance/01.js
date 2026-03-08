// Prototypes & Prototypal Inheritance

let Emp1 = {
  name: 'Sabed',
  age: 21
}

let Emp2 = Object.create(Emp1)

console.log(Emp2) // {} 

console.log(Emp2.age) // Why i can access .age
/* 
  ans: because of prototype chain, when we try to access .age on Emp2, it first looks for .age in Emp2,
  if it doesn't find it there, it looks for it in Emp1, and since Emp1 has .age, it returns 21.
  This is how prototypal inheritance works in JavaScript.
*/
// In JavaScript, every object has an internal property called [[Prototype]].
// ------------------------------------------------

let n = 'sabed'
console.log(n.length)

// ====================================================
String.prototype.toUpperCase = function () {
  return 'to Upper Case Not found'
}

let a = 'sabed'
console.log(a.toUpperCase())

// ================================================
