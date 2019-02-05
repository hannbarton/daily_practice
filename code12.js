// write three functions that take in an empty array, traverse the BST, add its nodes' values to the input array and return that array.

//       10
//      /  \
//     5    15
//    / \     \
//   2   5     22
//  / \
// 1   3
//      \
//       4

// Depth First Traversals:
// (a) Inorder(Left, Root, Right) : [1,2,5,5,10,15,22]
// (b) Preorder(Root, Left, Right) : [10,5,2,1,5,15,22]
// (c) Postorder(Left, Right, Root) : [1,2,5,5,22,15,10]


function inOrderTraverse(tree, array) {
    // Write your code here.
    if (tree.left !== null) {
        inOrderTraverse(tree.left, array)
    }
    if (tree.left === null) {
        array.push(tree.left.value)
        array.push(tree.value)
        inOrderTraverse(tree.right, array)
    }
    if (tree.right !== null) {
        inOrderTraverse(array.left, array)
    }

    return array;
}

function preOrderTraverse(tree, array) {
	// Write your code here.
}

function postOrderTraverse(tree, array) {
	// Write your code here.
}
