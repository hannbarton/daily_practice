//k messed-up sorted array
//Given an array of integers arr where each element is at most k places away from its sorted position, code an efficient function sortKMessedArray that sorts arr. For instance, for an input array of size 10 and k = 2, an element belonging to index 6 in the sorted array will be located at either index 4, 5, 6, 7 or 8 in the input array.

// Analyze the time and space complexities of your solution.


//input:  arr = [1, 4, 5, 2, 3, 7, 8, 6, 10, 9], k = 2
//
// output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// [time limit] 5000ms
// [input] array.integer arr
// 1 ≤ arr.length ≤ 100
// [input] integer k

// 1 ≤ k ≤ 20
// [output] array.integer

//[1, 0, 4, 5, 2, 3, 7, 8, 6, 10, 9]
function sortKMessedArray(arr, k) {
    for (let i = 0; i < arr.length; i++) {
      let idx = k;
      while (idx >= 1) {
          if (arr[i] > arr[i + idx]) {
              let temp = arr[i];
              arr[i] = arr[i + idx];
              arr[i + idx] = temp;
            }
            idx--;
        }
    }
    return arr;
}

// function sortKMessedArray(arr, k) {
//     for (let i = 1; i < arr.length; i++) {
//         for (let j = i - 1; j >= i - k; j--) {
//             if(arr[i] < arr[j]) {
//               let temp = arr[i];
//               arr[i] = arr[j];
//               arr[j] = temp;
//             }
//         }
//     }
//     return arr;
// }

//[1, 2, 4 , 5, 3, 7, 8, 6, 10, 9]

//  i = arr[2] => 5
//  j = arr[1] => 4
//  j--
//  j = arr[0] => 1
// console.log(sortKMessedArray([1, 0, 4, 5, 2, 3, 7, 8, 6, 10, 9], 2))
console.log(sortKMessedArray([1,0], 1))

// [1, 4, 2, 5, 3, 7, 8, 6, 10, 9]
// //     ^
// //
// [1, 5, 2, 4, 3, 7, 8, 6, 10, 9]
