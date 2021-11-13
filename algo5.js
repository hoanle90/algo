//1
//https://leetcode.com/problems/valid-sudoku/
const isValidSudoku = (board) => {
  // console.log("board", board)
  let length = board.length
  // valid ngang
  let hashMapHoz = {}
  let hashMapVer = {}
  let hashMapSquare = {}
  let valid = true
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      let item = board[i][j]
      if (item.match(/[0-9]/)) {
        if (hashMapHoz[item]) {
          isValid = false
          return isValid
        } else {
          hashMapHoz[item] = 1
        }
        console.log("hashMapHoz", hashMapHoz)
      }
    }
    hashMapHoz = {}
  }

  // for (let i = 0; i < length; i++) {
  //   for (let j = 0; j < length; j++) {
  //     let item = board[j]
  //     if (item.match(/[0-9]/)) {
  //       if (hashMapHoz[item]) {
  //         isValid = false
  //         return isValid
  //       } else {
  //         hashMapHoz[item] = 1
  //       }
  //     }
  //   }
  //   hashMapHoz = {}
  // }
}
let board1 = [
  ["8", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
]
let board2 = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
]
isValidSudoku(board2)

// 2
// [-6, 1, 4, 2, -4, 3, 0]
// -6 + 1 + 4 = -1
// -4 + 3 + 0 = -1
// -6, 1, 4, 2
//
const findIndex = (arr) => {
  let length = arr.length
  let sum = 0
  let rightArr = []
  let matchIndex = 0
  let rightSum = 0
  for (let i = length - 1; i > 0; i--) {
    rightSum = rightSum + arr[i]
    rightArr.push(rightSum)
  }
  for (let i = 0; i < length - 2; i++) {
    sum = sum + arr[i]
    let rightIndex = length - i
    if (i !== length - 1) {
      let rightVal = rightArr[rightIndex - 3]
      if (sum === rightVal) {
        matchIndex = i + 1
        return matchIndex
      }
    }
  }
  return matchIndex
}
findIndex([-6, 1, 4, 2, -4, 3, 0])

// 3
// https://leetcode.com/problems/candy/
// Input: ratings = [1,0,2]
/*
Output: 5
Explanation: You can allocate to the first, second and third child with 2, 1, 2 candies respectively.
Example 2:

Input: ratings = [1,2,2]
Output: 4
Explanation: You can allocate to the first, second and third child with 1, 2, 1 candies respectively.
The third child gets 1 candy because it satisfies the above two conditions.
021
[1,0,2]
2 1 2
*/
const candy = (ratings) => {
  let length = ratings.length
  let count = 0
  let arr = []
  let leftArr = []
  let rightArr = [1]
  for (let i = length - 1; i > 0; i--) {
    let val = 1
    let isGreater = ratings[i] < ratings[i - 1]
    if (isGreater) {
      val = rightArr[length - i - 1] + 1
    }
    rightArr.push(val)
  }
  console.log("right", rightArr)
  for (let i = 0; i < length; i++) {
    let val = 1
    let isGreater = ratings[i] > ratings[i - 1]
    if (isGreater) {
      val = leftArr[i - 1] + 1
    }

    leftArr.push(val)
    console.log("rightArr[length - i - 1]", rightArr[length - i - 1])
    let maxVal = Math.max(leftArr[i], rightArr[length - i - 1])
    arr.push(maxVal)
    count = count + maxVal
  }
  console.log("========")
  //console.log("rightArr", rightArr.reverse())
  console.log("leftArr", leftArr)
  console.log("maxVal", arr)
  console.log("count", count)
  console.log("")
  return count
}
// candy([1, 0, 2]) // 2, 1, 2
// candy([1, 2, 2]) // 4
// candy([1, 3, 2, 2, 1])
candy([1, 2, 87, 87, 87, 2, 1])
//arr [
//  1, 2, 3, 1,
//  2, 2, 1
//]
// 4
// https://leetcode.com/problems/keys-and-rooms/
/*
Example 1:

Input: rooms = [[1],[2],[3],[]]
Output: true
Explanation: 
We visit room 0 and pick up key 1.
We then visit room 1 and pick up key 2.
We then visit room 2 and pick up key 3.
We then visit room 3.
Since we were able to visit every room, we return true.
Example 2:

Input: rooms = [[1,3],[3,0,1],[2],[0]]
Output: false
Explanation: We can not enter room number 2 since the only key that unlocks it is in that room.
*/

const canVisitAllRooms = (rooms) => {
  let length = rooms.length
  let keyHash = { 0: 1 }

  for (let i = 0; i < length; i++) {
    if (i !== 0) {
      let isExist = keyHash[i] !== undefined
      if (!isExist) {
        console.log("false")
        return false
      }
    }
    addKeyHash(keyHash, rooms[i])
  }
  console.log("true")
  return true
}
const addKeyHash = (keyHash, room) => {
  let length = room.length
  for (let i = 0; i < length; i++) {
    let item = room[i]
    keyHash[item] = 1
  }
}

let rooms1 = [[1], [2], [3], []]
let rooms2 = [[1, 3], [3, 0, 1], [2], [0]]
let rooms3 = [[2], [], [1]]
//canVisitAllRooms(rooms3)

// // 5
// const solution = (A) => {
//   // write your code in JavaScript (Node.js 8.9.4)
//   let min = Number.MAX_VALUE
//   let sortArr = A.sort((a, b) => a - b)
//   sortArr = sortArr.filter((item) => item > 0)
//   console.log("sortArr", sortArr)
//   let length = sortArr.length
//   if (length === 0) {
//     return 1
//   }

//   for (let i = 0; i < length; i++) {
//     console.log("min", min)
//     if (min < sortArr[i]) {
//       console.log("min,", min, sortArr[i])
//       console.log("minaaa", min)
//       return min
//     }
//     min = sortArr[i] + 1
//   }
//   return min
//   console.log("srotA", sortArr)
// }
// solution([1, 4, 2, 4, 5])
//

/*
1 1 1 1
1+1+1+1=4

1+1+1−1=2

1+1−1+1=2

1−1+1+1=2

1−1+1−1=0

(n +1)*A + 1*B + 3*C + 1*D
+ 1 + 3 +1

1 1 1 1 1
1+1+1+1 +1 =4

1+1+1−1 +1=2

1+1−1+1 +1=2

1−1+1+1 +1=2

1−1+1−1 +1=0

1+1+1+1 -1
1+1−1+1 -1
1−1+1+1 -1


- 50 
- fe 20
- 

- văn hoá 
- đồng nghiệp 
- cơ hội phát triển
- bonus
- level 3.1 
- level 3.2 
- 4.1 4.2
- 

*/
