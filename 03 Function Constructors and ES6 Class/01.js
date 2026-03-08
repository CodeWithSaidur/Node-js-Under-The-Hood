// 1 Object Literan

let E1 = {
  name: 'Emp 1',
  age: 21,
  gender: 'M',
  detail: function () {
    console.log(this.name, this.age, this.gender)
  }
}
E1.detail()

let E2 = {
  name: 'Emp 1',
  age: 21,
  gender: 'M'
}

let E3 = {
  name: 'Emp 1',
  age: 21,
  gender: 'M'
}

// Blue print / Function constructor
function EmpBluePrint(name, age, roll) {
  ;((this.name = name),
    (this.age = age),
    (this.roll = roll),
    (this.info = function () {
      console.log(`Name ${this.name} Age ${age} ${this.roll}`)
    }))
  this.NA = function () {
    console.log(`Name is ${this.name} Age ${age}`)
  }
}

let Emp1 = new EmpBluePrint('Sabed', 12, 1)
Emp1.NA()

// class Constructoor
class StudentsBlueprint {
  constructor(name, age, gender) {
    this.name = name
    this.age = age
    this.gender = gender
  }
  info() {
    console.log(`N ${this.name} ${this.age} ${this.gender}`)
  }
}

let S1 = new StudentsBlueprint('sabed', 22, 'M')
S1.info()

// function constructur was used for Creating Blueprint

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

