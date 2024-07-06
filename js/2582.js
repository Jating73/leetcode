/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
var passThePillow = function (n, time) {
    let passes = n - 1;
    let div = Math.floor(time / passes);
    let rem = time % passes;

    if (div % 2 === 0) {
        return rem + 1;
    } else {
        return n - rem;
    }
};

// Example 1:
// Input: n = 4, time = 5
// Output: 2
// Explanation: People pass the pillow in the following way: 1 -> 2 -> 3 -> 4 -> 3 -> 2.
// After five seconds, the 2nd person is holding the pillow.

// Example 2:
// Input: n = 3, time = 2
// Output: 3
// Explanation: People pass the pillow in the following way: 1 -> 2 -> 3.
// After two seconds, the 3rd person is holding the pillow.