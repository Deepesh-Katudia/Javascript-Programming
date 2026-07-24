/*
230. Kth Smallest Element in a BST
Solved
Medium
Topics
premium lock icon
Companies
Given the root of a binary search tree, and an integer k, return the kth
smallest value (1-indexed) of all the values of the nodes in the tree.



Example 1:


Input: root = [3,1,4,null,2], k = 1
Output: 1
Example 2:


Input: root = [5,3,6,2,4,null,null,1], k = 3
Output: 3


Constraints:

The number of nodes in the tree is n.
1 <= k <= n <= 10^4
0 <= Node.val <= 10^4
*/

var kthSmallest = function(root, k) {
    let count = 0;
    let result = null;

    // In-order traversal of a BST visits values in ascending order,
    // so the kth node we visit is the kth smallest.
    const inorder = function(node) {
        if (node === null || result !== null) return;

        inorder(node.left);

        count++;
        if (count === k) {
            result = node.val;
            return; // Found it; skip the remaining traversal.
        }

        inorder(node.right);
    };

    inorder(root);
    return result;
};
