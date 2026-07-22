/*
543. Diameter of Binary Tree
Solved
Easy
Topics
premium lock icon
Companies
Given the root of a binary tree, return the length of the diameter of the tree.

The diameter of a binary tree is the length of the longest path between any two
nodes in a tree. This path may or may not pass through the root.

The length of a path between two nodes is represented by the number of edges
between them.



Example 1:


Input: root = [1,2,3,4,5]
Output: 3
Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].
Example 2:

Input: root = [1,2]
Output: 1


Constraints:

The number of nodes in the tree is in the range [1, 10^4].
-100 <= Node.val <= 100
*/

var diameterOfBinaryTree = function(root) {
    let diameter = 0;

    // Returns the height (number of nodes) of the subtree rooted at node,
    // while updating the longest path (in edges) seen so far.
    const depth = function(node) {
        if (node === null) return 0;

        const leftDepth = depth(node.left);
        const rightDepth = depth(node.right);

        // Path passing through this node uses leftDepth + rightDepth edges.
        diameter = Math.max(diameter, leftDepth + rightDepth);

        return 1 + Math.max(leftDepth, rightDepth);
    };

    depth(root);
    return diameter;
};
