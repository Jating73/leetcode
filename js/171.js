/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
    let sum = 0, index = 0;
    for (let i = columnTitle.length - 1; i >= 0; i--) {
        let charCode = columnTitle.charCodeAt(i);
        charCode = charCode - 65 + 1
        sum += Math.pow(26, index) * charCode;
        index++;
    }
    return sum;
};

let columnTitle;
columnTitle = "A"
columnTitle = "AB"
columnTitle = "ZY"

console.log(titleToNumber(columnTitle))

// Example 1:
// Input: columnTitle = "A"
// Output: 1

// Example 2:
// Input: columnTitle = "AB"
// Output: 28

// Example 3:
// Input: columnTitle = "ZY"
// Output: 701