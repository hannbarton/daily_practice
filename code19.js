//https://www.algoexpert.io/questions/Binary%20Search
// write a function that takes in a sorted array and target number
// and sees if the target number is located within the array

// [0, 1, 2, 3,      4, 5, 6, 7]  1
// [0, 1, 2, 3     , 4, 5, 6, 7]
//   left               right
// [0,1,     2,3]
//  left     right


//[0, 1, 2, 3, 4]         0
function binarySearch(array, target) {
    // Write your code here.

    return helper(array, target, 0, array.length -1);
}

//[1, 5, 23, 111]       35       2             3
function helper(array, target, leftpointer, rightpointer) {
    let middle = Math.floor((leftpointer + rightpointer)/2)  // 2

        if (leftpointer > rightpointer) {
            return -1
        }
        if (array[middle] === target) {
            return middle
        }
        if (array[middle] > target) {
            return helper(array, target, leftpointer, middle - 1)
            //
        }
        else if (array[middle] < target) {
          //[1, 5, 23, 111] 35      3         3
            return helper(array, target, middle + 1, rightpointer)
        }

}


  // function binarySearch(array, target) {
  //   // Write your code here.
  //   let i = Math.floor(array.length / 2);
  //   let left = array.slice(0, i + 1);
  //   let right = array.slice(i + 1);
  //   while (left.length >= 1 && right.length >= 1) {
  //     if () {
  //         return i
  //     }
  //     if (array[i] > target) {

  //     }
  //     if (array[i] < target) {

  //     }
  //   }
  //   return -1;
  // }
