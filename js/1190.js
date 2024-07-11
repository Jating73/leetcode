// 1190. Reverse Substrings Between Each Pair of Parentheses

// You are given a string s that consists of lower case English letters and brackets.

// Reverse the strings in each pair of matching parentheses, starting from the innermost one.

// Your result should not contain any brackets.


/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function (s) {
    let stack = [];
    
    for (let char of s) {
        if (char === ')') {
            let toReverse = '';
            
            while (stack.length && stack[stack.length - 1] !== '(') {
                toReverse += stack.pop();
            }
            
            stack.pop();
            
            for (let c of toReverse) {
                stack.push(c);
            }
        } else {
            
            stack.push(char);
        }
    }
    
    
    return stack.join('');
};

let s;

s = "(abcd)";

console.log(reverseParentheses(s));


// Example 1:
// Input: s = "(abcd)"
// Output: "dcba"

// Example 2:
// Input: s = "(u(love)i)"
// Output: "iloveu"
// Explanation: The substring "love" is reversed first, then the whole string is reversed.

// Example 3:
// Input: s = "(ed(et(oc))el)"
// Output: "leetcode"
// Explanation: First, we reverse the substring "oc", then "etco", and finally, the whole string.