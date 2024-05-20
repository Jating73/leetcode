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
 * @param {number} target
 * @return {TreeNode}
 */
var removeLeafNodes = function (root, target) {
    function dfs(node) {
        if (!node) {
            return false;
        }
        if (!node.left && !node.right && node.val === target) {
            return true;
        } else {
            if (dfs(node.left)) {
                node.left = null;
            }
            if (dfs(node.right)) {
                node.right = null;
            }
            if (!node.left && !node.right && node.val === target) {
                return true;
            }
            return false;
        }
    }

    if (dfs(root)) {
        root = null;
    }
    return root;
};


// Example 1:
// Input: root = [1,2,3,2,null,2,4], target = 2
// Output: [1,null,3,null,4]
// Explanation: Leaf nodes in green with value (target = 2) are removed (Picture in left). 
// After removing, new nodes become leaf nodes with value (target = 2) (Picture in center).

// Example 2:
// Input: root = [1,3,3,3,2], target = 3
// Output: [1,3,null,null,2]

// Example 3:
// Input: root = [1,2,null,2,null,2], target = 2
// Output: [1]
// Explanation: Leaf nodes in green with value (target = 2) are removed at each step.