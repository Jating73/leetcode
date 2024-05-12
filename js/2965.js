// Input: grid = [[1,3],[2,2]]
// Output: [2,4]

// Input: grid = [[9,1,7],[8,9,2],[3,4,6]]
// Output: [9,5]

/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function (grid) {
    let rows = grid.length;
    let cols = grid[0].length;

    let map = new Map();
    let repeatedValue = -1,
        missingValue = 1;

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            let value = grid[row][col];

            if (map.has(value)) {
                map.set(value, map.get(value) + 1);
                repeatedValue = value;
            } else {
                map.set(value, 1);
            }
        }
    }

    for (let i = 1; i <= rows * cols; i++) {
        if (map.has(i)) continue;
        missingValue = i;
    }

    return [repeatedValue, missingValue];
};

let grid;
grid = [
    [1, 3],
    [2, 2],
];

grid = [
    [9, 1, 7],
    [8, 9, 2],
    [3, 4, 6],
];
grid = [
    [1, 5, 2],
    [8, 4, 3],
    [7, 8, 6],
];

console.log(findMissingAndRepeatedValues(grid));
