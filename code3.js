// This problem was asked by Google.

// Given the root to a binary tree, implement serialize(root), which serializes the tree into a string, and deserialize(s), which deserializes the string back into the tree.

// For example, given the following Node class

// class Node:
//     def __init__(self, val, left=None, right=None):
//         self.val = val
//         self.left = left
//         self.right = right
// The following test should pass:

// node = Node('root', Node('left', Node('left.left')), Node('right'))
// assert deserialize(serialize(node)).left.left.val == 'left.left'

class Node {
	constructor(value) {
		super()
		this.val = value;
		this.left = null;
		this.right = null;
	}
}
function deserialize(string) {
// makes it into a tree
}

function serialize(tree) {
// makes it into a string

}
