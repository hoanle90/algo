// merge sort
/*

 1) merge 2 sort array => 1 sort array
    [1,2,3] [2,3,4] => [1,2,2,3,3,4]

 2) slit 1 unsort arr into 2 unsort array
    let a = [5,4,1,6,2,5]
    b = [5,4,1] => [5] [4,1] => [5] [] 
    c = [6,2,5]

    5
    4 1 => 1 4 

    split
*/

//splice
// let a = [1, 2, 3, 4, 5, 6]
// let b = a.splice(0, 3)
// console.log('a', a)
// console.log('b', b)

//shitf
// let a = [1, 2, 3, 4, 5, 6]
// let b = a.shift()
// console.log('a', a)
// console.log('b', b)

const merge = (a, b) => {
  let sort = []
  while (a.length && b.length) {
    a[0] < b[0] ? sort.push(a.shift()) : sort.push(b.shift())
  }

  return [...sort, ...a, ...b]
}
// const arrMerge = merge([1, 2, 3], [0, 2, 3, 4])
// console.log('arrMerge', arrMerge)
// 1 -> sort
// 2,3
const mergeSort = (arr) => {
  if (arr.length <= 1) return arr
  let middle = arr.length / 2
  let right = [...arr]
  let left = right.splice(0, middle)
  return merge(mergeSort(left), mergeSort(right))
}

// // // merge([1, 2, 3], [2, 3, 4])
// let unsort = [5, 4, 1, 6, 2, 5, 6]
// const res = mergeSort(unsort)
// console.log('unsort', unsort)
// console.log('res', res)

// quick sort
// let a = [5,4,1,6,2,5]
// pivot = a[0]  // 5
// left [ 4, 1, 2 ] 4 => left 1,2 [] 1,2 2 1
// right [ 6, 5 ]

const quickSort = (arr) => {
  if (arr.length <= 1) return arr
  let pivot = arr[0]
  let left = []
  let right = []
  for (let i = 1; i < arr.length; i++) {
    arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i])
  }

  console.log("arr", arr)
  console.log("left", left)
  console.log("right", right)
  console.log("====pivot", pivot)
  console.log(" ")
  return [...quickSort(left), pivot, ...quickSort(right)]
}

//let unsort = [5, 4, 1, 6, 2, 5]
// const res = quickSort(unsort)
// console.log('unsort', unsort)
// console.log('res', res)
// let res = unsort.sort()
// console.log('res', res)
// v8 use timSort

const linearSearch = (arr, val) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i
    }
  }
  return -1
}
const res = linearSearch([1, 2, 3, 4, 4, 5], 1)
console.log("res", res)

// binary search
// 1 2 3 4 4 5 6   5
const binarySearch = (arr, val) => {
  let min = 0
  let max = arr.length - 1
  while (min <= max) {
    let middle = Math.floor((min + max) / 2)
    if (arr[middle] === val) {
      return middle
    }

    val > arr[middle] ? (min = middle + 1) : (max = middle - 1)

    console.log("middle", middle)
    console.log("min", min)
    console.log("max", max)
    console.log("")
  }
  return -1
}
const res = binarySearch(
  [
    1, 2, 3, 4, 4, 5, 6, 7, 8, 9, 10, 11, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    20, 22, 22, 22,
  ],
  7
)
console.log("res", res)
