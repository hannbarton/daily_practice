//daily coding problem 36

// Given the root to a binary search tree, find the second largest node in the tree.

// We will be sending the solution tomorrow, along with tomorrow's question. As always, feel free to shoot us an email if there's anything we can help with.

function secondLargest(root) {
    if (root === null) {
        return null
    }
    while(root.right) {

    }
}

// if (root==null || (root.left==null &amp;&amp; root.right==null)) return null;
// Node parent = null, child = root;
// // find the right most child
// while (child.right!=null) {
//     parent = child;
//     child = child.right;
//  }
//  // if the right most child has no left child, then it's parent is second largest
//  if (child.left==null) return parent;
//  // otherwise, return left child's rightmost child as second largest
//  child = child.left;
//  while (child.right!=null) child = child.right;
//  return child;
// }

//      5
//    /  \
//   3    10
//  / \   /
// 2   4 8
console.log(secondLargest(
    {value: 5,
        left: {
          value: 3,
          left: {
              value:2,
              left: null,
              right: null
          },
          right:{
               value: 4,
               right: null,
               left: null
          }
        },
        right: {
            value: 10,
            left: {
              value: 9,
              right: null,
              left: null
            },
            right: null
        }
    }
    ))
