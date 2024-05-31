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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
    if (root == null) return null;

    function dfs(node) {
        if (!node) return null;

        if (node.val === val) return node;
        if (node.val < val) return dfs(node.right);
        else return dfs(node.left)
    }

    return dfs(root);
};