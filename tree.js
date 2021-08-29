//
//
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// arrAdd = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// arrDelete = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// //
// //      1
// //
function Node(value) {
  this.value = value
  this.left = null
  this.right = null
}
function BST() {
  this.root = null
}

let bst = new BST()
let node = new Node(123)
// console.log(bst);
// console.log(node);

BST.prototype.insert = function (value) {
  let node = new Node(value)
  if (this.root === null) {
    this.root = node
    return this
  }
  let current = this.root
  while (current) {
    if (value === current.value) break
    if (value < current.value) {
      if (current.left == null) {
        current.left = node
        break
      }
      current = current.left
    } else {
      if (current.right == null) {
        current.right = node
        break
      }
      current = current.right
    }
  }
  return this
}

BST.prototype.min = function (current) {
  if (!current) {
    current = this.root
  }
  while (current.left) {
    current = current.left
  }
  return current.value
}
BST.prototype.max = function (current) {
  if (!current) {
    current = this.root
  }
  while (current.right) {
    current = current.right
  }
  return current.value
}
BST.prototype.search = function (value) {
  let current = this.root
  while (current) {
    console.log("current", current)
    if (current.value === value) {
      return value
    }
    value < current.value ? (current = current.left) : (current = current.right)
  }
  return current ? current.value : -1
}
//DFS
// posrt order root -> left -> right
// inorder left -> root -> right
//preorder left -> right -> root
BST.prototype.DFS = function (node) {
  if (node) {
    this.DFS(node.left)
    console.log(node.value)
    this.DFS(node.right)
  }
}
BST.prototype.BFS = function () {
  let queue = []
  queue.push(this.root)
  while (queue.length) {
    let node = queue.shift()
    console.log(node.value)
    node.left && queue.push(node.left)
    node.right && queue.push(node.right)
  }
}
BST.prototype.removeNode = function (node, value) {
  if (!node) {
    return null
  }
  if (value === node.value) {
    // no children
    if (!node.left && !node.right) return null
    // one child and it’s the right
    if (!node.left) node.right
    // one child and it’s the left
    if (!node.right) node.left
    // two kids
    const minRight = this.min(node.right)
    node.value = minRight
    node.right = this.removeNode(node.right, minRight)
    return node
  } else if (value < node.value) {
    node.left = this.removeNode(node.left, value)
    return node
  } else {
    node.right = this.removeNode(node.right, value)
    return node
  }
}

BST.prototype.remove = function (value) {
  this.root = this.removeNode(this.root, value)
}
// a b c d e f g a
bst.insert(12).insert(16).insert(20).insert(4)
console.log(bst)
let min = bst.min()
console.log("min", min)
let max = bst.max()
console.log("max", max)
let search = bst.search(21)
console.log("search", search)
bst.DFS(bst.root)
console.log("BFS", bst)
bst.BFS()

// //
// var a = "ab ab bx bx bx abc d s d ab ab";
// // => word => ab
// // => ab bx

// const findWord = (str) => {
//   const arr = str.split(" ");
//   let res = {};
//   for (let i = 0; i < arr.length; i++) {
//     res[arr[i]] ? res[arr[i]]++ : (res[arr[i]] = 1);
//   }

//   let max = 0;
//   Object.values(res).forEach((item) => {
//     console.log(item);
//     if (item > max) {
//       max = item;
//     }
//   });
//   let result = Object.keys(res).filter((item) => res[item] === max);

//   console.log("res", res);
//   console.log("max", max);
//   console.log("result", result);
// };
// findWord(a);
