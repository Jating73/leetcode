// 2696. Minimum String Length After Removing Substrings

// You are given a string s consisting only of uppercase English letters.

// You can apply some operations to this string where, in one operation, you can remove any occurrence of one of the substrings "AB" or "CD" from s.

// Return the minimum possible length of the resulting string that you can obtain.

// Note that the string concatenates after removing the substring and could produce new "AB" or "CD" substrings.

// Example 1:
// Input: s = "ABFCACDB"
// Output: 2
// Explanation: We can do the following operations:
// - Remove the substring "ABFCACDB", so s = "FCACDB".
// - Remove the substring "FCACDB", so s = "FCAB".
// - Remove the substring "FCAB", so s = "FC".
// So the resulting length of the string is 2.
// It can be shown that it is the minimum length that we can obtain.

// Example 2:
// Input: s = "ACBBD"
// Output: 5
// Explanation: We cannot do any operations on the string so the length remains the same.


// Constraints:
// 1 <= s.length <= 100
// s consists only of uppercase English letters.

// Brute Force Approach - O(n2)
/**
 * @param {string} s
 * @return {number}
 */
var minLength = function (s) {
    while (s.includes('AB') || s.includes('CD')) {
        let index = s.indexOf('AB') >= 0 ? 1 : (s.indexOf('CD') >= 0 ? 2 : 0);
        if (index === 0) break;
        else if (index === 1) {
            s = s.split('AB').filter((s) => {
                if (s === 'AB') {
                    return false;
                }
                return true;
            }).join('')
        } else if (index === 2) {
            s = s.split('CD').filter((s) => {
                if (s === 'CD') {
                    return false;
                }
                return true;
            }).join('')
        }
    }

    return s.length
};


// Optimized Approach - O(n)
/**
 * @param {string} s
 * @return {number}
 */
var minLength = function (s) {
    let stack = [];

    for (let char of s) {
        // Check if the current character and the top of the stack form "AB" or "CD"
        if (stack.length > 0 && ((stack[stack.length - 1] === 'A' && char === 'B') || (stack[stack.length - 1] === 'C' && char === 'D'))) {
            // Remove the last character from the stack if it forms "AB" or "CD"
            stack.pop();
        } else {
            // Otherwise, push the current character onto the stack
            stack.push(char);
        }
    }

    // The remaining characters in the stack represent the reduced string
    return stack.length;
};