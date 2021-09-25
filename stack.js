var MyStack = function () {
  this.stack = []
  return this.stack
}

/**
 * Push element x onto stack.
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.stack.push(x)
}

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function () {
  let item = this.stack.pop()
  return item
}

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function () {
  let n = this.stack.length
  return this.stack[0]
}

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  let n = this.stack.length
  return n === 0
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
var obj = new MyStack()
obj.push("1")
obj.push("1")
obj.push("1")
obj.push("1")
console.log(obj)

var Stack = function () {
  this.queue = []
}

Stack.prototype.push = function (x) {
  this.queue.push(x)
}

Stack.prototype.pop = function () {
  for (var i = 1, len = this.queue.length; i < len; i += 1) {
    this.queue.push(this.queue.shift())
  }
  this.queue.shift()
}

Stack.prototype.top = function () {
  for (var i = 1, len = this.queue.length; i < len; i += 1) {
    this.queue.push(this.queue.shift())
  }
  var ele = this.queue.shift()
  this.queue.push(ele)

  return ele
}

Stack.prototype.empty = function () {
  return this.queue.length === 0 ? true : false
}
