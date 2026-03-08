// what is promise in JavaScript?
// a promice represents the Result of an asyncronous operation that may complete in the future

let checkAge = new Promise((resolve, reject) => {
  let age = 19
  if (age >= 18) {
    resolve('You are Voter')
  } else {
    reject('You are !Voter')
  }
})

checkAge
    .then(msg => console.log(msg))
    .catch(err => console.log(err))
