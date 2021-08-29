// 1
// Find First and Last Position of Element in Sorted Array
// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
/*
Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
Example 3:

Input: nums = [], target = 0
Output: [-1,-1]

[5,6,6,8,8,8,8,8,8,8,8,10]
left 5
right 10 
middle 8
=> right = 8

*/

const findElement = (arr, val) => {
  let n = arr.length
  if (n === 0) return [-1, 1]

  let left = 0
  let right = n - 1
  let middle = 0
  let first = -1
  while (left <= right) {
    middle = Math.floor((left + right) / 2)
    console.log("=======")
    console.log("middle, let , right", left, middle, right)
    console.log("mid left right", arr[left], arr[middle], arr[right])
    console.log("")
    if (arr[middle] > arr[middle - 1] || arr[middle] < arr[middle + 1]) {
      console.log("match")
      first = middle
      break
    }
    if (arr[middle] === val) {
      right = middle
    }
    if (arr[middle] > val) {
      left = middle + 1
    }
    if (arr[middle] < val) {
      right = middle - 1
    }
  }
  console.log("first", first)
}
findElement([5, 6, 6, 6, 6, 8, 8, 8, 8, 8, 8, 8, 8, 10], 8)
