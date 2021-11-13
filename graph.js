//1
//
const airports = "PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM".split(" ")
const routes = [
  ["PHX", "LAX"],
  ["PHX", "JFK"],
  ["JFK", "OKC"],
  ["JFK", "HEL"],
  ["JFK", "LOS"],
  ["MEX", "LAX"],
  ["MEX", "BKK"],
  ["MEX", "LIM"],
  ["MEX", "EZE"],
  ["LIM", "BKK"],
]

//graph
const adjacencyList = new Map()

function addNode(airport) {
  adjacencyList.set(airport, [])
}

function addEdge(origin, destination) {
  adjacencyList.get(origin).push(destination)
  adjacencyList.get(destination).push(origin)
}

airports.forEach(addNode)
routes.forEach((route) => addEdge(...route))

console.log("adjacencyList", adjacencyList)

function bfs(start) {
  const visited = new Set()
  const queue = [start]

  while (queue.length > 0) {
    const airport = queue.shift()
    const destinations = adjacencyList.get(airport)
    for (const destination of destinations) {
      if (destination === "BKK") {
        console.log("found BKK")
      }
      if (!visited.has(destination)) {
        visited.add(destination)
        queue.push(destination)
        console.log(destination)
      }
    }
  }
}
//bfs("PHX")
function dfs(start, visited = new Set()) {
  visited.add(start)
  const destinations = adjacencyList.get(start)
  for (const destination of destinations) {
    if (destination === "BKK") {
      console.log("found BKK")
    }
    if (!visited.has(destination)) {
      console.log(destination)
      dfs(destination, visited)
    }
  }
}
dfs("PHX")
