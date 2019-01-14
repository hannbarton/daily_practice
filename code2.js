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

const multNoDiv = (arr) => {
    let multArr = new Array(arr.length)
    let post = 1
    let pre = 1;

    // before
    for (let i = 0; i < arr.length; i++) {
        multArr[i] = pre
        pre *= arr[i]
        console.log(multArr)
    }
    // after
    for (let i = arr.length - 1; i >= 0; i--) {
        multArr[i] *= post
        post *= arr[i]
        console.log('post', multArr)
    }
    return multArr
}

console.log(multNoDiv([1, 2, 3, 4, 5]))
//[ 1, 1, 2, 6, 24 ] first pass
// [1 (* 120), 1 (* 60), 2 (* 20), 6 (* 4), 24]


const replace = (str) => {
    return str.slice(1).replace(/([a-z])([A-Z])/g, '$1 $2')
}

console.log(replace('#ThisIsTheSolution'))
