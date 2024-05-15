/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
    let result = '';
    while (columnNumber > 0) {
        let remainder = (columnNumber - 1) % 26;
        result = String.fromCharCode(remainder + 65) + result;
        columnNumber = Math.floor((columnNumber - 1) / 26);
    }
    return result;
};

// Example 1:
// Input: columnNumber = 1
// Output: "A"

// Example 2:
// Input: columnNumber = 28
// Output: "AB"

// Example 3:
// Input: columnNumber = 701
// Output: "ZY"