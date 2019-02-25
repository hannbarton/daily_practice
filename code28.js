// return max sum of non-adjacent numbers

// input: [75,105,120,75,90,135]
//
//        [1, 100, 1000, 100, 1, 100, 1, 1]
//              s        x             x      x

// which start do we start at arr[0] or arr[1]
// arr[0] is the start
// at index 2: which is bigger i or i + 1
// take i + 1

// include = [23, 54, 68, 105]
// exclude = [54]

// [23, 68, 105] add

//

// is 75 + 105 greater than or less than 120
// is 75 + 120 greater than or less than 105
// 330(75,120,135)

// can you come up with a formula that relates max sum at index i to the max sums at indices i - 1 and i - 2

function maxSubsetSumNoAdjacent(array) {
    if (!array.length) return 0
    if (array.length === 1) return array[0]
    const max = array.slice()

    max[1] = Math.max(array[0], array[1])
    for (let i = 2; i < array.length; i++) {
        max[i] = Math.max(max[i - 1], max[i - 2] + array[i])
        console.log(max)
    }
    return max[max.length - 1]
}

function maxSubsetSumNoAdjacent2(array, i) {
  if (i === 0) {
    return array[0]
  }
  if (i === 1) {
    return Math.max(array[0], array[1])
  }

  return Math.max(maxSubsetSumNoAdjacent2(array, i -1), array[i] + maxSubsetSumNoAdjacent2(array, i -2))


}

console.log(maxSubsetSumNoAdjacent([1,100,1000,1, 1, 1, 100], 6))
