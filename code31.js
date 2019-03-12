// write a function that takes a non-empty array of integers and returns the max sum that can be obtained by summing
// up all of the numbers in a non-empty subarray of the input array. A subarray must only contain adjacent numbers

// Sample input: [3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4]
//                ^  *                                          *  ^

// max sum  11
// Sample output: 19 ([1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1])


//loop through array
//look at each value

function kadane(arr) {
    let maxEndingHere = arr[0];
    let maxSoFar = arr[0];

    for (let i = 1; i < arr.length; i++) {
        maxEndingHere = Math.max(maxEndingHere + arr[i], arr[i]);
        maxSoFar = Math.max(maxEndingHere, maxSoFar);
    }
    return maxSoFar;
}


// you have 'n' number of steps (staircase)
// you can go 1 step at a time or skip a step (2 steps)
// what are the combinations of steps you can have/make

// 111
// 21
// 12

// 1111
// 211
// 121
// 112
// 22

// [1, 2, 3, 5, 8...]

// if you can skip x number of steps, for n of steps, what is the number of combinations

// []
