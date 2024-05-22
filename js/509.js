/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    if (n <= 1) return n;

    return fib(n - 1) + fib(n - 2);
};

// Optimized Approach

/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    if (n === 1 || n === 0) {
        return n;
    }

    let prev = 0
    let prev2 = 1;
    let current;

    for (let i = 2; i <= n; i++) {
        current = prev + prev2;
        prev = prev2;
        prev2 = current;
    }

    return current;
};


// Example 1:
// Input: n = 2
// Output: 1
// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.

// Example 2:
// Input: n = 3
// Output: 2
// Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.

// Example 3:
// Input: n = 4
// Output: 3
// Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.