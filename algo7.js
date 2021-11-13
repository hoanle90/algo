// // string.includes

// // abcd
// // ab
// // includes('abcd','ab') => true
// // includes('abcd','aeb') => false
// // abcd
// // ab
// // ab bc cd
// // aeb
// // abc bcd

// const includes = (string, k) => {
//   let length = string.length
//   let n = k.length
//   let res = false
//   for (let i = 0; i <= length - n; i++) {
//     let substr = string.slice(i, n + i)
//     if (substr === k) {
//       res = true
//       break
//     }
//   }
//   console.log("res", res)
//   return res
// }
// includes("abcd", "ab") // true
// includes("abcd", "aeb") // false
// includes("abcd", "d") // true
// includes("abcd", "cd") // true

//  [1,2,3,2,3,4]
// 1 1time
// 2 2time
// 3 3time
// // 4 1time

// const arrExit = (arr) => {
//   let hashMap = {}
//   let length = arr.length
//   for (let i = 0; i < length; i++) {
//     if (hashMap[arr[i]]) {
//       hashMap[arr[i]]++
//     } else {
//       hashMap[arr[i]] = 1
//     }
//   }
//   console.log("hashmap", hashMap)
//   return hashMap
// }
// arrExit([1, 2, 3, 2, 3, 4])

// const arrReduce = (arr) => {
//     let hashMap = {}
//     let length = arr.length
//     for (let i = 0; i < length; i++) {
//       if (hashMap[arr[i]]) {
//         hashMap[arr[i]]++
//       } else {
//         hashMap[arr[i]] = 1
//       }
//     }
//     console.log("hashmap", hashMap)
//     return hashMap
//   }
// }
// let arr = [1, 2, 3, 2, 3, 4]
// let hashMap = {}
// const checkHashmap = (num) => {
//   if (hashMap[num]) {
//     hashMap[num]++
//   } else {
//     hashMap[num] = 1
//   }
// }
// arr.reduce((a, b) => {
//   if (a) {
//     checkHashmap(a)
//   }
//   checkHashmap(b)
// })
// console.log("hashMap", hashMap)
//js event loop
// callstack
// setTimeout webAPI 0
// queue -> marco /micro
// callstack -> empty
//
//cosnt [CountQueuingStrategy, se]
//[c,a,b]
// useContext
// provider
// use[]
// useRef
// useEffect(() =>{}, []) => componentDidMount
//
//
let a = [
  [9, 9, 9, 9, 9],
  [9, 2, 2, 2, 9],
  [9, 2, 5, 2, 9],
  [9, 2, 2, 2, 9],
  [9, 9, 9, 9, 9],
]
const water = (arr) => {
  let min = Number.MAX_VALUE
  let count = 0
  for (let i = 0; i < arr.length; i++) {
    if (i === 0 || i === arr.length - 1) {
      for (let j = 0; j < arr[i].length; j++) {
        min = Math.min(min, arr[i][j])
      }
    } else {
      let length = arr[i].length - 1
      min = Math.min(min, arr[i][0])
      min = Math.min(min, arr[i][length])
    }
  }

  for (i = 1; i < arr.length - 1; i++) {
    for (j = 1; j < arr[i].length - 1; j++) {
      let item = min - arr[i][j]
      if (item > 0) {
        count = count + item
      }
    }
  }
  console.log("count", count)
  return count
}
water(a)
//console.log(a)
