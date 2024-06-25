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
var convertBST = function (root) {
    let sum = 0;
    function reverseInOrderTraversal(node) {
        if (node === null) return;

        reverseInOrderTraversal(node.right);

        sum += node.val;
        node.val = sum;

        reverseInOrderTraversal(node.left);
    }

    reverseInOrderTraversal(root);
    return root;
};

// Same like 1038