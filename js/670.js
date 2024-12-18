// 670. Maximum Swap

// You are given an integer num. You can swap two digits at most once to get the maximum valued number.

// Return the maximum valued number you can get.


// Example 1:
// Input: num = 2736
// Output: 7236
// Explanation: Swap the number 2 and the number 7.

// Example 2:
// Input: num = 9973
// Output: 9973
// Explanation: No swap.


// Constraints:

// 0 <= num <= 108

/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function (num) {

    let numArr = num.toString().split('');

    let lastIndex = {};
    for (let i = 0; i < numArr.length; i++) {
        lastIndex[numArr[i]] = i
    }

    for (let i = 0; i < numArr.length; i++) {
        for (let j = 9; j > numArr[i]; j--) {
            if (lastIndex[j] > i) {
                [numArr[lastIndex[j]], numArr[i]] = [numArr[i], numArr[lastIndex[j]]];
                return parseInt(numArr.join(''), 10)
            }
        }
    }

    return num;

};

let num;

num = 2736

console.log(maximumSwap(num))