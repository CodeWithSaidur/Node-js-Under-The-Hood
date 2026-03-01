// Temporal Dead Zone (TDZ) for 'a' - Cannot access 'a' before initialization
console.log(a); 
console.log(b);
console.log(c);
let a = 10 // Cannot access 'a' before initialization
var b = 20
const c = 30

/*
    let and const are hosted but its create a TDZ
*/
