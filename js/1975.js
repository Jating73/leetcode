// 1975. Maximum Matrix Sum

// You are given an n x n integer matrix. You can do the following operation any number of times:

// Choose any two adjacent elements of matrix and multiply each of them by -1.
// Two elements are considered adjacent if and only if they share a border.

// Your goal is to maximize the summation of the matrix's elements. Return the maximum sum of the matrix's elements using the operation mentioned above.

// Example 1:
// Input: matrix = [[1,-1],[-1,1]]
// Output: 4
// Explanation: We can follow the following steps to reach sum equals 4:
// - Multiply the 2 elements in the first row by -1.
// - Multiply the 2 elements in the first column by -1.

// Example 2:
// Input: matrix = [[1,2,3],[-1,-2,-3],[1,2,3]]
// Output: 16
// Explanation: We can follow the following step to reach sum equals 16:
// - Multiply the 2 last elements in the second row by -1.
 

// Constraints:
// n == matrix.length == matrix[i].length
// 2 <= n <= 250
// -105 <= matrix[i][j] <= 105

/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maxMatrixSum = function (matrix) {
    let totalSum = 0;        // Sum of absolute values
    let minAbsValue = Infinity; // Smallest absolute value
    let negativeCount = 0;   // Count of negative elements

    // Traverse the matrix
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            const value = matrix[i][j];
            totalSum += Math.abs(value); // Add absolute value
            minAbsValue = Math.min(minAbsValue, Math.abs(value)); // Track smallest absolute value
            if (value < 0) negativeCount++; // Count negatives
        }
    }

    // Adjust totalSum if there is an odd count of negatives
    if (negativeCount % 2 !== 0) {
        totalSum -= 2 * minAbsValue;
    }

    return totalSum;
};