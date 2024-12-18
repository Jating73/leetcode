// 951. Flip Equivalent Binary Trees

// For a binary tree T, we can define a flip operation as follows: choose any node, and swap the left and right child subtrees.

// A binary tree X is flip equivalent to a binary tree Y if and only if we can make X equal to Y after some number of flip operations.

// Given the roots of two binary trees root1 and root2, return true if the two trees are flip equivalent or false otherwise.



// Example 1:
// Flipped Trees Diagram
// Input: root1 = [1,2,3,4,5,6,null,null,null,7,8], root2 = [1,3,2,null,6,4,5,null,null,null,null,8,7]
// Output: true
// Explanation: We flipped at nodes with values 1, 3, and 5.

// Example 2:
// Input: root1 = [], root2 = []
// Output: true

// Example 3:
// Input: root1 = [], root2 = [1]
// Output: false

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var flipEquiv = function (root1, root2) {

    // Base cases
    if (root1 === null && root2 === null) return true;  // Both nodes are null
    if (root1 === null || root2 === null) return false; // One node is null but the other is not
    if (root1.val !== root2.val) return false;          // Root values are different

    // Recursively check if the subtrees are flip equivalent
    // Two possibilities: children match in order, or they match flipped
    return (flipEquiv(root1.left, root2.left) && flipEquiv(root1.right, root2.right)) ||
        (flipEquiv(root1.left, root2.right) && flipEquiv(root1.right, root2.left));

};
