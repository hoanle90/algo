//"a2(bc2(de)f)" => "abcdedefbcdedef"
function user(name, id) {
  this.name = name
  this.id = id
}
user.prototype.getName = function () {
  return this.name
}
user.prototype.getId = function () {
  return this.id
}
let user1 = new user("test", 1)
console.log(user1.getName())

class userClass {
  constructor(name, id) {
    this.name = name
    this.id = id
  }

  getNameClass = function () {
    return this.name
  }
  getIdClass = function () {
    return this.id
  }
}

class extendUserClass extends userClass {
  getNameClass = function () {
    return "extend" + this.id
  }
}

let a = new userClass("abc", 123)
let b = new extendUserClass("xyz", 1234)
console.log(a.getNameClass())
console.log(b.getNameClass())

var userCall1 = { name: "userCall1", id: 1 }
var userBind = { name: "userBind", id: 1 }
var userApply2 = { name: "userApply2", id: 1 }
function say(a, b) {
  console.log(`a: ${a} ${this.name} b :${b} ${this.name}`)
}
say.call(userCall1, "a", "b")
say.apply(userApply2, ["a", "b"])
var bind = say.bind(userBind, "a", "b")
bind()

var userFunction = function (name, id) {
  this.name = name
  this.id = id
}
userFunction.prototype.getFunctionName = function () {
  console.log(` user function ${this.name}`)
}

var userFunctionB = function () {}
userFunctionB.prototype = Object.create(userFunction.prototype)

let aF = new userFunction("function", 12)
aF.getFunctionName()
let bF = new userFunctionB("function b", 1)
bF.getFunctionName()

function add(x) {
  return function (y) {
    console.log(y)
    console.log(x)
    return x + y
  }
}
add(1)(2)
// content security policy
