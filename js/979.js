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
var distributeCoins = function (root) {
    let totalMoves = 0;
    function dfs(node) {
        if (!node) return 0;

        let leftExcess = dfs(node.left);
        let rightExcess = dfs(node.right);

        const currentExcess = node.val + leftExcess + rightExcess - 1;

        totalMoves += Math.abs(leftExcess) + Math.abs(rightExcess);

        return currentExcess;
    }

    dfs(root);
    return totalMoves;
};


// Example 1:
// Input: root = [3,0,0]
// Output: 2
// Explanation: From the root of the tree, we move one coin to its left child, and one coin to its right child.

// Example 2:
// Input: root = [0,3,0]
// Output: 3
// Explanation: From the left child of the root, we move two coins to the root [taking two moves]. Then, we move one coin from the root of the tree to the right child.