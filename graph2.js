// const m = [
//   [1, 1, 1, 1, 1],
//   [1, 1, 1, 1, 1],
//   [1, 1, 1, 1, 1],
//   [1, 1, 1, 1, 1],
//   [1, 1, 1, 1, 1],
// ]
const m = [
  [1, 1, 0],
  [1, 1, 1],
  [1, 1, 1],
]

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

  const successors = validCells.filter((cell) => m[cell[0]][cell[1]] === 1)
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
