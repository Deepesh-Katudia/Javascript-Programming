/*
124. Binary Tree Maximum Path Sum
Hard
Topics
premium lock icon
Companies
A path in a binary tree is a sequence of nodes where each pair of adjacent nodes
in the sequence has an edge connecting them. A node can only appear in the
sequence at most once. Note that the path does not need to pass through the root.

The path sum of a path is the sum of the node's values in the path.

Given the root of a binary tree, return the maximum path sum of any non-empty
path.



Example 1:


Input: root = [1,2,3]
Output: 6
Explanation: The optimal path is 2 -> 1 -> 3 with a path sum of 2 + 1 + 3 = 6.
Example 2:


Input: root = [-10,9,20,null,null,15,7]
Output: 42
Explanation: The optimal path is 15 -> 20 -> 7 with a path sum of 15 + 20 + 7 = 42.


Constraints:

The number of nodes in the tree is in the range [1, 3 * 10^4].
-1000 <= Node.val <= 1000
*/

var maxPathSum = function(root) {
    // Two different quantities are in play at every node:
    //   1. The best path that *bends* at this node: left + node + right. That
    //      path is a valid answer but cannot be extended upward, because the
    //      parent would make the node have three edges.
    //   2. The best path that *hangs down* from this node: node + one branch.
    //      Only this value can be handed to the parent.
    // So we return (2) and record (1) in a running best.
    let best = -Infinity;

    // Returns the largest downward path sum starting at `node`.
    const maxDownward = (node) => {
        if (node === null) return 0;

        // A negative branch only hurts, so clamp it to 0 - that is the same as
        // choosing to stop the path here instead of extending into the branch.
        const left = Math.max(maxDownward(node.left), 0);
        const right = Math.max(maxDownward(node.right), 0);

        // Candidate answer: the path that turns at this node.
        best = Math.max(best, node.val + left + right);

        // Handed to the parent: keep only the better single branch.
        return node.val + Math.max(left, right);
    };

    maxDownward(root);
    return best;
};

// Time: O(n) - every node is visited exactly once.
// Space: O(h) - recursion stack, h = tree height (O(n) worst case, O(log n) balanced).
