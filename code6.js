// if you can see this it's working

// hello micaela

// A unival tree (which stands for "universal value") is a tree where all nodes under it have the same value.

// Given the root to a binary tree, count the number of unival subtrees.

// For example, the following tree has 5 unival subtrees:

//    0
//   / \
//  1 <  0
//     / \
//    1 <  0 <
//   / \
//  1 <  1 <

// To start off, we should go through some examples.

//   a
//  / \
// a < a
//     /\
//    a < a
//        \
//         A <
// This tree has 3 unival subtrees: the two 'a' leaves, and the one 'A' leaf. The 'A' leaf causes all its parents to not be counted as a unival tree.

//   a
//  / \
// c<  b <
//     /\
//    b< b <
//         \
//          b <

// This tree has 5 unival subtrees: the leaf at 'c', and every 'b'.

// We can start off by first writing a function that checks whether a tree is unival or not. Then, perhaps we could use this to count up all the nodes in the tree.

class Unival {
    constructor(value) {
        super()
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insert(value) {
      let node = new Unival(value);
    }


}

// NODE.counter()

Unival.prototype.counter() {
   if (this.left === null && this.right === null) {
     count++;
   }
   //this.left.left
}

function counter(tree, currentValue = null, count= 0) {
  if (tree.left === null && tree.right === null) {
    count++;
    currentValue = tree.value
    return 1 + counter(tree, currentValue, count)
  }
  if (tree.left) {

  }
  if (tree.right) {

  }

}

function helper(parentNode, childNode) {
    if (parentNode.left === null && parentNode.right === null) {
        return true
    }
    if (parentNode.left && parentNode.left.value !== parentNode.value) {
        return false
    }
    if (parentNode.right && parentNode.right.value !== parentNode.value) {
        return false
    }
    if (parentNode.left && parentNode.left.value === parentNode.value && parentNode.right === null ) {
        return helper(parentNode, parentNode.left)
    }
}
// def is_unival(root):
//     return unival_helper(root, root.value)

// def unival_helper(root, value):
//     if root is None:
//         return True
//     if root.value == value:
//         return unival_helper(root.left, value) and unival_helper(root.right, value)
//     return False


function unival_helper(root, value) {
    if (root === null) {
        return true
    }
    if (root.value === value) {
        return unival_helper(root.left, value) && unival_helper(root.right, value)
    }
    return false
}

// def is_unival(root):
//     return unival_helper(root, root.value)

function is_unival(root) {
    return unival_helper(root, root.value)
}

// def count_unival_subtrees(root):
//     if root is None:
//         return 0
//     left = count_unival_subtrees(root.left)
//     right = count_unival_subtrees(root.right)
//     return 1 + left + right if is_unival(root) else left + right

function counter(root) {
    if (root === null) {
        return 0
    }

    let left = counter(root.left)
    let right = counter(root.right)

    if (is_unival(root)) {
        return 1 + left + right
    }

    return left + right

}

http://pythontutor.com/visualize.html#mode=edit

//   0 <
//  /   \
//  1     0  helper(left) helper(right)
//  /\    / \
// 2  1  1   0

//return helperFunc(prevNode) && helperFunc(currNode)



let tree = {value: 0, left: {value: 1, left: null, right: null }, right: {value:0, left: {value: 1, left: { value: 1, left: null, right: null }, right: {value: 1, left: null, right: null}}, right: {value: 0, left: null, right: null} }}

const tree = new Unival(5);
tree.insert(5);//
tree.insert(10);
tree.counter()  //root




// PYTHON CODE
// def is_unival(root):
//     return unival_helper(root, root.value)

// def unival_helper(root, value):
//     if root is None:
//         return True
//     if root.value == value:
//         return unival_helper(root.left, value) and unival_helper(root.right, value)
//     return False

// def count_unival_subtrees(root):
//     if root is None:
//         return 0
//     left = count_unival_subtrees(root.left)
//     right = count_unival_subtrees(root.right)
//     return 1 + left + right if is_unival(root) else left + right

//     def count_unival_subtrees(root):
//     count, _ = helper(root)
//     return count

// # Also returns number of unival subtrees, and whether it is itself a unival subtree.
// def helper(root):
//     if root is None:
//         return 0, True

//     left_count, is_left_unival = helper(root.left)
//     right_count, is_right_unival = helper(root.right)
//     total_count = left_count + right_count

//     if is_left_unival and is_right_unival:
//         if root.left is not None and root.value != root.left.value:
//             return total_count, False
//         if root.right is not None and root.value != root.right.value:
//             return total_count, False
//         return total_count + 1, True
//     return total_count, False
