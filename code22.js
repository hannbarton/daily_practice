// selection sort

// input: [8,5,2,9,6,3]
//           ^ j
//  arr[min] arr[j]
// [2,3,5,6,8,9]
// [2,3]
// let temp = arr[a]
// arr[a] = arr[b]
// arr[b] = temp

// Given input: [8,5,2,9,6,3]
function selectionSort(array) {

  for (let i = 0; i < array.length; i++) {
      let min = i //min = 0

    for (let j = i + 1; j < array.length; j++) {
        // j = 5
      if(array[min] > array[j]) {
          //array[2] = 2 > array[5] = 3
        min = j
          // min = 2

      }
    }

    let temp = array[min] //temp = array[2] = 2
    array[min] = array[i] //array[2] = array[0] = 8
    array[i] = temp //array[0] = temp = 2
                    //[2,5,8,9,6,3]
  }
  return array;
}

console.log(selectionSort([8,5,2,9,6,3]))
