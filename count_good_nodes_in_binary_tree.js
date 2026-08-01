/*
1448. Count Good Nodes in Binary Tree
Medium
Topics
premium lock icon
Companies
Given a binary tree root, a node X in the tree is named good if in the path from
root to X there are no nodes with a value greater than X.

Return the number of good nodes in the binary tree.



Example 1:


Input: root = [3,1,4,3,null,1,5]
Output: 4
Explanation: Nodes in blue are good.
Root Node (3) is always a good node.
Node 4 -> (3,4) is the maximum value in the path starting from the root.
Node 5 -> (3,4,5) is the maximum value in the path
Node 3 -> (3,1,3) is the maximum value in the path.
Example 2:


Input: root = [3,3,null,4,2]
Output: 3
Explanation: Node 2 -> (3, 3, 2) is not good, because "3" is higher than it.
Example 3:

Input: root = [1]
Output: 1
Explanation: Root is considered as good.


Constraints:

The number of nodes in the binary tree is in the range [1, 10^5].
Each node's value is between [-10^4, 10^4].
*/

var goodNodes = function(root) {
    // Carry the largest value seen on the path from the root down to this node.
    // A node is good when nothing on that path beats it, so comparing against
    // the running maximum is enough - no need to keep the whole path around.
    const countGood = (node, maxOnPath) => {
        if (node === null) return 0;

        const isGood = node.val >= maxOnPath;
        const nextMax = isGood ? node.val : maxOnPath;

        return (isGood ? 1 : 0)
            + countGood(node.left, nextMax)
            + countGood(node.right, nextMax);
    };

    // The root is always good: it is the only node on its own path.
    return countGood(root, root.val);
};

// Time: O(n) - every node is visited exactly once.
// Space: O(h) - recursion stack, h = tree height (O(n) worst case, O(log n) balanced).
