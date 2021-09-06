// 1
//Minimum Absolute Difference in an Array
//https://www.hackerrank.com/challenges/minimum-absolute-difference-in-an-array/problem
/*
Input: 3 -7 0
Output: 3

Input: -59 -36 -13 1 -53 -92 -2 -96 -54 75
output: 1
*/

const minAbs = (arr) => {
  const sortArr = arr.sort()
  let min = 100000000
  let length = arr.length
  console.log("sortArr", sortArr)
  for (let i = 1; i < length; i++) {
    let gap = Math.abs(sortArr[i] - sortArr[i - 1])
    console.log("gap", gap, i)
    if (gap < min) {
      min = gap
    }
  }
  return min
}
// let res1 = minAbs([3 ,-7, 0])
let res1 = minAbs([-59, -36, -13, 1, -53, -92, -2, -96, -54, 75])

console.log(res1)

//2
// Balanced Brackets
// https://www.hackerrank.com/challenges/balanced-brackets/problem
/*
Input: {{[[(())]]}}
Out: Yes
Input: {[(])}
Out: No
{[()]()()}

stack =[]
for
{
{[(
/// }])
) && ( => ok else no 
{[
] && [ 
{(
) && ( => ok  
{
    [{]
        stack queue
*/

const isBalanced = (s) => {
  let stack = []
  let arr = [...s]
  let res = "YES"
  let length = arr.length
  for (let i = 0; i < length; i++) {
    if (arr[i] === "[" || arr[i] === "(" || arr[i] === "{") {
      stack.push(arr[i])
    } else {
      if (stack.length === 0) return "NO"

      let item = stack.pop()

      if (item === "{" && arr[i] !== "}") {
        return "NO"
      }
      if (item === "[" && arr[i] !== "]") {
        return "NO"
      }
      if (item === "(" && arr[i] !== ")") {
        return "NO"
      }
    }
  }
  if (stack.length !== 0) return "NO"
  return res
}
let res2 = isBalanced("{{[[(())]]}}")
console.log("res2", res2)

// 3
// commonChild
// https://www.hackerrank.com/challenges/common-child/problem?filter=javascript&filter_on=language&h_l=interview&page=1&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=strings
/*
Input: 

HARRY
SALLY

OutPut: 2

Input:
SHINCHAN
NOHARAAA
Out: 3 (NHA)

HARRY
SALLY
    H A R R Y
S   0 0 0 0 0
A   0 1 1 1 1
L   0 1 1 1 1
L   0 1 1 1 1
Y   0 1 1 1 2

*/
const commonChild = (s1, s2) => {
  const arrS1 = [...s1]
  const arrS2 = [...s2]
  const n = arrS1.length
  const m = arrS2.length

  let arr = []
  // create 2 dimension array
  arr = [new Array(m + 1).fill(0)]
  for (let i = 0; i < n; i++) arr.push([0])

  console.log(arr)
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (s1[i - 1] === s2[j - 1]) arr[i][j] = arr[i - 1][j - 1] + 1
      else arr[i][j] = Math.max(arr[i - 1][j], arr[i][j - 1])
    }
  }
  console.log("1=====", arr[n][m])
  console.log(arr)
}
let res3 = commonChild("SHINCHAN", "NOHARAAA")

// 4
// Buy sell stock
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
/*
Input: prices = [7,1,5,3,6,4]
Output: 5
[3,2,7,3,6,4]
*/

const maxProfit = (prices) => {
  let min = 1000000
  let max = 0
  let n = prices.length
  for (let i = 0; i < n; i++) {
    if (min > prices[i]) {
      min = prices[i]
    } else {
      let gap = prices[i] - min
      if (max < gap) {
        max = gap
      }
    }
  }
  console.log("max", max)
  return max
}

let res4 = maxProfit([7, 1, 5, 3, 6, 4])
maxProfit([3, 2, 7, 3, 6, 4])

// 5
// Search in Rotated Sorted Array
// https://leetcode.com/problems/search-in-rotated-sorted-array/
/*
Input: nums = [4,5,6,7,8,0,1,2], target = 0
Output: 4
*/

const searchRotate = (arr, val) => {
  let n = arr.length
  let left = 0
  let right = n - 1
  let rotatePoint = 0
  // find rotate point
  while (left < right) {
    let middle = Math.floor((left + right) / 2)
    if (arr[middle] > arr[left]) {
      left = middle
    }
    if (arr[middle] < arr[right]) {
      right = middle
    }
    if (arr[left] > arr[left + 1]) {
      rotatePoint = left
      break
    }
  }
  left = 0
  right = n - 1
  let middle = 0
  console.log("rotatePoint", rotatePoint, arr[rotatePoint], val)
  // do binary searcg
  arr[rotatePoint] >= val ? (right = rotatePoint) : (left = rotatePoint)
  console.log("left", left)
  console.log("right", right)
  while (left <= right) {
    middle = Math.floor((left + right) / 2)
    if (arr[middle] === val) {
      console.log("val", middle)
      return middle
    } else if (val > arr[left]) {
      left = middle + 1
    } else if (val < arr[right]) {
      right = middle - 1
    }
  }
  return -1
}

searchRotate([4, 5, 6, 7, 8, 0, 1, 2], 8)

// 6
// Remove All Adjacent Duplicates In String
// https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/
/*
Input: s = "abbaca"
Output: "ca"
*/

const removeDuplicates = (s) => {
  let arr = [...s]
  let n = arr.length
  let stack = []
  for (let i = 0; i < n; i++) {
    stack.push(arr[i])
    console.log("stack", stack)
    while (stack.length > 1) {
      let length = stack.length
      if (stack[length - 1] === stack[length - 2]) {
        stack.splice(length - 2, 2)
      } else {
        break
      }
    }
  }
  console.log("result", stack)
}

removeDuplicates("abbaca")

//7
// Two sum
// https://leetcode.com/problems/two-sum/
/* 
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].
*/
const twoSum = (nums, target) => {
  let n = nums.length
  let hash = {}
  for (let i = 0; i < n; i++) {
    let num = target - nums[i]
    console.log("num", num)
    if (hash[nums[i]] !== undefined) {
      console.log("i", i, hash[nums[i]])
      return [i, hash[nums[i]]]
    } else {
      hash[num] = i
      console.log(hash)
    }
  }
}
twoSum([1, 2, 7, 11, 15], 9)
// let test = {a: 'x', b:'y', c: 12123}
// let str = ''
// Object.keys(test).forEach(item=>{
//     str += `{key:${item}, value: ${test[item]}}
//     `
// })
// console.log('Object.keys(test)',Object.keys(test).length)
// console.log('str',str)

// 3
// Minimum Swaps
// https://www.hackerrank.com/challenges/minimum-swaps-2/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays
// Input: [7, 1, 3, 2, 4, 5, 6]
// Out: 5
/*
0   [7, 1, 3, 2, 4, 5, 6]   swap (0,3)
1   [2, 1, 3, 7, 4, 5, 6]   swap (0,1)
2   [1, 2, 3, 7, 4, 5, 6]   swap (3,4)
3   [1, 2, 3, 4, 7, 5, 6]   swap (4,5)
4   [1, 2, 3, 4, 5, 7, 6]   swap (5,6)
5   [1, 2, 3, 4, 5, 6, 7]
*/

// const minSwap = (arr) => {
//     let count = 0
//     let length = arr.length
//     for(let i= 0;i<length;i++){
//         if()
//     }
// }

// const swap =( arr, i,j) =>{
//     let temp = arr[i]
//     arr[i] = arr[j]
//     arr[j] = temp
// }

//4
/*
Current position : 5 1 2 3 7 8 6 4
Initial position : 1 2 3 4 5 6 7 8
 5

Current position : 1 2 5 3 7 8 6 4
Initial position : 1 2 3 4 5 6 7 8

1 2 3 4 5 6 7 8  : 0 swap (initial)
1 2 3 5 4 6 7 8  : 1 swap (5 and 4)
1 2 3 5 6 4 7 8  : 1 swap (6 and 4)
1 2 3 5 6 7 4 8  : 1 swap (7 and 4)
1 2 3 5 6 7 8 4  : 1 swap (8 and 4)
1 2 5 3 6 7 8 4  : 1 swap (5 and 3)
1 2 5 3 7 6 8 4  : 1 swap (7 and 6)
1 2 5 3 7 8 6 4  : 1 swap (8 and 6)
*/
