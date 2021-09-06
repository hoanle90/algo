// // 1
// // Find First and Last Position of Element in Sorted Array
// // https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
// /*
// Example 1:

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Example 2:

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]
// Example 3:

// Input: nums = [], target = 0
// Output: [-1,-1]

// [5,6,6,8,8,8,8,8,8,8,8,10]
// left 5
// right 10
// middle 8
// => right = 8

// */

// const findElement = (arr, val) => {
//   let n = arr.length
//   if (n === 0) return [-1, 1]
//   let left = 0
//   let right = n - 1
//   let middle = 0

//   let firstPoint = -1
//   let lastPoint = -1
//   while (left <= right) {
//     middle = Math.floor((left + right) / 2)
//     if (arr[middle] >= val) {
//       right = middle - 1
//     } else {
//       left = middle + 1
//     }
//     if (arr[middle] === val) {
//       firstPoint = middle
//     }
//   }
//   left = 0
//   right = n - 1
//   middle = 0
//   while (left <= right) {
//     middle = Math.floor((left + right) / 2)
//     if (arr[middle] <= val) {
//       left = middle + 1
//     } else {
//       right = middle - 1
//     }
//     if (arr[middle] === val) {
//       console.log("middle", middle)
//       lastPoint = middle
//     }
//   }
//   console.log("firstPoint", firstPoint)
//   console.log("lastPoint", lastPoint)
// }
// //findElement([5, 6, 6, 6, 6, 8, 8, 8, 8, 8, 8, 8, 8, 10], 8)

// //2
// // https://leetcode.com/problems/merge-intervals/
// /*
// Example 1:

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
// Example 2:

// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.
// */

// const mergeInterval = (arr) => {
//   let sortArr = arr.sort((a, b) => {
//     if (b[0] < a[0]) return 1
//     if (b[0] > a[0]) return -1
//   })
//   console.log("sortArr", sortArr)
//   const res = []
//   for (let i = 1; i < arr.length; i++) {
//     if (sortArr[i][0] > sortArr[0][i - 1]) {
//       // 1 30 2 6
//       // 1 Max(3,6)
//       let item = [sortArr[0][i - 1], Math.max(sortArr[i][0], sortArr[i - 1][0])]
//       console.log("item", item)
//       res.push(item)
//     } else {
//       res.push(sortArr[i])
//     }
//   }
//   console.log("res", res)
// }
// // mergeInterval([
// //   [2, 6],
// //   [1, 3],
// //   [8, 10],
// //   [15, 18],
// // ])

// //3
// // https://www.hackerrank.com/challenges/angry-children/problem

// const minMax = (arr, k) => {
//   let sortArr = arr.sort((a, b) => {
//     if (a > b) return 1
//     if (a < b) return -1
//   })
//   console.log("srot", sortArr)
//   let min = Number.MAX_VALUE

//   for (let i = 0; i <= sortArr.length - k; i++) {
//     console.log(i, sortArr[i + k - 1], sortArr[i])
//     min = Math.min(min, sortArr[i + k - 1] - sortArr[i])
//   }
//   console.log("min", min)
// }
// // minMax([1, 2, 3, 4], 3)

// //4
// // https://www.hackerrank.com/challenges/climbing-the-leaderboard/problem//
// //[100,90,90,80]
// // [70,80,105]
// // 4 3 1
// // 100 100 50 40 40 20 10
// // 100 50 40 20 10
// // 5 25 50 120
// // 6 4 2 1
// const rank = (ranked, player) => {
//   const rankHash = {}
//   let level = 1
//   let result = []
//   for (let i = 0; i < ranked.length; i++) {
//     if (!rankHash[ranked[i]]) {
//       rankHash[ranked[i]] = level
//       level++
//     }
//   }
//   for (i = 0; i < player.length; i++) {
//     let val = binarySearch(ranked, player[i])
//     console.log("val", val)
//     level = rankHash[val]
//     result.push(level)
//   }
//   console.log("rankHash", rankHash)
//   console.log("result", result)
// }
// // 1 2 3 4 5 6 7 8 9    middle 5 3
// // 9 8 7 6 5 4 3 2 1    middle 5 8
// const binarySearch = (arr, val) => {
//   console.log("val", val, arr)
//   let left = 0
//   let right = arr.length - 1
//   let middle = 0
//   while (left <= right) {
//     middle = Math.floor((left + right) / 2)
//     if (arr[middle] === val) {
//       return val
//     }
//     if (arr[middle] < val) {
//       right = middle - 1
//     } else {
//       left = middle + 1
//     }
//   }
//   return -1
// }
// rank([100, 100, 50, 40, 40, 20, 10], [100, 50, 40, 20, 5])

function add(a, b) {
  //   console.log("b", b)
  if (a !== undefined && b !== undefined) {
    return a + b
  } else {
    return function (c) {
      return a + c
    }
  }
}
console.log(add(2, 3))
console.log(add(2, 0))
console.log(add(2)(30))
console.log(add(2)(3))
