//https://www.algoexpert.io/questions/Remove%20Kth%20Node%20From%20End
// Write a function that takes in the head of a Singly Linked List and an integer k (assume that the list has at least k nodes). The function should remove the kth node from the end of the list. Note that every node in the Singly Linked List has a "value" property storing its value as well as a "next" property pointing to the next node in the list or None (null) if it is the tail of the list.


//Sample input: 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9, 4
            //                                 ^   => => =>  ^
            //

// Sample output: 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 7 -> 8 -> 9 -> null
//                                         ^                    ^
//                                      previous            theNext



function removeKthNodeFromEnd(head, k) { //k = 4
  // Write your code here.
  const counter = 0;
  let previous = head;  //0
  let oneBefore = previous;
  let theNext = previous; //2

  // while counter < k: keep traversing to the this.right
    while(counter < k) {
        counter++
        // previous = previous.next
        theNext = theNext.next // theNext.next.next.next.next
        if (counter < k - 1) {
          oneBefore = oneBefore.next
        }
    }

    while (theNext !== null) {
        previous = previous.next;
        oneBefore = oneBefore.next;
        theNext = theNext.next;
    }

    // else {
    //     let temp = previous.next.next
    //     previous.next = temp;
    // }


}
