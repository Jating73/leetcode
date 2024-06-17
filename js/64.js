/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    let rows = grid.length;
    let cols = grid[0].length;
    let dp = new Array(rows).fill(-1).map(() => new Array(cols).fill(-1))
    function f(i, j) {
        if (i === 0 && j === 0) {
            return grid[i][j]
        }
        if (i < 0 || j < 0) {
            return 1e7;
        }
        if (dp[i][j] != -1) return dp[i][j]
        let up = grid[i][j] + f(i - 1, j);
        let left = grid[i][j] + f(i, j - 1);
        return dp[i][j] = Math.min(up, left);
    }
    let minPath = f(rows - 1, cols - 1);
    return minPath;
};


let grid;

grid = [
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1]
];

grid = [
    [1, 2, 3],
    [4, 5, 6]
]


console.log(minPathSum(grid))

// Example 1:
// Input: grid = [[1,3,1],[1,5,1],[4,2,1]]
// Output: 7
// Explanation: Because the path 1 → 3 → 1 → 1 → 1 minimizes the sum.

// Example 2:
// Input: grid = [[1,2,3],[4,5,6]]
// Output: 12