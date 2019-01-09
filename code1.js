// This problem was recently asked by Google.
// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
// Bonus: Can you do this in one pass?


//[10, 15, 3, 7], 17
// 17 - 10 = 7

// [3, 7, 10, 15]
// ^           ^

const sum = (arr, target) => {
    arr.sort()

    let minPointer = 0;
    let maxPointer = arr.length - 1

    while (minPointer < maxPointer) {
        if (arr[minPointer] + arr[maxPointer] === target) {
            return true;
        }
        if (arr[minPointer] + arr[maxPointer] > target) {
            maxPointer--
        }
        if (arr[minPointer] + arr[maxPointer] < target) {
            minPointer++
        }
    }
    return false;
}


console.log(sum([9, 15, 3, 7], 17))
