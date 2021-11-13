let arr = [
  [0, 0, 0, 1],
  [1, 1, 0, 0],
  [1, 0, 0, 1],
  [1, 0, 0, 0],
]
//  bfs
// dfs
//   [1, 1, 1, 0],
//   [0, 0, 1, 1],
//   [0, 0, 0, 1],
//   [1, 0, 0, 0],
// dp
// left right up down
// right down

// let arr2 = [
//   [0, 0, 0, 0],
//   [1, 1, 1, 0],
//   [1, 0, 0, 0],
//   [0, 0, 1, 1],
// ]
// const findPath = (arr) => {
//     let length= arr.length
//     let arrRes =[]
//     let arrItem =[]
//     for(let i =0; i<length;i++){
//         arrItem[i] = 0
//     }
//     // for( i =0; i<length;i++){
//     //     arrRes[i]=arrItem
//     // }
//     console.log('arrRes',arrItem)
//
// }
// cache
//
// API -> option
// image -> auto brower
// localstore -> token,
// redux / contextAPI
// rational
// 80
//
// [1,2,3,4,5] n=2
// [3,4,5,1,2]

// [5,4,3,2,1]
// [3,4,5,2,1]
// [3,4,5,1,2]
// hashMap => {} => duplicate
// trai qua, phai qua
// queue/ stack ( dfs,bfs
// binary search while / 2

//

const merge = (intervals) => {
  let stack = []

  let length = intervals.length
  let sortArr = intervals.sort((a, b) => a[0] - b[0])
  let res = [sortArr[0]]
  console.log("aarost", sortArr)
  for (let i = 1; i < length; i++) {
    let lengthRes = res.length - 1
    console.log(sortArr[i][0])
    if (sortArr[i][0] <= res[lengthRes][1]) {
      let firstItem = res[lengthRes][0]
      let secondItem = Math.max(sortArr[i][1], res[lengthRes][1])
      let item = [firstItem, secondItem]
      if (sortArr[i][0] > 3) {
        debugger
      }
      res[lengthRes] = item
    } else {
      res.push(sortArr[i])
    }
  }
  console.log("merge", res)
  return res
}
// merge([
//   [1, 4],
//   [4, 5],
// ])
// merge([
//   [1, 4],
//   [0, 2],
//   [3, 5],
// ])
merge([
  [1, 3],
  [0, 2],
  [2, 3],
  [4, 6],
  [4, 5],
  [5, 5],
  [0, 2],
  [3, 3],
])
