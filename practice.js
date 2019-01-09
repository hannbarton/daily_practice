//can you see this

function bubbleSort(array) {
    // Write your code here.
    // swap in place;
    // run through the array multiple times;

    for (let i = 0; i < array.length; i++) {
        let pointer = 0;
        while (pointer < array.length) {
            // [8,5,2,9,5,6,3]
            let nextNumber = pointer + 1;
                if (array[pointer] > array[nextNumber]){
                    // [8,5,2,9,5,6,3]
                    //  ^ ^
                    let num = array[pointer]
                array[pointer] = array[nextNumber]
                array[nextNumber] = num
                pointer++;
                //[5,8,2,9,5,6,3]
                // [5,2,8,9,5,6,3]
                }
            pointer = nextNumber;
            nextNumber = pointer + 1;
            }
        }
    return array;
  }



      //[8,5,2,9,5,6,3]
      // [ 5, 2, 8, 5, 6, 3, 9 ]

      // [5, ]
      // 8 vs 5
      // swap 5 and 8
      // 8 vs 9;
      // 9 vs 5;
      // swap 5 and 9;
      // until 9 is in place at the very end of the array;

