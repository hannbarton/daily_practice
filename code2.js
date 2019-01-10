// This problem was asked by Uber.
// Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.
// For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].
// Follow-up: what if you can't use division?

const otherMult = (arr) => {
    // need a for loop to iterate over the array
    let multArr = []
    const total = arr.reduce((acc, curr) => acc * curr)

    for (let i = 0; i < arr.length; i++) {
        let curr = total/arr[i]
        multArr.push(curr)
    }
    return multArr;
}

console.log(otherMult([1, 2, 3, 4, 5]))

const multNoDiv = (arr) => {
    let multArr = []


    let post = 1

    // before
    let pre = 1;
    let preArr = []
    for (let i = 0; i < arr.length; i++) {
        arr[i] = pre
        pre *= arr[i]
    }

    // after
    for (let i = 0; i < arr.length; i++) {

    }

}
