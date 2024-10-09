// 921. Minimum Add to Make Parentheses Valid

// A parentheses string is valid if and only if:

// It is the empty string,
// It can be written as AB (A concatenated with B), where A and B are valid strings, or
// It can be written as (A), where A is a valid string.
// You are given a parentheses string s. In one move, you can insert a parenthesis at any position of the string.

// For example, if s = "()))", you can insert an opening parenthesis to be "(()))" or a closing parenthesis to be "())))".
// Return the minimum number of moves required to make s valid.


// Example 1:
// Input: s = "())"
// Output: 1

// Example 2:
// Input: s = "((("
// Output: 3


/** Brute Force Approach - O(n) & O(n)
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function (s) {
    let stack = [];

    for (let char of s) {
        if (stack.length && stack[stack.length - 1] === '(' && char === ')') {
            stack.pop()
        } else {
            stack.push(char);
        }
    }
    return stack.length
};


/** Optimized Approach - O(n) & O(1)
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function (s) {
    let l = 0, r = 0;
    for (char of s) {
        if (char == "(") {
            l += 1
        } else {
            if (l == 0) {
                r += 1
            } else {
                l -= 1
            }
        }
    }

    return l + r;
};