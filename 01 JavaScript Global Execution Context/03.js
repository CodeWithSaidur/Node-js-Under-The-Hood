console.log('Start') 

setTimeout(() => {
  console.log('inside Timer Callback') // in memory: <timer callback function>
}, 0)

console.log('End')