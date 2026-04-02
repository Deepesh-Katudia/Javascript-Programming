/*
Invert Binary Tree

You are given the root of a binary tree root. Invert the binary tree and return its root.

Example 1:
Input: root = [1,2,3,4,5,6,7]
Output: [1,3,2,7,6,5,4]

Example 2:
Input: root = [3,2,1]
Output: [3,1,2]

Example 3:
Input: root = []
Output: []

Constraints:
0 <= The number of nodes in the tree <= 100.
-100 <= Node.val <= 100
*/

function invertTree(root) {
    if (root === null) return null;

    // swap children
    let temp = root.left;
    root.left = root.right;
    root.right = temp;

    // recurse on children
    invertTree(root.left);
    invertTree(root.right);

    return root;
}

// Example usage:
const root = {
    val: 1,
    left: {
        val: 2,
        left: { val: 4, left: null, right: null },
        right: { val: 5, left: null, right: null }, 
    },
    right: {
        val: 3,
        left: { val: 6, left: null, right: null },
        right: { val: 7, left: null, right: null },
    },
};
console.log(invertTree(root));