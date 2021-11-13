function createIdGenerator(x) {
  // your code here
  let y = x
  return function () {
    //console.log(x)
    console.log(y++)
    // x++
  }
}

const getNextProductId = createIdGenerator(5)
getNextProductId() // 5
getNextProductId() // 6
getNextProductId() // 7

const getNextCommentId = createIdGenerator(10)
getNextCommentId() // 10
getNextCommentId() // 11
getNextCommentId() // 12
