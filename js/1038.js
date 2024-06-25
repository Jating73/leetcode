/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var bstToGst = function (root) {
    let sum = 0;

    function reverseInOrderTraversal(node) {
        if (node === null) return;

        // Traverse right subtree first
        reverseInOrderTraversal(node.right);

        // Update the sum and node's value
        sum += node.val;
        node.val = sum;

        // Traverse left subtree
        reverseInOrderTraversal(node.left);
    }

    reverseInOrderTraversal(root);
    return root;
};


// Example 1:
// Input: root = [4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]
// Output: [30,36,21,36,35,26,15,null,null,null,33,null,null,null,8]

// Example 2:
// Input: root = [0,null,1]
// Output: [1,null,1]
 
// Constraints:
// The number of nodes in the tree is in the range [1, 100].
// 0 <= Node.val <= 100
// All the values in the tree are unique.