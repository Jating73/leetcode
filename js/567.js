// 567. Permutation in String

// Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

// In other words, return true if one of s1's permutations is the substring of s2.



// Example 1:

// Input: s1 = "ab", s2 = "eidbaooo"
// Output: true
// Explanation: s2 contains one permutation of s1 ("ba").
// Example 2:

// Input: s1 = "ab", s2 = "eidboaoo"
// Output: false


// Constraints:

// 1 <= s1.length, s2.length <= 104
// s1 and s2 consist of lowercase English letters.

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {

    if (s1.length > s2.length) return false

    let char1 = new Array(26).fill(0);
    let char2 = new Array(26).fill(0);

    for (let i = 0; i < s1.length; i++) {
        char1[s1.charCodeAt(i) - 'a'.charCodeAt(0)] += 1
    }

    let window = s1.length - 1;

    for (let i = 0; i < s2.length; i++) {
        char2[s2.charCodeAt(i) - 'a'.charCodeAt(0)] += 1

        if (i >= window) {
            if (match(char1, char2)) return true;
            char2[s2.charCodeAt(i - window) - 'a'.charCodeAt(0)] -= 1
        }
    }

    return false;

    function match(char1, char2) {
        for (let i = 0; i < 26; i++) {
            if (char1[i] !== char2[i]) {
                return false;
            }
        }
        return true;
    }

}

let s1 = "ab", s2 = "eidbaooo"
s1 = "ab", s2 = "eidboaoo"

console.log(checkInclusion(s1, s2))