function GiglfriendsBluePrints(name,age,gender) {
  this.name = name,
  this.age = age,
  this.gender = gender

  this.dtl = function () {
    return `${name} ${age} ${gender}`
  }
}

let GF1 = new GiglfriendsBluePrints('GF1', 19, 'F')

console.log(GF1.dtl());
