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

  let firstPoint = -1
  let lastPoint = -1
  while (left <= right) {
    middle = Math.floor((left + right) / 2)
    if (arr[middle] >= val) {
      right = middle - 1
    } else {
      left = middle + 1
    }
    if (arr[middle] === val) {
      firstPoint = middle
    }
  }
  left = 0
  right = n - 1
  middle = 0
  while (left <= right) {
    middle = Math.floor((left + right) / 2)
    if (arr[middle] <= val) {
      left = middle + 1
    } else {
      right = middle - 1
    }
    if (arr[middle] === val) {
      console.log("middle", middle)
      lastPoint = middle
    }
  }
  console.log("firstPoint", firstPoint)
  console.log("lastPoint", lastPoint)
}
//findElement([5, 6, 6, 6, 6, 8, 8, 8, 8, 8, 8, 8, 8, 10], 8)

//2
// https://leetcode.com/problems/merge-intervals/
/*
Example 1:

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
Example 2:

Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
*/

const mergeInterval = (arr) => {
  let sortArr = arr.sort((a, b) => {
    if (b[0] < a[0]) return 1
    if (b[0] > a[0]) return -1
  })
  console.log("sortArr", sortArr)
  const res = []
  for (let i = 1; i < arr.length; i++) {
    if (sortArr[i][0] > sortArr[0][i - 1]) {
      // 1 30 2 6
      // 1 Max(3,6)
      let item = [sortArr[0][i - 1], Math.max(sortArr[i][0], sortArr[i - 1][0])]
      console.log("item", item)
      res.push(item)
    } else {
      res.push(sortArr[i])
    }
  }
  console.log("res", res)
}
// mergeInterval([
//   [2, 6],
//   [1, 3],
//   [8, 10],
//   [15, 18],
// ])

//3
// https://www.hackerrank.com/challenges/angry-children/problem

const minMax = (arr, k) => {
  let sortArr = arr.sort((a, b) => {
    if (a > b) return 1
    if (a < b) return -1
  })
  console.log("srot", sortArr)
  let min = Number.MAX_VALUE

  for (let i = 0; i <= sortArr.length - k; i++) {
    console.log(i, sortArr[i + k - 1], sortArr[i])
    min = Math.min(min, sortArr[i + k - 1] - sortArr[i])
  }
  console.log("min", min)
}
// minMax([1, 2, 3, 4], 3)

//4
// https://www.hackerrank.com/challenges/climbing-the-leaderboard/problem//
//[100,90,90,80]
// [70,80,105]
// 4 3 1
// 100 100 50 40 40 20 10
// 100 50 40 20 10
// 5 25 50 120
// 6 4 2 1
const rank = (ranked, player) => {
  const rankHash = {}
  let level = 1
  let result = []
  for (let i = 0; i < ranked.length; i++) {
    if (!rankHash[ranked[i]]) {
      rankHash[ranked[i]] = level
      level++
    }
  }
  for (i = 0; i < player.length; i++) {
    let val = binarySearch(ranked, player[i])
    console.log("val", val)
    level = rankHash[val]
    result.push(level)
  }
  console.log("rankHash", rankHash)
  console.log("result", result)
}
// 1 2 3 4 5 6 7 8 9    middle 5 3
// 9 8 7 6 5 4 3 2 1    middle 5 8
const binarySearch = (arr, val) => {
  console.log("val", val, arr)
  let left = 0
  let right = arr.length - 1
  let middle = 0
  while (left <= right) {
    middle = Math.floor((left + right) / 2)
    if (arr[middle] === val) {
      return val
    }
    if (arr[middle] < val) {
      right = middle - 1
    } else {
      left = middle + 1
    }
  }
  return -1
}
rank([100, 100, 50, 40, 40, 20, 10], [100, 50, 40, 20, 5])

// 5
// https://www.hackerrank.com/challenges/recursive-digit-sum/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=recursion-backtracking

function superDigit(n, k) {
  let str = "" + n
  str = str.repeat(k)
  let arr = [...str]
  let length = arr.length
  if (length === 1) {
    return n
  }
  let res = 0
  for (let i = 0; i < length; i++) {
    res = res + 1 * arr[i]
  }
  return superDigit(res, 1)
}

//6
//https://www.hackerrank.com/challenges/electronics-shop/problem

function getMoneySpent(keyboards, drives, b) {
  const sortA = keyboards.sort()
  const sortB = drives.sort()
  let res = -1
  let leftA = sortA.length - 1
  let leftB = sortB.length - 1
  let sum = sortA[0] + sortB[0]
  if (sum > b) return -1
  sum = sortA[leftA] + sortB[leftB]
  while (sum > b) {
    sum = sortA[leftA] + sortB[leftB]
    if (sum === b) {
      return sum
    }
    if (leftA === 0) {
      leftB--
    }
    if (leftB === 0) {
      leftA--
    }
    if (sortA[leftA - 1] < sortB[leftB - 1]) {
      leftA--
    } else {
      leftB--
    }
  }
  return sum
}
// 7
// https://leetcode.com/problems/house-robber/
/*
Input: nums = [2,7,9,3,1]
Output: 12
Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
Total amount you can rob = 2 + 9 + 1 = 12.
*/
const rob = (nums) => {
  // max = 0
  //[2,7,9,3,1,2,100]
  //2
  //  7
  //     11
  //       10
  //          12
  //             13
  //                112
  let max = 0
  let n = nums.length
  if (n === 1) {
    return nums[0]
  }
  if (n < 3) {
    max = nums[1] > nums[0] ? nums[1] : nums[0]
    return max
  }
  let arr = [nums[0], nums[1], nums[0] + nums[2]]
  for (let i = 3; i < n; i++) {
    // 3 = max 0 1
    console.log("arr[i - 3]", arr[i - 3])
    console.log("arr[i - 2]", arr[i - 2])
    let max = Math.max(arr[i - 2], arr[i - 3])
    console.log("max", i, max)
    let item = nums[i] + max

    arr.push(item)
  }
  console.log("rob", arr)
  return Math.max(arr[n - 1], arr[n - 2])
}
rob([2, 7, 9, 3, 1, 2, 100])
//8
//https://leetcode.com/problems/backspace-string-compare/
/*
Input: s = "ab#c", t = "ad#c"
Output: true
Explanation: Both s and t become "ac".
Example 2:

Input: s = "ab##", t = "c#d#"
Output: true
Explanation: Both s and t become "".
Example 3:

Input: s = "a##c", t = "#a#c"
Output: true
Explanation: Both s and t become "c".
*/
const backspaceCompare = (s, t) => {
  let arr1 = [...s]
  let arr2 = [...t]
  let res1 = []
  let res2 = []
  let n1 = arr1.length
  let n2 = arr2.length
  for (let i = 0; i < n1; i++) {
    if (arr1[i] === "#") {
      res1.splice(res1.length - 1, 1)
    } else {
      res1.push(arr1[i])
    }
  }
  for (i = 0; i < n2; i++) {
    if (arr2[i] === "#") {
      res2.splice(res2.length - 1, 1)
    } else {
      res2.push(arr2[i])
    }
  }
  let str1 = res1.join("")
  let str2 = res2.join("")

  return str1 === str2
}
// let a = []
// a.splice(a.length - 1, 1)
// console.log("aaaa", a)
backspaceCompare("a##c", "#a#c")
backspaceCompare("ab##", "c#d#")
// 9
// https://leetcode.com/problems/reveal-cards-in-increasing-order/
/*
Input: deck = [17,13,11,2,3,5,7]
Output: [2,13,3,11,5,17,7]
Explanation: 
We get the deck in the order [17,13,11,2,3,5,7] (this order does not matter), and reorder it.
After reordering, the deck starts as [2,13,3,11,5,17,7], where 2 is the top of the deck.
We reveal 2, and move 13 to the bottom.  The deck is now [3,11,5,17,7,13].
We reveal 3, and move 11 to the bottom.  The deck is now [5,17,7,13,11].
We reveal 5, and move 17 to the bottom.  The deck is now [7,13,11,17].
We reveal 7, and move 13 to the bottom.  The deck is now [11,17,13].
We reveal 11, and move 17 to the bottom.  The deck is now [13,17].
We reveal 13, and move 17 to the bottom.  The deck is now [17].
We reveal 17.


*/

const deckRevealedIncreasing = (deck) => {
  let sortDeck = deck.sort((a, b) => b - a)

  let length = sortDeck.length
  let res = [sortDeck[1], sortDeck[0]]
  for (let i = 2; i < length; i++) {
    let lengthRes = res.length - 1
    let item = res[lengthRes]
    res.splice(lengthRes, 1)
    res = [sortDeck[i], item, ...res]
  }
  console.log("deckRevealedIncreasing", res)
  return res
}
deckRevealedIncreasing([17, 13, 11, 2, 3, 5])
//10
// https://leetcode.com/problems/max-value-of-equation/
/*
Input: points = [[1,3],[2,0],[5,10],[6,-10]], k = 1
Output: 4
*/
const findMaxValueOfEquation = (points, k) => {
  let length = points.length
  let max = Number.NEGATIVE_INFINITY
  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      let gap = Math.abs(points[j][0] - points[i][0])
      if (gap > k) {
        break
      }
      let val = points[i][1] + points[j][1] + gap
      console.log("val aa", val, i)
      max = Math.max(max, val)
    }
  }
  console.log("max", max)
  return max
}
findMaxValueOfEquation(
  [
    [1, 3],
    [2, 0],
    [3, 10],
    [4, 31],
    [5, 10],
    [6, -10],
  ],
  3
)
/*
[1, 3], [2, 0] => 4
[1, 3] [3, 10] => 13 + 2 = 14

[2, 0], [3, 10] => 11
[2, 0] [4, 31] => 33

*/
// findMaxValueOfEquation(
//   [
//     [-19, 9],
//     [-15, -19],
//     [-5, -8],
//   ],
//   10
// )
// const findMaxValueOfEquation2 = (points, k) => {
//   let result = -Infinity
//   let queue = []
//   for (let point of points) {
//     while (queue.length && point[0] - queue[0][1] > k) {
//       queue.shift()
//     }
//     if (queue.length) {
//       result = Math.max(result, queue[0][0] + point[1] + point[0])
//     }
//     console.log(" point[1]", point[1])
//     console.log(" point[0]", point[0])
//     while (queue.length && point[1] - point[0] > queue[queue.length - 1][0]) {
//       queue.pop()
//     }
//     queue.push([point[1] - point[0], point[0]])
//   }
//   console.log("result", result)
//   return result
// }
// findMaxValueOfEquation2(
//   [
//     [-19, 9],
//     [-15, -19],
//     [-5, -8],
//   ],
//   10
// )

//11
//https://leetcode.com/problems/monotonic-array/
/*
Example 1:

Input: nums = [1,2,2,3]
Output: true
Example 2:

Input: nums = [6,5,4,4]
Output: true
Example 3:

Input: nums = [1,3,2]
Output: false
*/
const isMonotonic = (nums) => {
  const length = nums.length
  const isIncrease = nums[0] < nums[length - 1]
  let isMono = true
  for (let i = 1; i < length; i++) {
    if (isIncrease) {
      if (nums[i - 1] > nums[i]) {
        isMono = false
      }
    } else {
      if (nums[i - 1] < nums[i]) {
        isMono = false
      }
    }
  }
  console.log("isMono", isMono)
  return isMono
}
// 12
/*
Longest Turbulent Subarray

Solution
Given an integer array arr, return the length of a maximum size turbulent subarray of arr.

A subarray is turbulent if the comparison sign flips between each adjacent pair of elements in the subarray.

More formally, a subarray [arr[i], arr[i + 1], ..., arr[j]] of arr is said to be turbulent if and only if:

For i <= k < j:
arr[k] > arr[k + 1] when k is odd, and
arr[k] < arr[k + 1] when k is even.
Or, for i <= k < j:
arr[k] > arr[k + 1] when k is even, and
arr[k] < arr[k + 1] when k is odd.

Input: arr = [9,4,2,10,7,8,8,1,9]
Output: 5
Explanation: arr[1] > arr[2] < arr[3] > arr[4] < arr[5]
Input: arr = [4,8,12,16]
Output: 2

4 < 9 => false
*/
const maxTurbulenceSize = (arr) => {
  let max = 0
  let count = 0
  const length = arr.length
  let signGreater = null
  for (let i = 0; i < length; i++) {
    if (signGreater === null) {
      signGreater = arr[i] === arr[i - 1] ? null : arr[i] > arr[i - 1]
    }
    if (signGreater === true) {
      if (arr[i] > arr[i - 1]) {
        signGreater = false
        count++
      } else {
        count = 0
        signGreater = null
      }
    }
    if (signGreater === false) {
      if (arr[i] < arr[i - 1]) {
        signGreater = true
        count++
      } else {
        count = 0
        signGreater = null
      }
      console.log("signGreater", signGreater)
    }
    max = Math.max(max, count)
  }
  console.log("max a", max)
}
maxTurbulenceSize([9, 4, 2, 10, 7, 8, 8, 1, 9])

// 13
// https://leetcode.com/problems/reverse-string/
/*
Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
0 1 2
5 4 3
*/
const reverseString = (s) => {
  let length = s.length
  let middlePoint = Math.floor(length / 2)
  let temp
  for (let i = 0; i < middlePoint; i++) {
    temp = s[i]
    s[i] = s[length - i - 1]
    s[length - i - 1] = temp
  }
  console.log("s", s)
  return s
}

// 14
// https://leetcode.com/problems/valid-palindrome/
/*

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
*/
const isPalindrome = (s) => {
  let res = true
  let str = s.replace(/[^a-zA-Z]/g, "").toLowerCase()
  let left = 0
  let right = str.length - 1
  while (left <= right) {
    if (str[left] !== str[right]) {
      res = false
      break
    }
    left++
    right--
  }
  console.log("res", res)
  return res
}
isPalindrome("A man, a plan, a canal: Panama")
//https://codesandbox.io/s/reactjs-async-update-forked-22wnl?file=/src/App.js:0-806

//15
//https://leetcode.com/problems/repeated-substring-pattern/
/*
Example 1:

Input: s = "abab"
Output: true
Explanation: It is the substring "ab" twice.
Example 2:

Input: s = "aba"
Output: false
Example 3:

Input: s = "abcabcabcabc"
Output: true
Explanation: It is the substring "abc" four times or the substring "abcabc" twice.
aba aba aba
*/
const repeatedSubstringPattern = (s) => {
  let length = s.length
  let substr = ""
  let isRepeat = true
  let left = 1
  while (left <= length / 2) {
    substr = s.slice(0, left)
    isRepeat = true
    for (let j = 0; j < length; j += left) {
      let substrItem = s.slice(j, j + left)
      console.log("substrItem", substrItem)
      if (substrItem !== substr) {
        isRepeat = false
        break
      }
    }
    if (isRepeat) {
      break
    }
    left++
  }
  console.log("isRepeat", isRepeat)
  return isRepeat
}
//repeatedSubstringPattern("abcabcabcabc")
repeatedSubstringPattern("abab")

// 16
//
const arr = [1, 2, 3, 4, 5, 6, 1, 1]
let res = arr.reduce((a, c) => {
  a[c] ? a[c]++ : (a[c] = 1)
  return a
}, {})
console.log("res", res)

// 17
// count how many x if x + 1 exist in array
// Input arr = [1,2,3]
// Output 2
// 1+1 = 2  and 2+1 = 3
// Input [1,1,2,2]
// Output 2
// 1+ 1 = 2 and 1 + 1 = 2
const countElement = (arr) => {
  const sortArr = arr.sort((a, b) => a - b)
  let left = 0
  let right = arr.length
  let count = 0
  let dup = 0
  while (left < right) {
    if (sortArr[left] === sortArr[left + 1]) {
      dup++
    } else {
      if (sortArr[left] === sortArr[left + 1] - 1) {
        count = count + 1 + dup
      }
      dup = 0
    }
    left++
  }
  console.log("count", count)
  return count
}
countElement([1, 2, 3])
countElement([1, 1, 2, 2])
//
const findDiff = (s, t) => {
  let sortS = [...s].sort((a, b) => {
    return a.localeCompare(b)
  })
  let sortT = [...t].sort((a, b) => {
    return a.localeCompare(b)
  })

  let length = sortS.length
  let dif = sortT[sortT.length - 1]
  for (let i = 0; i < length; i++) {
    if (sortS[i] !== sortT[i]) {
      console.log("detect")
      dif = sortT[i]
    }
  }
  console.log("dif", dif)
  return dif
}
findDiff("abcd", "ceabd")
findDiff("aaaa", "aabaa")

// 17
const reverseOnlyLetter = (s) => {
  let arrS = [...s]
  let length = s.length
  let temp = ""
  let left = 0
  let right = length - 1
  while (left < right) {
    if (!arrS[left].match(/[a-zA-Z]/)) {
      left++
    } else if (!arrS[right].match(/[a-zA-Z]/)) {
      right--
    } else {
      temp = arrS[left]
      arrS[left] = arrS[right]
      arrS[right] = temp
      left++
      right--
    }
  }
  let res = arrS.join("")
  console.log("s", arrS)
  console.log("res", res)
}
reverseOnlyLetter("a-b-==cd")

// a-b-==cd
//  d-c-==ba

// regex
// for a ->
/*
a-b-==cd
abcd
.map()
match(/[a-zA-Z]/) 

 // d-c-==ba
*/

// 18
// https://leetcode.com/problems/longest-substring-without-repeating-characters/
/*
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

*/
// const longestSubstring = (s) => {
//   let length = s.length
//   let left = 0
//   let right = 0
//   let maxLength = 2
//   while (maxLength <= length) {
//     for (let i = 0; i <= length - maxLength; i++) {
//       let substr = s.slice(i, i + maxLength)
//       console.log("substr", substr)
//     }

//     maxLength++
//   }
// }
const checkNoDuplicate = (s) => {
  let hashMap = {}
  let length = s.length
  let isDup = false
  for (let i = 0; i < length; i++) {
    if (hashMap[s[i]]) {
      return true
    } else {
      hashMap[s[i]] = 1
    }
  }
  return isDup
}
const longestSubstring = (s) => {
  let maxLength = 0
  let length = s.length

  let hashMap = new Map()
  let left = 0
  for (let i = 0; i < length; i++) {
    if (hashMap.has(s[i])) {
      console.log("heelo", i, s[i])
      left = hashMap.get(s[i]) + 1
    }

    maxLength = Math.max(maxLength, i - left + 1)
    console.log("i maxlength", i, left, maxLength)
    hashMap.set(s[i], i)
  }
  console.log("maxlength", maxLength)
  console.log("hashmap", hashMap)
  return maxLength
}
longestSubstring("abba")
//longestSubstring(" ")
/*
p -> w -> w => doen
w -> w -> done
w ->k -> e -> w
k e w

*/
//  1 2 3
//  4 5 6
//  7 8 9
// [0,1] -> [1,0]
// [0,2] -> [2,0]
// [1,2] -> [2,1]
/*
  1 4 7
  2 5 8
  3 6 9
*/
//  [0,0] -> [0,2]
//  [1,0] -> [1,2]
//  [2,0] -> [2,2]

//  7 4 1
//  8 5 2
//  9 6 3
// [[7,4,1],[8,5,2],[9,6,3]]

// 19
// https://leetcode.com/problems/rotate-image/
const rotateImage = (matrix) => {
  let temp = 0
  let length = matrix.length
  let halfLength = Math.ceil(length / 2)
  for (let i = 0; i < length; i++) {
    for (let j = i; j < length; j++) {
      if (i === j) continue

      temp = matrix[i][j]
      matrix[i][j] = matrix[j][i]
      matrix[j][i] = temp
    }
  }
  console.log("matrix1", matrix)
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < halfLength; j++) {
      let right = length - 1 - j
      temp = matrix[i][j]
      matrix[i][j] = matrix[i][right]
      matrix[i][right] = temp
    }
  }
  console.log("matrix", matrix)
  return matrix
}
let image = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]
let image2 = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
]
/*
[ 5, 2, 13, 15 ],
[ 1, 4, 3, 14 ],
[ 9, 8, 6, 7 ],
[ 11, 10, 12, 16 ]

[
  [15,13,2,5],
  [14,3,4,1],
  [12,6,8,9],
  [16,7,10,11]]
*/

rotateImage(image2)
