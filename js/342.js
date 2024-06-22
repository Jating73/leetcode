/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
    if (n <= 0) return false;

    while (n % 4 === 0) {
        n = Math.floor(n / 4);
    }

    return n === 1;
};

let n;

n = 16
n = 5
n = 1

console.log(isPowerOfFour(n))

// Example 1:
// Input: n = 16
// Output: true

// Example 2:
// Input: n = 5
// Output: false

// Example 3:
// Input: n = 1
// Output: true