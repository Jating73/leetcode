/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function (arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        count++;
        if (arr[i] % 2 === 0) {
            count = 0;
        }
        if (count === 3) {
            return true;
        }
    }

    return false;
};

// Example 1:
// Input: arr = [2,6,4,1]
// Output: false
// Explanation: There are no three consecutive odds.

// Example 2:
// Input: arr = [1,2,34,3,4,5,7,23,12]
// Output: true
// Explanation: [5,7,23] are three consecutive odds.