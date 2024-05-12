/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    if (s.length === 0) return 0;

    // Keep Track of every char exist at which index
    const seenSet = new Set();
    let max = -Infinity;
    let left = 0;
    for (let right = 0; right < s.length; right++) {
        while (seenSet.has(s[right])) {
            seenSet.delete(s[left]);
            left++;
        }
        seenSet.add(s[right]);
        let maxLength = right - left + 1;
        max = Math.max(maxLength, max);

    }
    return max;
};

let s;
s = "abcabcbb"
s = "bbbbb"
s = "pwwkew"
s = "dvdf"

console.log(lengthOfLongestSubstring(s));