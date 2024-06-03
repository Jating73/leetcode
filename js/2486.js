/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var appendCharacters = function (s, t) {

    let len1 = s.length, len2 = t.length;
    let p1 = 0, p2 = 0;

    // Base case
    if (s.length === 0) return t.length;

    while (true) {
        if (s[p1] === t[p2]) {
            p1++;
            p2++;
        }

        if (s[p1] != t[p2]) {
            p1++;
        }

        if (p1 >= len1) {
            break;
        }
    }

    if (p2 <= len2) {
        return len2 - p2;
    }

};

let s, t;
s = "coaching", t = "coding"
s = "z", t = "abcde"
s = "abcde", t = "a"
s = "lxvqffcj", t = "vjtgatotj"

console.log(appendCharacters(s, t));

// Example 1:
// Input: s = "coaching", t = "coding"
// Output: 4
// Explanation: Append the characters "ding" to the end of s so that s = "coachingding".
// Now, t is a subsequence of s ("coachingding").
// It can be shown that appending any 3 characters to the end of s will never make t a subsequence.

// Example 2:
// Input: s = "abcde", t = "a"
// Output: 0
// Explanation: t is already a subsequence of s ("abcde").

// Example 3:
// Input: s = "z", t = "abcde"
// Output: 5
// Explanation: Append the characters "abcde" to the end of s so that s = "zabcde".
// Now, t is a subsequence of s ("zabcde").
// It can be shown that appending any 4 characters to the end of s will never make t a subsequence.