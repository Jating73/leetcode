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
 * @return {boolean}
 */
var isBalanced = function (root) {

    function checkHeightAndBalance(node) {
        if (node === null) {
            return { isBalanced: true, height: 0 };
        }

        const leftResult = checkHeightAndBalance(node.left);
        if (!leftResult.isBalanced) {
            return { isBalanced: false, height: 0 };
        }

        const rightResult = checkHeightAndBalance(node.right);
        if (!rightResult.isBalanced) {
            return { isBalanced: false, height: 0 };
        }

        const heightDifference = Math.abs(leftResult.height - rightResult.height);
        const currentHeight = Math.max(leftResult.height, rightResult.height) + 1;

        const isCurrentNodeBalanced = heightDifference <= 1;

        return { isBalanced: isCurrentNodeBalanced, height: currentHeight };
    }

    const result = checkHeightAndBalance(root);
    return result.isBalanced;
};


// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: true

// Example 2:
// Input: root = [1,2,2,3,3,null,null,4,4]
// Output: false

// Example 3:
// Input: root = []
// Output: true