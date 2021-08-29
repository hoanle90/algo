// algo
// 1
// dynamic progamming
//  1, 1, 2, 3, 5, 8, 13
// fibo
let k = 0
const fibo = (n) => {
  console.log("k", k++)
  if (n < 0) return 0
  if (n <= 1) return n
  return fibo(n - 2) + fibo(n - 1)
}
//O(2^n)
// let fiboVal = fibo(20)
// console.log('fibo', fiboVal)
// 5
//5
//44
//3333
//22222222

const fiboMemo = (n, memo) => {
  console.log("k", k++)
  if (n < 0) return 0
  if (n <= 1) return n
  if (memo[n]) return memo[n]
  memo[n] = fiboMemo(n - 2, memo) + fiboMemo(n - 1, memo)
  return memo[n]
}
// let fiboVal = fiboMemo(20,{})
// console.log('fibo', fiboVal)

// 2
// can sum
// ([2,3,4,5],6) => true
// ([2,5],6) => true
// ([2,5],11) => false
// ([2,4,6,8],11) => false

// [2,5] 4
// [2,5] 2
// [2,5] 0
const canSum = (arr, val) => {
  console.log(arr, val)
  if (val < 0) return false
  if (val === 0) return true

  for (let i = 0; i < arr.length - 1; i++) {
    let remain = val - arr[i]
    let res = canSum(arr, remain)
    if (res === true) {
      console.log("res", res)
      return true
    }
  }
  return false
}
// console.log(canSum([2,5],11))

// 3
// cho 1 mãng và 1 số k
// tìm xem có 1 bộ (i,j) nào thoả điều kiện sau hay không:
//1 3 5 8
// 1 trung
// a[i] === a[j]
// và abs(i-j) <= k
// O(n)
const example3 = () => {
  let a = [1, 3, 5, 2, 3, 5, 6, 1]
  let k = 5
  let res = {}
  let result = []

  for (let i = 0; i < a.length; i++) {
    if (res[a[i]] !== undefined) {
      // co ton tai
      //a[i] === a[j]
      //abs(i-j) <= k
      if (Math.abs(i - res[a[i]]) <= k) {
        result.push({ i: res[a[i]], j: i })
      }
    } else {
      // chua ton tai
      res[a[i]] = i
    }
  }
  // console.log('input',a)
  // console.log('res',res)
  // console.log('result',result)
}
// 4
// let num = [1, 2, 3, 4];
// res = [24, 12, 8, 6]
//
const example4 = () => {
  let num = [1, 2, 3, 4]
  // // res = [24, 12, 8, 6]
  //  4, 3, 2, 1
  // left = [1, 1*2, 1*2*3, 1*2*3*4]
  // right = [4, 4*3, 4*3*2, 4*3*2*1]
  // res = [2*3*4, 1 * 3*4, 1*2 * 4, 1*2*3]
  let numReverse = [...num].reverse()
  let left = []
  let right = []
  let res = []
  left[0] = num[0]
  right[0] = numReverse[0]
  let length = num.length
  for (let i = 1; i < length; i++) {
    left[i] = left[i - 1] * num[i]
    right[i] = right[i - 1] * numReverse[i]
  }
  for (let i = 1; i < length - 1; i++) {
    let leftVal = left[i - 1]
    let rightVal = right[length - 2 - i]
    res[i] = leftVal * rightVal
  }
  res[0] = right[length - 2]
  res[length - 1] = left[length - 2]
  // console.log('numReverse',numReverse)
  // console.log('left',left)
  // console.log('right',right)
  // console.log('res',res)
}
// 5
//Input: str = “25525511135”
//A valid IP address must be in the form of A.B.C.D, where A, B, C and D are numbers from 0 – 255.
//The numbers cannot be 0 prefixed unless they are 0
// Output:
// 255.255.11.135
// 255.255.111.35

//“25525211135”
// 255.252.11.135
// 255.25.211.135

//2552
//2  25 255 2552
// 6308
// 6 63 630
// A B C D 0-255. 0-255. 0-255. 0-255
// A -> 2
// B -> 55
// C -> 2
// D -> 5511135

// A -> 255a
// B -> 255
// C -> 111
// D -> 35
let on = 1
const isValid = (num) => {
  if (num === undefined) return false
  return num >= 0 && num <= 255
}
const slipIp = (str) => {
  let A = []
  let B = []
  let C = []
  let D = []
  let res = []
  let length = str.length
  for (let i = 1; i <= 3; i++) {
    A = str.slice(0, i)
    for (let j = 1; j <= 3; j++) {
      B = str.slice(i, i + j)
      for (let m = 1; m <= 3; m++) {
        C = str.slice(i + j, i + j + m)
        D = str.slice(i + j + m, length)
        console.log("on", on++)
        if (isValid(A) && isValid(B) && isValid(C) && isValid(D)) {
          res.push(`${A}.${B}.${C}.${D}`)
          //console.log(`${A}.${B}.${C}.${D}`)
        }
      }
    }
    //console.log('A',isValid(A))
  }
  return res
}
// 1 2 3 4 5 6
// slice( 2,3)
const result = slipIp("25525211135")
console.log("result", result)
