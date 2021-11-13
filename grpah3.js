const m = [
  [1, 2, 3, 4, 5],
  [6, -7, -8, 9, 10],
  [-11, 12, 13, 14, 15],
  [16, 17, -18, -19, -20],
  [21, 22, 23, 24, 25],
]
// const m = [
//   [0, 0, 0, 0, 0],
//   [0, 1, 1, 0, 0],
//   [1, 0, 0, 0, 0],
//   [0, 0, 1, 1, 1],
//   [0, 0, 0, 0, 0],
// ]
// const m = [
//   [1, 1, 0],
//   [1, 1, 1],
//   [1, 1, 1],
// ]

/* 
// 
step giai quyet bai toan : 4 step

- step function => check diem do -> di toi diem nao [3,2] -> [3,1] [4,2] [2,2] 14 -> 9 13 15 
-> check 4 diem xung quanh, !== 1 , nam trong mang 
- lua lai nhung diem da di qua -> mang luu [1,6,2]
- lua lai mang diem nao toi diem nao -> [[1->2],[1->6] ,[2->3]]
- diem cuoi cung === end 
25 -> 24 -> 23
- bfs 1 ->  queue[2,6]
-> 2 -> queue[3,6]
-> 3 
-> 25 === ket thuc => dung lai
*/

let successors = (root, m) => {
  console.log("===========")
  console.log("input", root)

  let connectedCells = [
    [root[0] - 1, root[1]],
    [root[0], root[1] - 1],
    [root[0] + 1, root[1]],
    [root[0], root[1] + 1],
  ]

  const validCells = connectedCells.filter(
    (cell) =>
      cell[0] >= 0 &&
      cell[0] < m.length &&
      cell[1] >= 0 &&
      cell[1] < m[0].length
  )
  console.log("valid cell", validCells)

  const successors = validCells.filter((cell) => m[cell[0]][cell[1]] > 0)
  console.log("successors", root, successors)
  console.log("     ")
  return successors
}

const buildPath = (traversalTree, to) => {
  let path = [to]
  let parent = traversalTree[to]
  while (parent) {
    path.push(parent)
    parent = traversalTree[parent]
  }
  return path.reverse()
}

const bfs = (from, to) => {
  let traversalTree = []
  let visited = new Set()
  let queue = []
  queue.push(from)

  while (queue.length) {
    let subtreeRoot = queue.shift()
    console.log("subtreeRoot", subtreeRoot)
    visited.add(subtreeRoot.toString())
    debugger
    if (subtreeRoot.toString() == to.toString())
      return buildPath(traversalTree, to)

    for (child of successors(subtreeRoot, m)) {
      if (!visited.has(child.toString())) {
        traversalTree[child] = subtreeRoot
        queue.push(child)
      }
    }
  }
}
console.log("ket qua", bfs([0, 0], [2, 2]))

/*
Windows Registry Editor Version 5.00

[HKEY_LOCAL_MACHINE\SOFTWARE\LeapWork]
"debug"="on"
"env"="https://zing.vn"
"company"="leapxpert"

*/
//{debug: 'on', env: "https://zing.vn", company: "leapxpert"}
// electron version 1.14
// web am version 1.14

// web am version 1.15 tinh nang A ????
// electron version 1.14 ??? tinh nang A
//  electron version 1.15  ???
//  electron version 1.15
