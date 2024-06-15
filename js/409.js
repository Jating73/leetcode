/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
    const charCount = {};
    for (let char of s) {
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }

    let length = 0;
    let oddCountFound = false;

    for (let count of Object.values(charCount)) {
        if (count % 2 === 0) {
            length += count;
        } else {
            length += count - 1;
            oddCountFound = true;
        }
    }

    if (oddCountFound) {
        length += 1;
    }

    return length;
};

let s;

s = "abccccdd"

console.log(longestPalindrome(s));

// Example 1:
// Input: s = "abccccdd"
// Output: 7
// Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.

// Example 2:
// Input: s = "a"
// Output: 1
// Explanation: The longest palindrome that can be built is "a", whose length is 1.