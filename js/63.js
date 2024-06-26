/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {


    let m = obstacleGrid.length, n = obstacleGrid[0].length;
    let dp = new Array(m).fill().map(() => new Array(n).fill(-1));

    function f(i, j) {
        if (i < 0 || j < 0 || obstacleGrid[i][j] === 1) return 0;
        if (i === 0 && j === 0) {
            return 1;
        }
        if (i < 0 || j < 0) return 0;
        if (dp[i][j] !== -1) {
            return dp[i][j];
        }
        const up = f(i - 1, j);
        const left = f(i, j - 1);
        return dp[i][j] = up + left;
    }
    return f(m - 1, n - 1);
};

let obstacleGrid;
obstacleGrid = [[0, 0, 0], [0, 1, 0], [0, 0, 0]];


console.log(uniquePathsWithObstacles(obstacleGrid))

// Example 1:
// Input: obstacleGrid = [[0, 0, 0], [0, 1, 0], [0, 0, 0]]
// Output: 2
// Explanation: There is one obstacle in the middle of the 3x3 grid above.
// There are two ways to reach the bottom - right corner:
// 1. Right -> Right -> Down -> Down
// 2. Down -> Down -> Right -> Right

// Example 2:
// Input: obstacleGrid = [[0, 1], [0, 0]]
// Output: 1