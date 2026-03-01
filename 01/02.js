console.log('Global Execution Context Start') // on code

let x = 5 // in memory: x: 5
  /* hosting: JavaScript's default behavior of moving declarations 
 to the top of the current scope (script or function) 
 during the compilation phase. 
 This means that variables and functions can be used before they 
 are declared in the code, as they are hoisted to the top of 
 their scope. However, only the declarations are hoisted, 
 not the initializations. For example, if you declare a variable 
 with var, it will be hoisted and initialized with undefined, 
 while let and const declarations are hoisted but not initialized,
 resulting in a ReferenceError if accessed before declaration.
*/


function foo() {
  console.log('Inside foo') // in memory: foo: <function>
}

console.log(x) // in code
foo() // in code // also 2 phase: memory and code

console.log('Global Execution Context End') // in code
