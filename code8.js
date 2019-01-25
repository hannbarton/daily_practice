// if you can see this it's working

//Merge Sort
//Write a function that takes in an array of intergers and returns a sorted version of that array. Use the Merge Sort algorithm to sort the array.

//keep splitting it in half recursively
//var leftOfHalf, rightHalf
//when length = 2, merge

//Sample input: [8, 5, 2, 9, 5, 6, 3]
//Sample output: [2, 3, 5, 5, 6, 8, 9]

// left: [8, 5, 2]                    right: [ 9, 5, 6, 3]
// left:[8] right:[5, 2]          left:[9, 5]      right:[6, 3]
// left: [8]  right: (left:[5] right:[2])   left:[9] right:[5]  left:[6] right:[3]



//take an empty array, and start adding the smaller arrays in the right order

function mergeSort(array) {  //[8, 5, 2, 9]
  if (array.length === 1) {
    return array;
  }
  const half = Math.floor(array.length / 2); //2
  let left = array.slice(0, half);//[8, 5]
  let right = array.slice(half);// [2, 9]

  return merge( mergeSort(left), mergeSort(right));

}

// time = n * log(n)
// space = O (n * log(n))

function merge(left, right) { // [8] [5]
  let result = []; // [5].([8]).([])
  let indexLeft = 0;
  let indexRight = 0; //1
  while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] < right[indexRight]) {
        result.push(left[indexLeft])
        indexLeft++
    }
    else {
        result.push(right[indexRight])
        indexRight++
        }
    }
    return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight)) //[5, 8]
}

//left[0] right[0]

// left:  [ 8 ]
// right:  [ 5 ]
// count:  1
// result!!!!!!:  [ 5, 8 ]
// left:  [ 2 ]
// right:  [ 9 ]
// count:  2
// result!!!!!!:  [ 2, 9 ]
// left:  [ 5, 8 ]
// right:  [ 2, 9 ]
// count:  3
// result!!!!!!:  [ 2, 5, 8, 9 ]
// [ 2, 5, 8, 9 ]

//[10], [15], [3], [7], [5], [3], [9]


//====================================================================

// Split the array into halves and merge them recursively
function mergeSort (arr) {
  if (arr.length === 1) {
    // return once we hit an array with a single item
    return arr
  }

  const middle = Math.floor(arr.length / 2) // get the middle item of the array rounded down
  const left = arr.slice(0, middle) // items on the left side
  const right = arr.slice(middle) // items on the right side

  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

// compare the arrays item by item and return the concatenated result
function merge (left, right) {
  let result = []
  let indexLeft = 0
  let indexRight = 0

  while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] < right[indexRight]) {
      result.push(left[indexLeft])
      indexLeft++
    } else {
      result.push(right[indexRight])
      indexRight++
    }
  }

  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
}

const list = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3]
console.log(mergeSort(list)) // [ 1, 2, 2, 3, 3, 3, 5, 6, 7, 8 ]
