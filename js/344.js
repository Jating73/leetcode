/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    let len = s.length;

    for (let i = 0; i < len / 2; i++) {

        let temp = s[i];
        s[i] = s[len - i - 1];
        s[len - i - 1] = temp;
    }

};

let s;
s = ["h", "e", "l", "l", "o"]


reverseString(s);
console.log(s)

// Example 1:
// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

// Example 2:
// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]