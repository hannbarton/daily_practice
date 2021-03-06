// This problem was asked by Stripe.
// Given an array of integers, find the first missing positive integer in linear time and constant space. In other words, find the lowest positive integer that does not exist in the array. The array can contain duplicates and negative numbers as well.

// For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.

// You can modify the input array in-place.


const missing = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let v = arr[i]
        while (arr[i] < arr.length + 1 && arr[i] > 0 && arr[i] !== i) {
            [arr[i], arr[v - 1]] = [arr[v - 1], arr[i]]
            arr[v - 1] = v

            if (arr[i] == arr[v - 1])
                break
            console.log(arr)
        }
    }
    for (let j= 1; j < arr.length; j++) {
        if (arr[j] !== j) {
            return j
        }
    }
    return 'hello world'
}

// [3, 4, -1, 1]
// [3, 4, -1, 1]
//  0  1   2  3

// [1, 4, -1, 3]
//  0  1   2  3
// [4, 1, -1, 3]
//         ^

console.log('first', missing([1, 2, 0]))
console.log('second', missing([3, 4, -1, 1]))
