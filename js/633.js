// Optimal Approach
/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {
    let left = 0;
    let right = Math.floor(Math.sqrt(c));
    while (left <= right) {
        let sum = left * left + right * right;
        if (sum === c) return true;
        else if (sum < c) left++;
        else right--;
    }
    return false;
};



// Brute Force Approach - TLE
/**
 * @param {number} c
 * @return {boolean}
 */
// var judgeSquareSum = function (c) {
//     for (let a = 0; a <= c; a++) {
//         for (let b = 0; b <= c; b++) {
//             if (a * a + b * b === c) {
//                 return true
//             }
//         }
//     }
//     return false;
// };


let c;

c = 5

console.log(judgeSquareSum(c))

// Example 1:
// Input: c = 5
// Output: true
// Explanation: 1 * 1 + 2 * 2 = 5

// Example 2:
// Input: c = 3
// Output: false