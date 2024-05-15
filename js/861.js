/**
 * @param {number[][]} grid
 * @return {number}
 */
var matrixScore = function (grid) {
    const m = grid.length;
    const n = grid[0].length;

    // Step 1: Ensure leftmost bit of each row is 1
    for (let i = 0; i < m; i++) {
        if (grid[i][0] === 0) {
            // Toggle entire row if leftmost bit is 0
            toggleRow(grid, i);
        }
    }

    // Step 2: Ensure each column has more 1s than 0s
    for (let j = 1; j < n; j++) {
        let countOnes = 0;
        for (let i = 0; i < m; i++) {
            countOnes += grid[i][j];
        }
        // Toggle column if it has more 0s than 1s
        if (countOnes < m / 2) {
            toggleColumn(grid, j);
        }
    }

    // Calculate score
    let score = 0;
    for (let i = 0; i < m; i++) {
        let rowValue = parseInt(grid[i].join(''), 2); // Convert binary to decimal
        score += rowValue;
    }

    return score;
};

// Another way of toggling is 1 - element so either it will be 1 - 1 = 0 or 1 - 0 = 1

function toggleRow(grid, rowIndex) {
    for (let j = 0; j < grid[0].length; j++) {
        grid[rowIndex][j] ^= 1; // Toggle each element in the row.
    }
}

function toggleColumn(grid, colIndex) {
    for (let i = 0; i < grid.length; i++) {
        grid[i][colIndex] ^= 1; // Toggle each element in the column
    }
}

// Example 1:
// Input: grid = [[0,0,1,1],[1,0,1,0],[1,1,0,0]]
// Output: 39
// Explanation: 0b1111 + 0b1001 + 0b1111 = 15 + 9 + 15 = 39

// Example 2:
// Input: grid = [[0]]
// Output: 1