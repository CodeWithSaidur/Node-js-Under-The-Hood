class MyPromise {
  constructor(executor) {
    this.state = "pending"
    this.value = undefined
    this.onFulfilledCallbacks = []
    this.onRejectedCallbacks = []

    const resolve = (value) => {
      if (this.state === "pending") {
        this.state = "fulfilled"
        this.value = value
        this.onFulfilledCallbacks.forEach((cb) => cb(value))
      }
    }

    const reject = (reason) => {
      if (this.state === "pending") {
        this.state = "rejected"
        this.value = reason
        this.onRejectedCallbacks.forEach((cb) => cb(reason))
      }
    }

    executor(resolve, reject)
  }

  then(onFulfilled, onRejected) {

    if (this.state === "fulfilled") {
      onFulfilled(this.value)
    }

    if (this.state === "rejected") {
      onRejected(this.value)
    }

    if (this.state === "pending") {
      this.onFulfilledCallbacks.push(onFulfilled)
      this.onRejectedCallbacks.push(onRejected)
    }
  }

  catch(onRejected) {
    return this.then(null, onRejected)
  }
}



const p = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello from Polyfill")
  }, 1000)
})

p.then((data) => {
  console.log(data)
})