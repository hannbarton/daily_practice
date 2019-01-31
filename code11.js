// You are given a Node that has a name and an array of optional children Nodes. When put together, Nodes form a tree-like structure. Implement the depthFirstSearch method on the Node class, which takes is an empty array, traverses the tree using the depth-first Search approach, stores all of the Nodes' names in the input array and returns it.

// Sample input:
//         A
//       / | \
//     B  C  D
//    / \     / \
//  E    F   G   H
//       / \  \
//     I    J  K

//Output [A, B, E, F, I, J, C, D, G, K, H]



class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  //https://github.com/hannbarton/daily_practice

  // everyone try audio call

  depthFirstSearch(array) {
    //push in parent element
    //if children:
    //call depthFirstSearch(array)

    array.push(this.name) // push in [A]

    // we want to go through this.children = [B, C, D]
    //
    this.children.forEach(child => {
        child.depthFirstSearch(array)
    })

    return array;
  }

}

//let node = new Node('Apple');
//node.addChild('Bananan')
//node.addChild('Turtle')
//node.children[0] = {name:'Banana', children: []}
//node.children[0].addChild('Monkey')

//{name: 'Apple', children: [{name:'Banana', children: [{name: 'Monkey' childre: []}]}, {name:'Turtle', children: []}]}

//node.depthFirstSearch([]); //['Apple', 'Bananan', 'Turtle']


