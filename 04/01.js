// Prototypes & Prototypal Inheritance

let Emp1 = {
  name: 'Sabed',
  age: 21
}

let Emp2 = Object.create(Emp1)

console.log(Emp2) // {}

console.log(Emp2.age) // Why i can access .age

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
