console.log('1 Start'); //1

setTimeout(() => {
    console.log('3 Set time out 1'); //3 
    
}, 2000);

setTimeout(() => {
    console.log('4 Set time out 2'); // 4
    
}, 0);

setTimeout(() => {
    console.log('5 Set time out 3'); // 5
    
}, 3000);

console.log('2 End'); // 2
