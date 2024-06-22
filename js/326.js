/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
    // Edge case: n must be positive
    if (n <= 0) {
        return false;
    }

    // Continuously divide n by 3
    while (n % 3 === 0) {
        n = Math.floor(n / 3);  // Use Math.floor to avoid floating-point issues
    }

    // If n is reduced to 1, it is a power of three
    return n === 1;
};


// Example 1:
// Input: n = 27
// Output: true
// Explanation: 27 = 33

// Example 2:
// Input: n = 0
// Output: false
// Explanation: There is no x where 3x = 0.

// Example 3:
// Input: n = -1
// Output: false
// Explanation: There is no x where 3x = (-1).