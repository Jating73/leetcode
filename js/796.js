// 796. Rotate String

// Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.

// A shift on s consists of moving the leftmost character of s to the rightmost position.

// For example, if s = "abcde", then it will be "bcdea" after one shift.


// Example 1:
// Input: s = "abcde", goal = "cdeab"
// Output: true

// Example 2:
// Input: s = "abcde", goal = "abced"
// Output: false


// Constraints:

// 1 <= s.length, goal.length <= 100
// s and goal consist of lowercase English letters.

/** Optimized
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
    if (s.length !== goal.length) return false;

    return (s + s).includes(goal);
};

/** Brute Force - Failed for hidden test case
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {

    if (s.length < goal.length) return false;

    let start = s.indexOf(goal[0]);

    let i = start, j = 0;

    while (i < s.length && j < goal.length) {
        if (s[i] != goal[j]) return false;
        i++, j++
    }

    i = 0;

    while (j < goal.length) {
        if (s[i] != goal[j]) return false;
        j++;
        i++;
    }

    return true;



};

let s;

s = "abcde", goal = "cdeab"
s = "abcde", goal = "abced"

console.log(rotateString(s, goal))