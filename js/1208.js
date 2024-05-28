/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
var equalSubstring = function (s, t, maxCost) {
    let left = 0;
    let right = 0;
    let currentCost = 0;
    let maxLength = 0;

    while (right < s.length) {
        // Calculate the cost of changing s[right] to t[right]
        currentCost += Math.abs(s.charCodeAt(right) - t.charCodeAt(right));

        // If the cost exceeds maxCost, move the left pointer to reduce the window size
        if (currentCost > maxCost) {
            currentCost -= Math.abs(s.charCodeAt(left) - t.charCodeAt(left));
            left++;
        }
        // Update the maximum length of the valid substring
        maxLength = Math.max(maxLength, right - left + 1);

        // Move the right pointer to expand the window
        right++;
    }

    return maxLength;
};


// Example 1:
// Input: s = "abcd", t = "bcdf", maxCost = 3
// Output: 3
// Explanation: "abc" of s can change to "bcd".
// That costs 3, so the maximum length is 3.

// Example 2:
// Input: s = "abcd", t = "cdef", maxCost = 3
// Output: 1
// Explanation: Each character in s costs 2 to change to character in t,  so the maximum length is 1.

// Example 3:
// Input: s = "abcd", t = "acde", maxCost = 0
// Output: 1
// Explanation: You cannot make any change, so the maximum length is 1.