/**
 * @param {number[][]} grid
 * @return {number}
 */
var getMaximumGold = function (grid) {
    let maxGold = 0;
    const rows = grid.length;
    const cols = grid[0].length;

    function dfs(i, j, currentGold) {

        if (i < 0 || j < 0 || i >= rows || j >= cols || grid[i][j] === 0) {
            return currentGold;
        }

        const originalGold = grid[i][j];
        currentGold += originalGold;

        grid[i][j] = 0;

        let maxGoldFromHere = currentGold;

        maxGoldFromHere = Math.max(maxGoldFromHere, dfs(i - 1, j, currentGold));
        maxGoldFromHere = Math.max(maxGoldFromHere, dfs(i + 1, j, currentGold));
        maxGoldFromHere = Math.max(maxGoldFromHere, dfs(i, j - 1, currentGold));
        maxGoldFromHere = Math.max(maxGoldFromHere, dfs(i, j + 1, currentGold));

        grid[i][j] = originalGold;
        return maxGoldFromHere;

    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] != 0) {
                maxGold = Math.max(maxGold, dfs(i, j, 0))
            }
        }
    }

    return maxGold;
};


// Example 1:
// Input: grid = [[0,6,0],[5,8,7],[0,9,0]]
// Output: 24
// Explanation:
// [[0,6,0],
//  [5,8,7],
//  [0,9,0]]
// Path to get the maximum gold, 9 -> 8 -> 7.

// Example 2:
// Input: grid = [[1,0,7],[2,0,6],[3,4,5],[0,3,0],[9,0,20]]
// Output: 28
// Explanation:
// [[1,0,7],
//  [2,0,6],
//  [3,4,5],
//  [0,3,0],
//  [9,0,20]]
// Path to get the maximum gold, 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7.