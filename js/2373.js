/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function (grid) {
    let n = grid.length;
    let ansArray = new Array(n - 2).fill(0).map(() => new Array(n - 2).fill(-Infinity));

    for (let i = 0; i < n - 2; i++) {
        for (let j = 0; j < n - 2; j++) {
            for (let x = i; x < i + 3; x++) {
                for (let y = j; y < j + 3; y++) {
                    ansArray[i][j] = Math.max(ansArray[i][j], grid[x][y]);
                }
            }
        }
    }
    return ansArray;
};

// Example 1:
// Input: grid = [[9,9,8,1],[5,6,2,6],[8,2,6,4],[6,2,2,2]]
// Output: [[9,9],[8,6]]
// Explanation: The diagram above shows the original matrix and the generated matrix.
// Notice that each value in the generated matrix corresponds to the largest value of a contiguous 3 x 3 matrix in grid.

// Example 2:
// Input: grid = [[1,1,1,1,1],[1,1,1,1,1],[1,1,2,1,1],[1,1,1,1,1],[1,1,1,1,1]]
// Output: [[2,2,2],[2,2,2],[2,2,2]]
// Explanation: Notice that the 2 is contained within every contiguous 3 x 3 matrix in grid.