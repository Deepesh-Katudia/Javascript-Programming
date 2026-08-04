/*
297. Serialize and Deserialize Binary Tree
Hard
Topics
premium lock icon
Companies
Serialization is the process of converting a data structure or object into a
sequence of bits so that it can be stored in a file or memory buffer, or
transmitted across a network connection link to be reconstructed later in the
same or another computer environment.

Design an algorithm to serialize and deserialize a binary tree. There is no
restriction on how your serialization/deserialization algorithm should work. You
just need to ensure that a binary tree can be serialized to a string and this
string can be deserialized to the original tree structure.

Clarification: The input/output format is the same as how LeetCode serializes a
binary tree. You do not necessarily need to follow this format, so please be
creative and come up with different approaches yourself.



Example 1:


Input: root = [1,2,3,null,null,4,5]
Output: [1,2,3,null,null,4,5]
Example 2:

Input: root = []
Output: []


Constraints:

The number of nodes in the tree is in the range [0, 10^4].
-1000 <= Node.val <= 1000
*/

var serialize = function(root) {
    // A single traversal order is not enough to rebuild a tree - preorder alone
    // is ambiguous because you cannot tell where a subtree stops. Writing an
    // explicit marker for every missing child removes that ambiguity: the shape
    // of the tree is then fully encoded in the sequence itself.
    const parts = [];

    const preorder = (node) => {
        if (node === null) {
            parts.push('#');
            return;
        }

        parts.push(String(node.val));
        preorder(node.left);
        preorder(node.right);
    };

    preorder(root);
    return parts.join(',');
};

var deserialize = function(data) {
    // Reading in the same preorder the writer used means the next token is
    // always the node we are about to build. A moving index acts as the cursor
    // that recursion advances - each call consumes exactly its own subtree.
    const parts = data.split(',');
    let index = 0;

    const build = () => {
        const token = parts[index];
        index++;

        // A marker means "no node here", which also ends this branch.
        if (token === '#') return null;

        const node = new TreeNode(Number(token));
        node.left = build();
        node.right = build();
        return node;
    };

    return build();
};

// serialize   Time: O(n) - one visit per node plus one marker per null child.
//             Space: O(n) output, O(h) recursion stack.
// deserialize Time: O(n) - each token is consumed exactly once.
//             Space: O(n) rebuilt tree, O(h) recursion stack.
// h = tree height (O(n) worst case, O(log n) balanced).
