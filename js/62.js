/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    let memo = Array.from({ length: m }, () => Array(n).fill(-1));

    function countPaths(x, y) {
        // If reached at last return path as 1
        if (x === m - 1 && y === n - 1) {
            return 1;
        }

        // If didn't reached end but reached at max of row or column then return 0
        if (x >= m || y >= n) {
            return 0;
        }

        // If the value is already computed, return it from memo
        if (memo[x][y] !== -1) {
            return memo[x][y];
        }

        // Memoize the value for the paths
        memo[x][y] = countPaths(x + 1, y) + countPaths(x, y + 1);
        return memo[x][y];
    }

    return countPaths(0, 0);

};

let m, n;

m = 3, n = 7, output = 28;
m = 3, n = 2, output = 3;

console.log(uniquePaths(m, n));

// 00 -> 01 -> 11 -> 21
// 00 -> 10 -> 11 -> 21
// 00 -> 10 -> 20 -> 21

// [00, 01]
// [10, 11]
// [20, 21]



// Example 1:
// Input: m = 3, n = 7
// Output: 28

// Example 2:
// Input: m = 3, n = 2
// Output: 3
// Explanation: From the top - left corner, there are a total of 3 ways to reach the bottom - right corner:
// 1. Right -> Down -> Down
// 2. Down -> Down -> Right
// 3. Down -> Right -> Down