
let My_Promise = new Promise((resolve, reject) => {
  let success = false

  if (success) {
    resolve('Task Complited Successfully')
  } else {
    reject('Task Failed')
  }

})

My_Promise.then(e => {
  console.log(e)
})

  .catch(e => {
    console.log(e)
  })

  .finally(() => {
    console.log('Done')
  })
