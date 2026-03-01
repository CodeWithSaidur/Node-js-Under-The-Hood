console.log('Val of A is', a);
let a = 10 // ReferenceError: Cannot access 'a' before initialization


console.log('Val of B is', b);
var b = 20 // undefined, because of hoisting, var declarations are hoisted to the top of their scope and initialized with undefined.
