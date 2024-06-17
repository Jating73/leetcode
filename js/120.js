/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
    let rows = triangle.length;

    const dp = new Array(rows).fill().map(() => new Array(rows).fill(-1));

    function f(i, j) {

        if (dp[i][j] !== -1) return dp[i][j];

        if (i === rows - 1) {
            return triangle[i][j];
        }
        let down = triangle[i][j] + f(i + 1, j);
        let diagonal = triangle[i][j] + f(i + 1, j + 1)
        return dp[i][j] = Math.min(down, diagonal);
    }
    return f(0, 0);
};


let triangle;

triangle = [
    [2],
    [3, 4],
    [6, 5, 7],
    [4, 1, 8, 3]
]

triangle = [
    [-1],
    [2, 3],
    [1, -1, -3]
]

console.log(minimumTotal(triangle))


// Example 1:
// Input: triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
// Output: 11
// Explanation: The triangle looks like:
//    2
//   3 4
//  6 5 7
// 4 1 8 3
// The minimum path sum from top to bottom is 2 + 3 + 5 + 1 = 11 (underlined above).

// Example 2:
// Input: triangle = [[-10]]
// Output: -10