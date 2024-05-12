/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var satisfiesConditions = function (grid) {
    let rows = grid.length;
    let cols = grid[0].length;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (j + 1 < cols) {
                if (grid[i][j] === grid[i][j + 1]) {
                    return false;
                }
            }
            if (i + 1 < rows) {
                if (grid[i][j] !== grid[i + 1][j]) {
                    return false;
                }
            }
        }
    }

    return true;
};

// Example 1:
// Input: grid = [[1,0,2],[1,0,2]]
// Output: true
// Explanation:
// All the cells in the grid satisfy the conditions.

// Example 2:
// Input: grid = [[1,1,1],[0,0,0]]
// Output: false
// Explanation:
// All cells in the first row are equal.

// Example 3:
// Input: grid = [[1],[2],[3]]
// Output: false
// Explanation:
// Cells in the first column have different values.

