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
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
    let sum = 0;
    function dfs(node, isLeft) {
        if (!node) return isLeft;
        if (node.left) dfs(node.left, true);
        if (node.right) dfs(node.right, false);
        if (!node.left && !node.right && isLeft) sum += node.val;
    }
    dfs(root, false);
    return sum;
};


// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: 24
// Explanation: There are two left leaves in the binary tree, with values 9 and 15 respectively.

// Example 2:
// Input: root = [1]
// Output: 0