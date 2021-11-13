// var sortedSquares = function (nums) {
//   let length = nums.length
//   let res = new Array(length)
//   let left = 0
//   let right = length - 1
//   let i = length - 1
//   while (left <= right && i >= 0) {
//     if (Math.abs(nums[left]) > nums[right]) {
//       res[i] = nums[left] * nums[left]
//       left++
//     } else {
//       res[i] = nums[right] * nums[right]
//       right--
//     }
//     i--
//   }
//   console.log("res", res)
//   return res
// }
// sortedSquares([-4, -1, 0, 3, 10])
const findIndex = (arr, nums) => {
  let length = arr.length
  let hashMap = {}
  for (let i = 0; i < length; i++) {
    if (hashMap[arr[i]] !== undefined) {
      console.log("I:", hashMap[arr[i]], i)
    } else {
      let num = nums - arr[i]
      hashMap[num] = i
    }
  }
  console.log("hashMap", hashMap)
}
findIndex([1, 2, 3, 4, 5, 6, 7, 8, 9], 13)

//
// 1) string.includes
// includes('aaabbzz','bz') => true
// includes('aaabbzz','by') => false

// 2
// [1,2,3,5,6,3,3,2,2,3]
// for
// reduce

// 3
/*
0000000
1111101
0000001
0011111
0000000
*/

//0-> di dc
//1-> di ko dc
// len xuong trai phai
// start(0,0) -> end(5,5)
// -> duong di
// duyet mang 2 chieu
// bfs
// cors
// cofr
//

//1
//https://leetcode.com/problems/reorganize-string/
/*
Example 1:

Input: s = "aab"
Output: "aba"
Example 2:

Input: s = "aaab"
Output: ""
 aaaaaaaaaa befgh c
 ab ab ab ab ab ab ab ab ac a
*/

const reorganizeString = (s) => {
  console.log("========reorganizeString======")
  console.log("  ")
  let hashMap = {}
  let length = s.length
  let res = ""
  for (let i = 0; i < length; i++) {
    let isExit = hashMap[s[i]]
    isExit ? hashMap[s[i]]++ : (hashMap[s[i]] = 1)
  }
  let hashMapSort = Object.keys(hashMap).sort((a, b) => {
    return hashMap[b] - hashMap[a]
  })
  let sortStr = ""
  hashMapSort.forEach((item) => {
    let subStr = item.repeat(hashMap[item])
    sortStr = sortStr + subStr
  })
  sortStr = [...sortStr]
  console.log("sort", sortStr.join(""))
  let tempStrMap = []
  let totalSubStr = hashMap[hashMapSort[0]]
  let subStrLength = length / hashMap[hashMapSort[0]]
  if (totalSubStr * 2 - 1 < length) {
    console.log("totalSubStr", totalSubStr, length)
    console.log("subStrLength", subStrLength)
    return ""
  }
  for (let i = 0; i < totalSubStr; i++) {
    tempStrMap[i] = ""
  }

  for (let i = 0; i < subStrLength; i++) {
    for (let j = 0; j < totalSubStr; j++) {
      let letter = sortStr.shift()
      if (letter !== undefined) {
        tempStrMap[j] = tempStrMap[j] + letter
      }
    }
  }
  for (let i = 0; i < totalSubStr; i++) {
    res = res + tempStrMap[i]
  }
  console.log("tempStrMap", tempStrMap)
  console.log("res", res)
  //;("ba")
  console.log(hashMap, length)
  console.log(hashMapSort)
}
/*
  'bghfa'
  'bghec'
  'bghe'
  'bhfa'
  bghfabghecbghebhfa
  17/4 = 4

  b000b000b000b0000
  b000b000b000b0000
  { a: 2, b: 4, c: 1, e: 2, f: 2, g: 3, h: 3 }
  'b:4', 'g', 'h','a', 'e', 'f','c'
  bg00bg00bg00bh00
  */

// let strSamp1 = "aaab"
let strSamp1 = "bghfabghecbghebhfa"
let strSamp2 = "b000b000b000b0000"
// reorganizeString("aaaabbc")
reorganizeString(strSamp1)
//reorganizeString(strSamp2)
