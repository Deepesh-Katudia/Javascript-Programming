/*
98. Validate Binary Search Tree
Solved
Medium
Topics
premium lock icon
Companies
Given the root of a binary tree, determine if it is a valid binary search
tree (BST).

A valid BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.



Example 1:


Input: root = [2,1,3]
Output: true
Example 2:


Input: root = [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.


Constraints:

The number of nodes in the tree is in the range [1, 10^4].
-2^31 <= Node.val <= 2^31 - 1
*/

var isValidBST = function(root) {
    // Each node must fall strictly within an open interval (min, max).
    // As we descend, the bounds tighten based on the direction we go.
    const validate = function(node, min, max) {
        if (node === null) return true;

        if (node.val <= min || node.val >= max) return false;

        // Left subtree: values must be less than the current node's value.
        // Right subtree: values must be greater than the current node's value.
        return validate(node.left, min, node.val) &&
               validate(node.right, node.val, max);
    };

    return validate(root, -Infinity, Infinity);
};
