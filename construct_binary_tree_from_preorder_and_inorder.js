/*
105. Construct Binary Tree from Preorder and Inorder Traversal
Medium
Topics
premium lock icon
Companies
Given two integer arrays preorder and inorder where preorder is the preorder
traversal of a binary tree and inorder is the inorder traversal of the same
tree, construct and return the binary tree.



Example 1:


Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
Output: [3,9,20,null,null,15,7]
Example 2:

Input: preorder = [-1], inorder = [-1]
Output: [-1]


Constraints:

1 <= preorder.length <= 3000
inorder.length == preorder.length
-3000 <= preorder[i] <= 3000
preorder and inorder consist of unique values.
Each value of inorder also appears in preorder.
preorder is guaranteed to be the preorder traversal of the tree.
inorder is guaranteed to be the inorder traversal of the tree.
*/

function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

var buildTree = function(preorder, inorder) {
    // preorder gives the root first; inorder tells us how many nodes sit in the
    // left subtree (everything before the root). Those two facts are enough to
    // split both arrays and recurse.
    // Index the inorder positions once so the split is O(1) instead of a scan.
    const inorderIndex = new Map();
    for (let i = 0; i < inorder.length; i++) {
        inorderIndex.set(inorder[i], i);
    }

    // preIndex walks preorder exactly once, in the same order nodes are created.
    let preIndex = 0;

    // Build the subtree covering inorder[left..right].
    const build = (left, right) => {
        if (left > right) return null;

        const rootVal = preorder[preIndex++];
        const root = new TreeNode(rootVal);

        const mid = inorderIndex.get(rootVal);

        // Left subtree must be fully built first: preorder lists it before the
        // right subtree, so the shared preIndex lands correctly for both calls.
        root.left = build(left, mid - 1);
        root.right = build(mid + 1, right);

        return root;
    };

    return build(0, inorder.length - 1);
};

// Time: O(n) - each node is created once and each split is an O(1) map lookup.
// Space: O(n) - the value->index map, plus O(h) recursion stack.
