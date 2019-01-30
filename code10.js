// breadth first search
//You are given a Node that has a name and an array of optional children Nodes. When put together, Nodes form a tree-like structure. Implement the breadthFirstSearch method on the Node class, which takes is an empty array, traverses the tree using the Breadth-first Search approach, stores all of the Nodes' names in the input array and returns it.

//Sample input
//      A
//    / | \
//   B  C  D
//  / \   / \
// E   F G   H
//    / \ \
//   I   J K


class Node {
    constructor(name) {
      this.name = name;
      this.children = [];
    }

    addChild(name) {
      this.children.push(new Node(name));
      return this;
    }

    breadthFirstSearch(array) {  // []
        let queue = [this]

        while (queue.length > 0) {
            const currentNode = queue.shift() // currentNode = node K
            if (currentNode.children) {
			queue = queue.concat(currentNode.children) // queue = []
            // takes off the first element
						}
            array.push(currentNode.name) // array = [A, B, C, D, E, F, G, H, I, J, K]
            // push in children?
            // pushing that name into the array
            // making the queue, the children of the current node
        }
      return array;

    }
  }


