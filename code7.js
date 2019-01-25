// This problem is from Algoexpert:
// Bubble Sort - write a function that takes an array of integers and returns a sorted version of that array. Use the Bubble Sort algorithm to sort the array.
// Sample input: [8,5,2,9,5,6,3]
// output: [2,3,5,5,6,8,9]

// [8,5,2,9,5,6,3]
// [8]
// [5, 8]
// []


const bubbleSort = (arr) => {
    let temp;
    let swapped;

    for (let i = 0; i < arr.length; i++) {
        swapped = false;
        for (let j = 0; j < arr.length-i-1; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }
        if (swapped === false) {
            break;
        }
    }
    return arr;
}

//http://bigocheatsheet.com/

