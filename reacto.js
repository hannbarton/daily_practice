//if you can see this its working
// Feel free to add new properties and methods to the class.

//https://airtable.com/shrbq8RMXpfBWW2LA


class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }

    setHead(node) {
      let oldHead = this.head;
      if (oldHead) {
        oldHead.prev = node;
        node.next = oldHead;
      }
      this.head = node;
      // 4 -> 1 -> 2 -> 3
      // 2 -> 4 -> 1 -> 3
      this.remove(node)
    }

    //this {val, prev, next}, next {val, prev, next}, next next {val, prev, next}

    setTail(node) {
      // if there is no tail; set the tail
      if (this.tail === null) {
          this.tail = node;
      }
      else {
          // if there is a tail, make the connections
          let oldTail = this.tail;

          oldTail.next = node;
          node.prev = oldTail;
          this.tail = node;
      }
    }

    insertBefore(node, nodeToInsert) {
      // Write your code here.
    }

    insertAfter(node, nodeToInsert) {
      // Write your code here.
    }

    insertAtPosition(position, nodeToInsert) {
      // Write your code here.
    }

    removeNodesWithValue(value) {
      // Write your code here.
       // 1 -> 1 -> 2 -> 3 
       if (this.value === value) {
        let next = this.next;
        let prev = this.prev;
		    this.prev.next = next;
		    this.next.prev = prev;
      }
      if (this.next) {
        this.next.remove(node);
      }
    }

    remove(node) {
      // Write your code here.
      
      // 1 -> 2 -> 3 -> 4   remove 2
      if (this.value === node.value && this.next === node.next && this.prev === node.prev) {
        let next = this.next;
        let prev = this.prev;
		    this.prev.next = next;
		    this.next.prev = prev;
      }
      else if (this.next) {
        this.next.remove(node);
      }
      
    }

    containsNodeWithValue(value) {
      // Write your code here.
    }
  }
