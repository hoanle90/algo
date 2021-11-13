type Name = "aaa" | "bbb" | "ccc"
interface User {
  name: Name
  id: number
}
type UserType = {
  name: Name
  id: number
}
// class abc implements User
interface GenericUser<Type> {
  name: Type
  id: Type
}
let user12: User = {
  name: "aaa",
  id: 1,
}
let userGenereic: GenericUser<string> = {
  name: "avc",
  id: "123",
}

let user123: Partial<User> = {
  name: "aaa",
}
let user1234: Required<User> = {
  id: 123,
  name: "ccc",
}
// interface User {
//   name: Name
//   id: number
// }
let user52: Pick<User, "name"> = {
  name: "aaa",
}
let user53: Omit<User, "name"> = {
  id: 345,
}

// bao loi change ID ???
// js => freeze() => wri
// ts
// void any
class userClassName implements User {
  id: number = 123
  name: Name = "aaa"
}

class userClassType implements UserType {
  id: number = 123
  name: Name = "aaa"
}

// function Frozen(constructor: Function) {
//   Object.freeze(constructor)
//   Object.freeze(constructor.prototype)
// }

// @Frozen
// class IceCream {}

// console.log(Object.isFrozen(IceCream)) // true

// class FroYo extends IceCream {}
