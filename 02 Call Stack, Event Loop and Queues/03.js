console.log('1. Start')

setTimeout(() => {
  console.log('3. in side set timeout')
}, 0)

let My_Promise = new Promise((resolve, reject) => {
  let success = true
  if (success) {
    resolve('Task Complited Successfully')
  } else {
    reject('Task Failed')
  }
})

My_Promise.then(e => {
  console.log('4',e)
})
  .catch(e => {
    console.log('4',e)
  })
  .finally(e => {
    console.log('5 Code Run Success')
  })

console.log('2. End')