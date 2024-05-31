/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    let map = new Map();

    while (n !== 1) {
        if (map.has(n)) {
            return false;
        }
        map.set(n, true)
        let x = n.toString();
        let currentSum = 0;
        for (let i = 0; i < x.length; i++) {
            currentSum += Math.pow(parseInt(x[i]), 2);
        }
        n = currentSum;
    }
    return true;
};


// Example 1:
// Input: n = 19
// Output: true
// Explanation:
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1

// Example 2:
// Input: n = 2
// Output: false