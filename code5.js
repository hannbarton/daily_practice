// hello
// Given a list of integers, write a function that returns the largest sum of non-adjacent numbers. Numbers can be 0 or negative.

// For example, [2, 4, 6, 2, 5] should return 13, since we pick 2, 6, and 5. [5, 1, 1, 5]should return 10, since we pick 5 and 5.
//[2, 4, 6, 100, 5] 104

// Follow-up: Can you do this in O(N) time and constant space?
// We will be sending the solution tomorrow, along with tomorrow's question. As always, feel free to shoot us an email if there's anything we can help with.

// let temp = [
//   {'0': 2, '2': 6, '4':5},

// ]

//[2, 4, 6, 100, 5] 104


// function largestNonAdj(arr) {
//   const stored = {};
//   for (let i = 0;i < arr.length; i++ ) {
//     if (i === 0) {
//       stored[arr[i]] = [];
//     }
//   }
// }

// const stored = [{106: [0, 2, 4]}, {10: [0, 3]}]

// [500, 1, 1, 1, 1, 1, 500] => 1002

//[5, 1, 1, 5, 100, 1, 1, 1, 100] => 100 + 5 + 100 + 1 + 1
//
// zeroStartMax = left
    // left: 5+1+100+1+100
    // right: 5+5
// oneStartMax = 1 + 5 = 6 +
// [5, 4, 1, 3, ]
//[1, 5, 1, 5, 100, 2, 4, 3, 100, 200] => 200 + 100 + 4 + 5



// [1, 5, 1, 52, 100, 52, 4, 3, 100, 152, 200, 152] =>  152 + 152 + 52 + 52 + 5 + 3

//oldmax =  5 + 52 + 52 + 100 + 200
// currmax = 5 + 100 + 4 + 152 + 152
// realMax = Math.Max(oldMax, currMax)

// https://www.dailycodingproblem.com/solution/9?token=8e01a6a11a0cb255818c1bedde84cdbb5a3022a11e73fd80d23f79a5ce9b726ffc3cfb96

// https://rohan-paul.github.io/javascript/2017/07/23/Maximum_Sum_of_Subarray_Javascript_Implementation/

// const largestRec = (arr, max) => {
//     if (arr.length < 2) {
//         return Math.max(arr[0], arr[1])
//     }
// //[1, 5, 1, 52, 100, 52, 4, 3, 100, 152, 200, 152]

// }
// [2, 4, 6, 100, 5, 20, 50]
// 2, 6, 5, 50 //63
// 2, 100, 20 //
// 2, 100, 50 //
// 2, 5 //7
// 4, 100 //104 current max
// 4, 5 //9
// 6, 5 //11


// int max = Integer.MIN_VALUE;

// for (int i = 0; i < a.length - 2; ++i) {
//   for (int j = i + 2; j < a.length; ++j) {
//     max = Math.max(max, a[i] + a[j]);
//   }
// }

//Solution in C#
// https://www.geeksforgeeks.org/maximum-sum-such-that-no-two-elements-are-adjacent/


// http://blog.gainlo.co/index.php/2016/12/02/uber-interview-question-maximum-sum-non-adjacent-elements/


//=====Solution?=======

function FindMaxSum(arr) {
  let incl = arr[0];  //5
  let excl = 0; //0
  let exclNew; //null => 5

  for (let i = 1; i < arr.length; i++) {

    exclNew = (incl > excl) ? incl : excl;
    // exclNew


    incl = excl + arr[i];
    excl = exclNew;
  }
  return ((incl > excl) ? incl : excl);

}


arr =    [5,    1,   2,   6]; //11
//              ^
//            excleNew
//       excl
//incl = excl + ^
console.log(FindMaxSum(arr))

// incl 1 total
// excl 5
// incl 7 total
// excl 5
// incl 11 total
// excl 7
// 11
//=====================================

function FindMaxSum(arr) {
  let incl = arr[0];
  let excl = 0;
  let temp;

  for (let i = 1; i < arr.length; i++) {
    /* current max excluding i */
    temp = (incl > excl) ? incl : excl;

    /* current max including i */
    incl = excl + arr[i]; // 0 + 1 = 1 : incl = 1; excl = 0
    excl = temp;  // 0
  }
  return ((incl > excl) ? incl : excl);
}

// [5,    1,   2,   6]

// incl 1
// excl 5
// incl 7
// excl 5
// incl 11
// excl 7
// 11
