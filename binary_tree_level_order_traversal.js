/*
102. Binary Tree Level Order Traversal
Solved
Medium
Topics
premium lock icon
Companies
Given the root of a binary tree, return the level order traversal of its nodes'
values. (i.e., from left to right, level by level).



Example 1:


Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]
Example 2:

Input: root = [1]
Output: [[1]]
Example 3:

Input: root = []
Output: []


Constraints:

The number of nodes in the tree is in the range [0, 2000].
-1000 <= Node.val <= 1000
*/

var levelOrder = function(root) {
    const result = [];
    if (root === null) return result;

    // BFS: process the tree one level at a time using a queue.
    const queue = [root];

    while (queue.length > 0) {
        const levelSize = queue.length;
        const currentLevel = [];

        // Drain exactly the nodes belonging to the current level.
        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            currentLevel.push(node.val);

            if (node.left !== null) queue.push(node.left);
            if (node.right !== null) queue.push(node.right);
        }

        result.push(currentLevel);
    }

    return result;
};
