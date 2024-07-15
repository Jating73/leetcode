// 2196. Create Binary Tree From Descriptions

// You are given a 2D integer array descriptions where descriptions[i] = [parenti, childi, isLefti] indicates that parenti is the parent of childi in a binary tree of unique values. Furthermore,

// If isLefti == 1, then childi is the left child of parenti.
// If isLefti == 0, then childi is the right child of parenti.
// Construct the binary tree described by descriptions and return its root.

// The test cases will be generated such that the binary tree is valid.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[][]} descriptions
 * @return {TreeNode}
 */
var createBinaryTree = function (descriptions) {
    const nodes = new Map();

    const child = new Set();

    descriptions.forEach(([parentVal, childVal, isLeft]) => {

        let parentNode = nodes.get(parentVal);
        if (!parentNode) {
            parentNode = new TreeNode(parentVal);
            nodes.set(parentVal, parentNode);
        }

        let childNode = nodes.get(childVal);
        if (!childNode) {
            childNode = new TreeNode(childVal);
            nodes.set(childVal, childNode);
        }

        if (isLeft) {
            parentNode.left = childNode;
        } else {
            parentNode.right = childNode;
        }

        child.add(childVal);
    });

    let root = null;

    nodes.forEach((node, val) => {
        if (!child.has(val)) {
            root = node;
        }
    })

    return root;
};

let descriptions;

descriptions = [[20, 15, 1], [20, 17, 0], [50, 20, 1], [50, 80, 0], [80, 19, 1]]

console.log(createBinaryTree(descriptions))

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}


// Example 1:
// Input: descriptions = [[20,15,1],[20,17,0],[50,20,1],[50,80,0],[80,19,1]]
// Output: [50,20,80,15,17,19]
// Explanation: The root node is the node with value 50 since it has no parent.
// The resulting binary tree is shown in the diagram.

// Example 2:
// Input: descriptions = [[1,2,1],[2,3,0],[3,4,1]]
// Output: [1,2,null,null,3,4]
// Explanation: The root node is the node with value 1 since it has no parent.
// The resulting binary tree is shown in the diagram.